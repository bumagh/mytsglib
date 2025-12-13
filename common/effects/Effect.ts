// 特效类
export class Effect
{
    id: string;
    type: string;
    position: UIPosition;
    duration: number;
    startTime: number = 0;
    isActive: boolean = false;

    constructor ( id: string, type: string, position: UIPosition, duration: number )
    {
        this.id = id;
        this.type = type;
        this.position = position;
        this.duration = duration;
    }

    play (): void
    {
        this.startTime = Date.now();
        this.isActive = true;
    }

    update (): void
    {
        if ( !this.isActive ) return;

        const elapsed = Date.now() - this.startTime;
        if ( elapsed >= this.duration )
        {
            this.isActive = false;
        }
    }
}