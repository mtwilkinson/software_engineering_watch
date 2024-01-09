export interface WatchTime {
    hour: string;
    minute: string;
    second: string;
}

export interface WatchComponent {
    watchTime: WatchTime;
}

export interface WatchSetterComponent {
    setTime: Function;
}