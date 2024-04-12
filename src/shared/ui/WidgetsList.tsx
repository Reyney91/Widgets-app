import { FC } from 'react';
import { WidgetCreate } from '../../features/WidgetCreate';
import { WidgetItemType, WidgetsItem } from '../types';
import { Widget } from '../../widgets/Widget';
import { useDroppable } from '@dnd-kit/core';

interface WidgetListPops {
	widgetArray: WidgetsItem[];
	setWidgetsList(id: number, array: WidgetsItem[]): void;
	id: number;
}

export const WidgetsList: FC<WidgetListPops> = ({
	widgetArray,
	setWidgetsList,
	id,
}) => {
	const { isOver, setNodeRef } = useDroppable({
		id: id,
	});
	const style = {
		backgroundColor: isOver ? 'rgba(100,100,100,0.8)' : undefined,
		width: isOver ? '100%' : undefined,
		height: isOver ? '140px' : undefined,
	};
	const deleteWidget = (widgetId: number) => {
		const array = widgetArray.filter((widget) => widget.id !== widgetId);
		setWidgetsList(id, array);
	};
	const addWidget = (widgetType: WidgetItemType) => {
		switch (widgetType) {
			case 'weather':
				setWidgetsList(id, [
					...widgetArray,
					{
						id: Date.now(),
						type: widgetType,
					},
				]);
				break;
			case 'rialto':
				setWidgetsList(id, [
					...widgetArray,
					{
						id: Date.now(),
						type: widgetType,
					},
				]);
				break;
		}
	};
	return (
		<ul className='widgets-list' ref={setNodeRef}>
			<WidgetCreate createWidget={addWidget} />
			{widgetArray.map((widget) => (
				<Widget
					key={widget.id}
					listId={id}
					deleteWidget={deleteWidget}
					{...widget}
				/>
			))}
			<div style={style}></div>
		</ul>
	);
};

