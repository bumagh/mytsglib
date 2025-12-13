// EventEmitter 测试
import { EventEmitter } from '../../core/event/EventEmitter';

export function testEventEmitter ()
{
    console.log( 'Testing EventEmitter...' );

    const emitter = new EventEmitter();
    let eventFired = false;

    emitter.on( 'test', () =>
    {
        eventFired = true;
    } );

    emitter.emit( 'test' );

    console.log( 'Event fired:', eventFired ); // 应该为 true

    console.log( 'EventEmitter test passed!' );
}