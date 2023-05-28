export type BooleanFilter = {
  type: 'boolean';
  field: string;
  operation: 'eq';
  value: boolean;
};