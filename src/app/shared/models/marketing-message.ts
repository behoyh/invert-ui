export class MarketingMessage {
    id: BigInteger = new Uint8Array();
    type: string = "";
    active: boolean = false;
    urgent: boolean = false;
    istargeted: boolean = false;
    title: string = "";
    body: string = "";
    link: string = null
    image: string = null;
    startdate: Date = new Date();
    enddate: Date = new Date();
    created: Date = new Date();
    modified: Date = new Date();
}