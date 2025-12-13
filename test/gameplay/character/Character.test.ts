// Character 测试
import { Character } from '../../gameplay/character/Character';

export function testCharacter ()
{
    console.log( 'Testing Character...' );

    const char = new Character( '1', 'TestChar', { x: 0, y: 0 } );

    console.log( 'Initial health:', char.health ); // 应该为 100

    char.takeDamage( 20 );
    console.log( 'Health after damage:', char.health ); // 应该为 80

    char.moveTo( { x: 10, y: 10 } );
    console.log( 'Position after move:', char.position ); // 应该为 {x:10, y:10}

    console.log( 'Character test passed!' );
}