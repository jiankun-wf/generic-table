import { ActionItem, Key, Size } from "./table";
import type { PaginationProps } from "naive-ui";

type RowData = Record<string, any>;

type Params = RowData;

export type TableProps<T = RowData> = {
  data: T[];

  size: Size;

  api?: (...args: any[]) => Promise<any>;
  transformFetch?(data: any): any;
  beforeFetch: (params: Params) => Params;
  extraSearch: Params;

  requestFields?: { page?: string; size?: string };
  responseFields?: { total?: string };

  title?: string;

  resize?: boolean;

  actions: ActionItem[];

  rowSelection?: {
    selectedRowKes: Key[];
    onChange(keys: Key[], rows: Array<RowData>): void;
  };

  rowKey?: Key | ((rowData: RowData) => Key);

  bordered?: boolean;
  spinning?: boolean;
  spinProps: { strokeWidth?: number; stroke?: string };
  virtualScroll?: boolean;

  expandRowKeys?: Key[];
  defaultExpandAll?: boolean;

  singleColumn?: boolean;
  singleLine?: boolean;

  paginationBehaviorOnFilter?: "first" | "current";
  pagination?: PaginationProps;
  "onUpdate:page": (page: number) => void;
  "onUpdate:pageSize": (size: number) => void;
};
