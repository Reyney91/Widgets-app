import { FC } from "react";
import { useDraggable } from "@dnd-kit/core";
import {
  DeleteIcon,
  WeatherWidget,
  RialtoWidget,
  DragIcon,
} from "../shared/ui";
import { WidgetsItem } from "../shared/types";

interface WidgetProps extends WidgetsItem {
  listId: number;
  deleteWidget: (widgetId: number) => void;
}

export const Widget: FC<WidgetProps> = ({
  id,
  listId,
  name,
  type,
  value,
  deleteWidget,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: { id, listId, name, value, type },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <li className="widget" ref={setNodeRef} style={style}>
      <div {...listeners} {...attributes}>
        <DragIcon />
      </div>
      <div className="widget__info">
        {type === "rialto" ? <RialtoWidget /> : <WeatherWidget />}
        <div>
          <DeleteIcon
            onClick={() => {
              deleteWidget(id);
            }}
          />
        </div>
      </div>
    </li>
  );
};
