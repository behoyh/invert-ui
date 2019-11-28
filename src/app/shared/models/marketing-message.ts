export class MarketingMessage{
    id:BigInteger;
    type:number;
    active: boolean;
    urgent: boolean;
    istargeted:boolean;
    title:string;
    body:string;
    image:string;
    startdate:Date;
    enddate:Date;
    created:Date;
    modified:Date;
}