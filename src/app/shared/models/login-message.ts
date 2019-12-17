import * as moment from 'moment';

export class LoginMessage {
    id: Number;
    active: boolean;
    android_version: string;
    android_message: string;
    ios_version: string;
    ios_message: string;
    type: number;
    ios_blocked: boolean;
    android_blocked: boolean;
    starttime: moment.Moment;
    endtime: moment.Moment;
    created: moment.Moment;
    modified: moment.Moment;
}