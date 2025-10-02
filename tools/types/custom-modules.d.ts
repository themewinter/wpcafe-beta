// types/custom-modules.d.ts

// 1. Declare WordPress Webpack config
declare module "@wordpress/scripts/config/webpack.config" {
    const config: any; // Or use webpack.Configuration if you want typing
    export default config;
}

// 2. Declare Automattic i18n Webpack Plugin
declare module "@automattic/i18n-loader-webpack-plugin" {
    import type { Compiler } from "webpack";

    class I18nPlugin {
        constructor(options?: Record<string, any>);
        apply(compiler: Compiler): void;
    }

    export default I18nPlugin;
}
