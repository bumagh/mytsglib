// 缓动类
export class Tween
{
    target: any;
    property: string;
    startValue: number;
    endValue: number;
    duration: number;
    easing: ( t: number ) => number;
    startTime: number = 0;
    isPlaying: boolean = false;

    constructor ( target: any, property: string, startValue: number, endValue: number, duration: number, easing: ( t: number ) => number = ( t ) => t )
    {
        this.target = target;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.easing = easing;
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
        const t = Math.min( elapsed / this.duration, 1 );
        const easedT = this.easing( t );

        this.target[ this.property ] = this.startValue + ( this.endValue - this.startValue ) * easedT;

        if ( t >= 1 )
        {
            this.isPlaying = false;
        }
    }
}