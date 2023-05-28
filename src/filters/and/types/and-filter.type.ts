import { Filter } from "../../../types/filter.type";

export type AndFilter = {
  type: 'and'
  filters: Filter[];
};