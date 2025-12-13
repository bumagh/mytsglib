// UI组件基类
export abstract class UIComponent
{
    id: string;
    position: UIPosition;
    visible: boolean = true;

    constructor ( id: string, position: UIPosition )
    {
        this.id = id;
        this.position = position;
    }

    abstract render (): void;

    show (): void
    {
        this.visible = true;
    }

    hide (): void
    {
        this.visible = false;
    }
}