export {};

/**
 * WordPress Media Frame types
 */
interface MediaFrameSelection {
    length: number;
    first: () => {
        toJSON: () => {
            url: string;
            id: number;
            mime?: string;
        };
    };
}

interface MediaFrame {
    state: () => {
        get: (key: string) => MediaFrameSelection;
    };
    on: (event: string, callback: () => void) => void;
    open: () => void;
}

declare global {
    /**
     * Interface for dynamically imported module
     */
    interface ModuleWithInit {
        init?: () => void;
    }

    interface Window {
        wpCafeI18nState?: {
            baseUrl: string;
            locale: string;
            domainMap: Record<string, string>;
            domainPaths: Record<string, string>;
        };
        wpCafe?: Record<string, any>;
        wpCafePro?: Record<string, any>;
        wpcafe_enabled_modules?: string[];
        wp?: {
            wpCafeI18nLoader?: {
                state: {
                    baseUrl: string | null;
                    locale: string;
                    domainMap: Record<string, string>;
                    domainPaths: Record<string, string>;
                };
            };
            hooks?: {
                addAction?: (
                    hookName: string,
                    namespace: string,
                    callback: (...args: any[]) => void,
                    priority?: number,
                ) => void;
                removeAction?: (hookName: string, namespace: string) => void;
                doAction?: (hookName: string, ...args: any[]) => void;
                hasAction?: (hookName: string, namespace?: string) => boolean;
                removeAllActions?: (hookName: string) => void;

                addFilter?: (
                    hookName: string,
                    namespace: string,
                    callback: (...args: any[]) => any,
                    priority?: number,
                ) => void;
                removeFilter?: (hookName: string, namespace: string) => void;
                applyFilters?: (
                    hookName: string,
                    value: any,
                    ...args: any[]
                ) => any;
                hasFilter?: (hookName: string, namespace?: string) => boolean;
                removeAllFilters?: (hookName: string) => void;
            };
            media: (options?: any) => MediaFrame;
        };
        audioMediaUploader?: MediaFrame;
        svgMediaUploader?: MediaFrame;
    }
}
