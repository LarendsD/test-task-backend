import { filterMessages } from "../..";
import { Message } from "../../types/message.type";
import { OrFilter } from "./types/or-filter.type";

export const orFilter = (messages: Message[], { filters }: OrFilter): Message[] => {
  const result = [];

  for (const message of messages) {
    for (const filter of filters) {
      const filteredMessages = filterMessages([message], filter);
  
      if (filteredMessages.length !== 0) {
        result.push(message);
        break;
      }
    }
  };

  return result;
}