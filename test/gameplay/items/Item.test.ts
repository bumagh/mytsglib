// Item 测试
import { Item } from '../../gameplay/items/Item';

export function testItem ()
{
    console.log( 'Testing Item...' );

    const item = new Item( '1', 'TestItem', 'A test item', 'consumable' );

    console.log( 'Initial quantity:', item.quantity ); // 应该为 1

    item.use();
    console.log( 'Quantity after use:', item.quantity ); // 应该为 0

    console.log( 'Item test passed!' );
}