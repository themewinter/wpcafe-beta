/**
 * Decorator for registering a module
 * the module must be a class
 */
export function RegisterModule<T extends { new (...args: any[]): {} }>(
    handlerName: string,
) {
    return (constructor: T) => {
        const Module = class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                // @ts-ignore
                this.state = (window as any).wpCafeI18nLoader?.state || {
                    baseUrl: null,
                    locale: "en-US",
                    domainMap: {},
                    domainPaths: {},
                };
            }
        };

        Object.defineProperty(window, handlerName, {
            value: new Module(),
            writable: false,
            configurable: false,
            enumerable: false,
        });
    };
}

/**
 * validate downloadI18n method
 */
export function ValidateDownloadI18n(
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function () {
        const state = (this as { state: any }).state;

        if (!state || !state.locale) {
            console.warn("i18n state not properly initialized");
            return;
        }

        if (state.locale === "en-US") {
            return;
        }

        if (typeof fetch === "undefined") {
            throw new Error("Fetch API is not available.");
        }

        originalMethod.apply(this, arguments);
    };
}
