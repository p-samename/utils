import { format } from "date-fns";

interface DateUtils {
  defaultFormatRegExp: object;
  defaultFormat: string;
  today(): string;
}

const dateUtils: DateUtils = {
  defaultFormatRegExp: /^\d{4}-\d{2}-\d{2}$/,
  defaultFormat: "yyyy-MM-dd",

  today(): string {
    return format(new Date(), this.defaultFormat);
  },
};

console.log(dateUtils.defaultFormatRegExp);
