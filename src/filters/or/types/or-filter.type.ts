import { Filter } from "../../../types/filter.type";

export type OrFilter = {
  type: 'or'
  filters: Filter[];
};