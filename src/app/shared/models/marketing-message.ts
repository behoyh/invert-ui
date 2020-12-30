import * as moment from 'moment';

export class MarketingMessage {

    public constructor(init?: Partial<MarketingMessage>) {
        Object.assign(this, init);
    }

    id: BigInteger = new Uint8Array();
    type: string = "";
    active: boolean = false;
    urgent: boolean = false;
    istargeted: boolean = false;
    title: string = "";
    body: string = "";
    link: string = null;
    bloB_ID: Number = 0;
    startdate: Date = new Date();
    enddate: Date = new Date();
    created: moment.Moment = moment();
    modified: moment.Moment = moment();
}