import { Message } from "../../types/message.type";
import { NumberFilter } from "./types/number-filter.type";

export const numberFilter = (messages: Message[], filter: NumberFilter) => {
  const { value, operation, field } = filter

  return messages.filter((message) => {
    const fieldValue = message[field];

    if (typeof fieldValue !== 'number') {
      return false
    }

    switch (operation) {
      case 'gt':
        return fieldValue > value;
      case 'gte':
        return fieldValue >= value;
      case 'lt':
        return fieldValue < value;
      case 'eq':
        return fieldValue === value;
      case 'lte':
        return fieldValue <= value
      default:
        throw new Error(`Operation ${operation} is not supported!`);
    }
  });
}