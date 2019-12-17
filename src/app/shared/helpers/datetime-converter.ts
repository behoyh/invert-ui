import * as moment from 'moment';

export class DatetimeConverter {
    public static ConvertToDateTime(date:Date): moment.Moment {
        if(!moment.isDate) return;
        return moment(date);
    }
}