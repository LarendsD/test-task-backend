export type NumberFilter = {
  type: 'number';
  field: string;
  operation: 'eq' | 'gt' | 'lt' | 'gte' | 'lte';
  value: number;
};