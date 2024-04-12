export type WidgetItemType = 'rialto' | 'weather';
export type WidgetsItem = {
  id: number;
  name?: string;
  value?: string;
  type: WidgetItemType
}

export type WidgetsListType = {
  id: number;
  array: WidgetsItem[]

}
