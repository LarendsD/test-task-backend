import { Message } from "../../types/message.type";
import { BooleanFilter } from "./types/boolean-filter.type";

export const booleanFilter = (messages: Message[], filter: BooleanFilter) => {
  const { value, operation, field } = filter

  return messages.filter((message) => {
    const fieldValue = message[field];

    if (typeof fieldValue !== 'boolean') {
      return false;
    }

    switch (operation) {
      case 'eq':
        return fieldValue === value;
      default:
        throw new Error(`Operation ${operation} is not supported!`);
    }
  });
}