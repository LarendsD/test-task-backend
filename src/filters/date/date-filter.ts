import { Message } from "../../types/message.type";
import { DateFilter } from "./types/date-filter.type";

export const dateFilter = (messages: Message[], filter: DateFilter) => {
  const { value, operation, field } = filter

  return messages.filter((message) => {
    let fieldValue = message[field];

    if (!(fieldValue instanceof Date) && typeof fieldValue !== 'string') {
      return false;
    };

    fieldValue = new Date(fieldValue).getTime();
    const dateValue = new Date(value).getTime();

    switch (operation) {
      case 'before':
        return fieldValue > dateValue
      case 'eq':
        return fieldValue === dateValue;
      case 'after':
        return fieldValue > dateValue;
      default:
        throw new Error(`Operation ${operation} is not supported!`);
    }
  });
}