import { andFilter } from "./filters/and/and-filter";
import { booleanFilter } from "./filters/boolean/boolean-filter";
import { dateFilter } from "./filters/date/date-filter";
import { numberFilter } from "./filters/number/number-filter";
import { orFilter } from "./filters/or/or-filter";
import { stringFilter } from "./filters/string/string-filter";
import { Filter } from "./types/filter.type";
import { Message } from "./types/message.type";

export const filterMessages = (messages: Message[], filter: Filter): Message[] => {
  switch (filter.type) {
    case 'string':
      return stringFilter(messages, filter);
    case 'boolean':
      return booleanFilter(messages, filter);
    case 'number':
      return numberFilter(messages, filter);
    case 'date':
      return dateFilter(messages, filter);
    case 'and':
      return andFilter(messages, filter);
    case 'or':
      return orFilter(messages, filter);
    default:
      throw new Error(`Filter type is not supported!`);
  }
}