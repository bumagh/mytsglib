// screenUtils 测试
import { getScreenInfo, SCREEN_WIDTH, SCREEN_HEIGHT } from '../../core/utils/screen/screenUtils';

export function testScreenUtils ()
{
    console.log( 'Testing screenUtils...' );

    const info = getScreenInfo();
    console.log( 'Screen info:', info );

    console.log( 'SCREEN_WIDTH:', SCREEN_WIDTH );
    console.log( 'SCREEN_HEIGHT:', SCREEN_HEIGHT );

    console.log( 'screenUtils test passed!' );
}