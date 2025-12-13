// GameManager 测试
import { GameManager } from '../../core/manager/GameManager';

export function testGameManager ()
{
    console.log( 'Testing GameManager...' );

    const gm1 = GameManager.getInstance();
    const gm2 = GameManager.getInstance();

    console.log( 'Singleton check:', gm1 === gm2 ); // 应该为 true

    gm1.setGameState( 'running' );
    console.log( 'Game state after set:', gm2.getGameState() ); // 应该为 'running'

    console.log( 'GameManager test passed!' );
}