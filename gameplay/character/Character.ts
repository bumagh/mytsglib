// 角色类
export class Character
{
    id: string;
    name: string;
    position: UIPosition;
    health: number;
    maxHealth: number;

    constructor ( id: string, name: string, position: UIPosition )
    {
        this.id = id;
        this.name = name;
        this.position = position;
        this.health = 100;
        this.maxHealth = 100;
    }

    moveTo ( position: UIPosition ): void
    {
        this.position = position;
    }

    takeDamage ( amount: number ): void
    {
        this.health = Math.max( 0, this.health - amount );
    }
}