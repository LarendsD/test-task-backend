import { stringFilter } from "./filters/string/string-filter";
import { Filter } from "./types/filter.type";
import { Message } from "./types/message.type";

export const filterMessages = (messages: Message[], filter: Filter) => {
  switch (filter.type) {
    case 'string':
      return stringFilter(messages, filter);
    case 'boolean':
      // there will be boolean filter function;
    case 'number':
      // there will be number filter function;
    case 'date':
      // there will be date filter function;
    case 'and':
      // there will be and filter function;
    case 'or':
      // there will be or filter function
    default:
      throw new Error(`Type ${filter.type} is not supported!`);
  }
}