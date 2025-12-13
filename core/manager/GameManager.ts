// 游戏管理器
export class GameManager
{
    private static instance: GameManager;
    private gameState: GameState = 'idle';

    private constructor () { }

    static getInstance (): GameManager
    {
        if ( !GameManager.instance )
        {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    getGameState (): GameState
    {
        return this.gameState;
    }

    setGameState ( state: GameState ): void
    {
        this.gameState = state;
    }
}