import { useState } from "react";
import { WidgetItemType } from "../shared/types";

export const WidgetCreate = ({
  createWidget,
}: {
  createWidget: (widgetType: WidgetItemType) => void;
}) => {
  const [widgetType, setWidgetType] = useState<WidgetItemType>("rialto");
  return (
    <div className="widget-create">
      <button
        className="widget-create__btn"
        onClick={() => createWidget(widgetType)}
      >
        Create Widget
      </button>
      <select
        className="select"
        defaultValue={widgetType}
        onChange={(e) => setWidgetType(e.target.value as WidgetItemType)}
      >
        <option value="weather">Weather</option>
        <option value="rialto">Exchange Rates</option>
      </select>
    </div>
  );
};
