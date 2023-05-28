export type StringFilterType = {
  type: 'string';
  field: string;
  operation: 'eq' | 'startsWith' | 'endsWith' | 'contains';
  value: string;
};