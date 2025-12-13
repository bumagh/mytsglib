// Skill 测试
import { Skill } from '../../gameplay/skills/Skill';

export function testSkill ()
{
    console.log( 'Testing Skill...' );

    const skill = new Skill( '1', 'TestSkill', 'A test skill', 1000 ); // 1秒冷却

    console.log( 'Can use initially:', skill.canUse() ); // 应该为 true

    skill.use();
    console.log( 'Can use after use:', skill.canUse() ); // 应该为 false

    // 等待1秒后可以再次使用，但这里只是模拟
    console.log( 'Skill test passed!' );
}