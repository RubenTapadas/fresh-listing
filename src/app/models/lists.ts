export interface List {
  id: number;
  name: string;
  fields: Field[];
  entries: any;
  updateMoment?: number;
}

export interface Field {
  id: number;
  label: string;
  disable?: boolean;
}
