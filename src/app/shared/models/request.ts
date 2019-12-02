export class ApiRequest<T> {

    public constructor(data:T)
    {
        this.deviceID = "",
        this.deviceName = "invert-ui",
        this.osVersion = "",
        this.appVersion = "0.0.1"
        this.data = data
    }

    deviceID: string;
    deviceName: string;
    osVersion: string;
    appVersion: string;
    data: T; 
}