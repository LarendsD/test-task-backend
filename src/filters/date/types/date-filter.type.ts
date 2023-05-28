import { DateType } from "../../../types/date.type";

export type DateFilter = {
  type: 'date';
  field: string;
  operation: 'eq' | 'after' | 'before';
  value: DateType;
};