export type OrderFiledType = "name" | "id";

export type FilterType = {
  orderBy?: OrderFiledType;
  order?: "asc" | "desc";
  search?: string;
  page?: string;
};
