import * as moment from 'moment';

export class MarketingMessage {

    public constructor(init?: Partial<MarketingMessage>) {
        Object.assign(this, init);
    }

    id: BigInteger = new Uint8Array();
    type: string = "";
    active: boolean = false;
    urgent: boolean = false;
    isTargeted: boolean = false;
    title: string = "";
    body: string = "";
    link: string = null;
    blobId: Number = 0;
    startDate: Date = new Date();
    endDate: Date = new Date();
    created: moment.Moment = moment();
    modified: moment.Moment = moment();
}