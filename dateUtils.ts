import { differenceInCalendarDays, format, formatDistance } from "date-fns";

class DateUtils {
  defaultFormatRegExp: RegExp;
  defaultFormat: string;

  constructor() {
    this.defaultFormatRegExp = /^\d{4}-\d{2}-\d{2}$/;
    this.defaultFormat = "yyyy-MM-dd";
  }

  // 오늘 날짜를 format의 형식으로 반환함
  today(_format: string = this.defaultFormat): string {
    return format(new Date(), _format);
  }

  // startDate 와 endDate의 날짜의 차이를 일수로 반환
  distanceDate(startDate: Date | string, endDate: Date | string): number {
    return Math.abs(differenceInCalendarDays(startDate, endDate));
  }
}

const dateUtils = new DateUtils();

export default dateUtils;
