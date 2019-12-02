export class MarketingMessage{
    id:BigInteger;
    type:string;
    active: boolean;
    urgent: boolean;
    istargeted:boolean;
    title:string;
    body:string;
    link:string;
    image:string;
    startdate:Date;
    enddate:Date;
    created:Date;
    modified:Date;
}