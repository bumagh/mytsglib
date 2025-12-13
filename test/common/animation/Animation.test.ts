// Animation 测试
import { Animation } from '../../common/animation/Animation';

export function testAnimation ()
{
    console.log( 'Testing Animation...' );

    const target = { x: 0 };
    const anim = new Animation( target, 'x', 0, 100, 1000 ); // 1秒动画

    console.log( 'Initial value:', target.x ); // 应该为 0

    anim.play();
    // 模拟更新
    setTimeout( () =>
    {
        anim.update();
        console.log( 'Value after update:', target.x ); // 应该大于0
        console.log( 'Animation test passed!' );
    }, 100 );
}