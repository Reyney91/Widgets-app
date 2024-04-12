import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { WidgetsList } from './WidgetsList';
import { useState } from 'react';
import { WidgetsItem, WidgetsListType } from '../types';

export const WidgetsWrapper = () => {
	const [widgetsLists, setWidgetsLists] = useState<WidgetsListType[]>([
		{
			id: 1,
			array: [{ id: 1, type: 'rialto' }],
		},
		{
			id: 2,
			array: [{ id: 2, type: 'rialto' }],
		},
		{
			id: 3,
			array: [{ id: 3, type: 'weather' }],
		},
	]);
	function handleDragEnd(event: DragEndEvent) {
		const { over, active } = event;
		const [widgetId, listId, name, type, value] = [
			active.data.current?.id,
			active.data.current?.listId,
			active.data.current?.name,
			active.data.current?.type,
			active.data.current?.value,
		];
		if (
			over?.id == undefined ||
			over?.id == null ||
			over.id == listId ||
			typeof over?.id !== 'number'
		)
			return;

		widgetsLists[over.id].array = [
			...widgetsLists[over.id].array,
			{
				id: widgetId,
				name,
				type,
				value,
			},
		];
		widgetsLists[listId].array = widgetsLists[listId].array.filter(
			(widget) => widget.id !== widgetId
		);
		const newArray = [...widgetsLists];
		setWidgetsLists(newArray);
	}
	function setWidgetsList(id: number, array: WidgetsItem[]) {
		widgetsLists[id] = { id: id, array: array };
		const newArray = [...widgetsLists];
		setWidgetsLists(newArray);
	}
	return (
		<main className='widgets-wrapper'>
			<DndContext onDragEnd={handleDragEnd}>
				{widgetsLists.map((widgets, index) => (
					<WidgetsList
						setWidgetsList={setWidgetsList}
						widgetArray={widgets.array}
						key={index}
						id={index}
					/>
				))}
			</DndContext>
		</main>
	);
};

