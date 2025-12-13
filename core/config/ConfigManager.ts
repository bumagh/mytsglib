// 配置管理器
export class ConfigManager
{
    private static instance: ConfigManager;
    private configs: { [ key: string ]: any } = {};

    private constructor () { }

    static getInstance (): ConfigManager
    {
        if ( !ConfigManager.instance )
        {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    setConfig ( key: string, value: any ): void
    {
        this.configs[ key ] = value;
    }

    getConfig ( key: string ): any
    {
        return this.configs[ key ];
    }
}