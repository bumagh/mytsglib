// 基础游戏类型
export type GameState = 'idle' | 'preview' | 'betting' | 'running' | 'paused' | 'finished';

// UI相关类型
export interface ButtonConfig
{
    x: number;
    y: number;
    width: number;
    height: number;
    text?: string;
    visible?: boolean;
    id?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export interface ModalConfig
{
    id: string;
    width: number;
    height: number;
    title?: string;
    visible: boolean;
    buttons?: ButtonConfig[];
    content?: any;
}

export interface UIPosition
{
    x: number;
    y: number;
}

export interface GameData
{
    score: number;
    betAmount: number;
    selectedBall?: any;
    gameState: GameState;
    lastClaimTime?: number;
    claimCooldown?: number;
    claimAmount?: number;
}

// 事件类型
export interface GameEvent
{
    type: string;
    data?: any;
}

export interface ClickEvent extends GameEvent
{
    type: 'click';
    x: number;
    y: number;
}

// 弹窗结果
export interface ModalResult
{
    modalId: string;
    action: string;
    data?: any;
}