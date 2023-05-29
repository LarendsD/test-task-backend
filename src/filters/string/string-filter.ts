import { Message } from "../../types/message.type";
import { StringFilter } from "./types/string-filter.type";

export const stringFilter = (messages: Message[], filter: StringFilter) => {
  const { value, operation, field } = filter

  return messages.filter((message) => {
    const fieldValue = message[field];

    if (typeof fieldValue !== 'string') {
      return false
    }

    switch (operation) {
      case 'contains':
        return fieldValue.includes(value);
      case 'endsWith':
        return fieldValue.endsWith(value);
      case 'startsWith':
        return fieldValue.startsWith(value);
      case 'eq':
        return fieldValue === value;
      default:
        throw new Error(`Operation ${operation} is not supported!`);
    }
  });
}