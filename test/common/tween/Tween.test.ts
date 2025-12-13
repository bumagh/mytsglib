// Tween 测试
import { Tween } from '../../common/tween/Tween';

export function testTween ()
{
    console.log( 'Testing Tween...' );

    const target = { x: 0 };
    const tween = new Tween( target, 'x', 0, 100, 1000 ); // 1秒缓动

    console.log( 'Initial value:', target.x ); // 应该为 0

    tween.play();
    // 模拟更新
    setTimeout( () =>
    {
        tween.update();
        console.log( 'Value after update:', target.x ); // 应该大于0
        console.log( 'Tween test passed!' );
    }, 100 );
}