import { MarketingMessage } from './marketing-message';

export class MarketingObject
{
    public MarketingObject(obj)
    {
        this.banner = obj.banner;
        this.popup = obj.popup;
        this.acknowledgment = obj.acknowledgment;
        this.marketing = obj.marketing;
    }
    banner: MarketingMessage;
    popup: MarketingMessage;
    acknowledgment:MarketingMessage;
    marketing:MarketingMessage[];
}