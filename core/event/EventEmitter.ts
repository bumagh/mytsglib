// 事件发射器
export class EventEmitter
{
    private events: { [ key: string ]: Function[] } = {};

    on ( event: string, callback: Function ): void
    {
        if ( !this.events[ event ] )
        {
            this.events[ event ] = [];
        }
        this.events[ event ].push( callback );
    }

    off ( event: string, callback: Function ): void
    {
        if ( this.events[ event ] )
        {
            this.events[ event ] = this.events[ event ].filter( cb => cb !== callback );
        }
    }

    emit ( event: string, data?: any ): void
    {
        if ( this.events[ event ] )
        {
            this.events[ event ].forEach( callback => callback( data ) );
        }
    }
}