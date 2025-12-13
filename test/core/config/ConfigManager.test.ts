// ConfigManager 测试
import { ConfigManager } from '../../core/config/ConfigManager';

export function testConfigManager ()
{
    console.log( 'Testing ConfigManager...' );

    const cm1 = ConfigManager.getInstance();
    const cm2 = ConfigManager.getInstance();

    console.log( 'Singleton check:', cm1 === cm2 ); // 应该为 true

    cm1.setConfig( 'testKey', 'testValue' );
    console.log( 'Config value:', cm2.getConfig( 'testKey' ) ); // 应该为 'testValue'

    console.log( 'ConfigManager test passed!' );
}