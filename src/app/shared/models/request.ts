export class ApiRequest<T> {

    public constructor(data:T)
    {
        this.deviceID = "";
        this.deviceName = "invert-ui";
        this.osVersion = "";
        this.appVersion = "0.0.1";
        this.platform = "web";
        this.data = data;
    }

    deviceID: string;
    deviceName: string;
    osVersion: string;
    appVersion: string;
    platform: string
    data: T; 
}