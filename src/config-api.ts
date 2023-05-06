interface ConfigApi {
    /** Строка подключения API */
    url: string | null;
}

enum ConfigType {
    /** DEV окружение */
    DEV = 'dev',
    /** PROD окружение */
    PROD = 'prod',
}

const config_api: Record<ConfigType, ConfigApi> = {
    /** DEV API */
    [ConfigType.DEV]: { url: 'https://unknown-messenger.ru/api/' },
    /**
     * PROD API
     *
     * @deprecated
     */
    [ConfigType.PROD]: { url: null },
};

export default config_api;
