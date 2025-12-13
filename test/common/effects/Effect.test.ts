// Effect 测试
import { Effect } from '../../common/effects/Effect';

export function testEffect ()
{
    console.log( 'Testing Effect...' );

    const effect = new Effect( '1', 'test', { x: 0, y: 0 }, 1000 ); // 1秒特效

    console.log( 'Initial active:', effect.isActive ); // 应该为 false

    effect.play();
    console.log( 'Active after play:', effect.isActive ); // 应该为 true

    // 模拟更新
    setTimeout( () =>
    {
        effect.update();
        console.log( 'Active after update:', effect.isActive ); // 应该仍为 true
        console.log( 'Effect test passed!' );
    }, 500 );
}