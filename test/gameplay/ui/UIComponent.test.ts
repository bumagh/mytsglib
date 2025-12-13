// UIComponent 测试
import { UIComponent } from '../../gameplay/ui/UIComponent';

class TestUIComponent extends UIComponent
{
    render (): void
    {
        console.log( 'Rendering component' );
    }
}

export function testUIComponent ()
{
    console.log( 'Testing UIComponent...' );

    const component = new TestUIComponent( 'test', { x: 0, y: 0 } );

    console.log( 'Initial visibility:', component.visible ); // 应该为 true

    component.hide();
    console.log( 'Visibility after hide:', component.visible ); // 应该为 false

    component.show();
    console.log( 'Visibility after show:', component.visible ); // 应该为 true

    console.log( 'UIComponent test passed!' );
}