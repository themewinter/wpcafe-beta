/**
 * this file is responsible for downloading and registering translations
 *
 * @author Ashraf Mollah<mollah.dev@gmail.com>
 * @Version 1.0.2
 *
 * @learn https://github.com/Automattic/i18n-loader-webpack-plugin/tree/trunk
 */

import { setLocaleData } from "@wordpress/i18n";
// @ts-ignore;
import MD5 from "md5-es";
import { RegisterModule, ValidateDownloadI18n } from "./decorators";

type DomainPath<T extends {}> = keyof T;

@RegisterModule("wpCafeI18nLoader")
//@ts-ignore
class I18nLoader {
    locationMap = {
        plugin: "plugins/",
        theme: "themes/",
        core: "",
    };

    state = {
        baseUrl: null,
        locale: null,
        domainMap: {},
        domainPaths: {},
    };

    private getPathPrefix<T extends DomainPath<typeof this.state.domainPaths>>(
        domain: T,
    ) {
        if (domain in this.state.domainPaths) {
            return this.state.domainPaths[domain];
        }

        return "";
    }

    private hasOwn(obj: {}, prop: string) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    /**
     * download translations
     *
     * @param _path
     * @param _domain
     * @param _location
     */
    @ValidateDownloadI18n
    async downloadI18n(
        path: string,
        domain: DomainPath<typeof this.state.domainPaths>,
        location: keyof typeof this.locationMap,
    ) {
        // Extract any query part and hash the script name like WordPress does.
        const pathPrefix = this.getPathPrefix(domain);

        let hash, query;
        const i = path.indexOf("?");
        if (i >= 0) {
            // @ts-ignore
            hash = MD5.hash(
                (pathPrefix + path.substring(0, i)).replace(/\\/g, "/"),
            );
            query = path.substring(i);
        } else {
            // @ts-ignore
            hash = MD5.hash((pathPrefix + path).replace(/\\/g, "/"));
            query = "";
        }

        // Download.
        const locationAndDomain = this.hasOwn(this.state.domainMap, domain)
            ? this.state.domainMap[domain]
            : this.locationMap[location] + domain;

        const res = await fetch(
            // prettier-ignore
            `${ this.state.baseUrl }${ locationAndDomain }-${ this.state.locale }-${ hash }.json${ query }`,
        );
        if (!res.ok) {
            throw new Error(
                `HTTP request failed: ${res.status} ${res.statusText}`,
            );
        }

        const data = await res.json();

        // Extract the messages from the file and register them.
        const localeData = this.hasOwn(data.locale_data, domain)
            ? data.locale_data[domain]
            : data.locale_data.messages;
        localeData[""].domain = domain;
        setLocaleData(localeData, domain);
    }
}
