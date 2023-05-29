import { filterMessages } from "../..";
import { Message } from "../../types/message.type";
import { AndFilter } from "./types/and-filter.type";

export const andFilter = (messages: Message[], { filters }: AndFilter): Message[] => {
  const result = [];

  for (const message of messages) {
    let successCount = 0;

    for (const filter of filters) {
      const filteredMessages = filterMessages([message], filter);
  
      if (filteredMessages.length !== 0) {
        successCount += 1;
      }
    }

    if (successCount === filters.length) {
      result.push(message);
    };
  };

  return result;
}