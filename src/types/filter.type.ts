import { AndFilter } from "../filters/and/types/and-filter.type";
import { BooleanFilter } from "../filters/boolean/types/boolean-filter.type";
import { DateFilter } from "../filters/date/types/date-filter.type";
import { NumberFilter } from "../filters/number/types/number-filter.type";
import { OrFilter } from "../filters/or/types/or-filter.type";
import { StringFilter } from "../filters/string/types/string-filter.type";

export type Filter = StringFilter | NumberFilter | BooleanFilter | DateFilter | OrFilter | AndFilter;