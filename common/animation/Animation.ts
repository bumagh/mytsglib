// 动画类
export class Animation
{
    target: any;
    property: string;
    startValue: number;
    endValue: number;
    duration: number;
    startTime: number = 0;
    isPlaying: boolean = false;

    constructor ( target: any, property: string, startValue: number, endValue: number, duration: number )
    {
        this.target = target;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
    }

    play (): void
    {
        this.startTime = Date.now();
        this.isPlaying = true;
    }

    update (): void
    {
        if ( !this.isPlaying ) return;

        const elapsed = Date.now() - this.startTime;
        const progress = Math.min( elapsed / this.duration, 1 );

        this.target[ this.property ] = this.startValue + ( this.endValue - this.startValue ) * progress;

        if ( progress >= 1 )
        {
            this.isPlaying = false;
        }
    }
}