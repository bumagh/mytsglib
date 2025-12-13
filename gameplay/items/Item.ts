// 道具类
export class Item
{
    id: string;
    name: string;
    description: string;
    type: string;
    quantity: number = 1;

    constructor ( id: string, name: string, description: string, type: string )
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
    }

    use (): void
    {
        if ( this.quantity > 0 )
        {
            this.quantity--;
        }
    }
}