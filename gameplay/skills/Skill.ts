// 技能类
export class Skill
{
    id: string;
    name: string;
    description: string;
    cooldown: number;
    lastUsed: number = 0;

    constructor ( id: string, name: string, description: string, cooldown: number )
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.cooldown = cooldown;
    }

    canUse (): boolean
    {
        return Date.now() - this.lastUsed >= this.cooldown;
    }

    use (): boolean
    {
        if ( this.canUse() )
        {
            this.lastUsed = Date.now();
            return true;
        }
        return false;
    }
}