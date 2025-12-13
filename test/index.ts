// 主测试文件 - 运行所有模块测试
import { testGameManager } from './core/manager/GameManager.test';
import { testEventEmitter } from './core/event/EventEmitter.test';
import { testConfigManager } from './core/config/ConfigManager.test';
import { testCharacter } from './gameplay/character/Character.test';
import { testUIComponent } from './gameplay/ui/UIComponent.test';
import { testSkill } from './gameplay/skills/Skill.test';
import { testItem } from './gameplay/items/Item.test';
import { testAnimation } from './common/animation/Animation.test';
import { testEffect } from './common/effects/Effect.test';
import { testTween } from './common/tween/Tween.test';
import { testScreenUtils } from './utils/screen/screenUtils.test';

export function runAllTests ()
{
    console.log( '开始运行所有测试...\n' );

    testGameManager();
    console.log( '' );

    testEventEmitter();
    console.log( '' );

    testConfigManager();
    console.log( '' );

    testCharacter();
    console.log( '' );

    testUIComponent();
    console.log( '' );

    testSkill();
    console.log( '' );

    testItem();
    console.log( '' );

    testAnimation();
    console.log( '' );

    testEffect();
    console.log( '' );

    testTween();
    console.log( '' );

    testScreenUtils();
    console.log( '' );

    console.log( '所有测试运行完成！' );
}

// 如果在浏览器或Node.js环境中，可以直接调用
// runAllTests();