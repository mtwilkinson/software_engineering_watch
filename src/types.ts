export interface WatchTime { // this is an interface for the time displayed on the watch
    hour: string;
    minute: string;
    second: string;
}

/*
    these 2 interfaces are for inputs for their respective component.
    this is necessary to pass data between components.
 */
export interface WatchComponent { // this is an interface for the input to the watch component
    watchTime: WatchTime;
}

export interface WatchSetterComponent { // this is an interface for the input to the watch setter component
    setTime: Function;
}