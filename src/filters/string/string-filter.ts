import { Message } from "../../types/message.type";
import { StringFilterType } from "./types/string-filter.type";

export const stringFilter = (messages: Message[], filter: StringFilterType) => {
  const { value, operation, field, type } = filter

  return messages.filter((message) => {
    const fieldValue = message[field];
    if (!fieldValue) {
      return false;
    }

    if (typeof fieldValue !== 'string') {
      throw new Error(`Somehow ${fieldValue} was called in string filter, when it's ${type}`);
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