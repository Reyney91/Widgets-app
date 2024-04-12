import { FC } from 'react';
import { IconProps } from '../types';

export const DragIcon: FC<IconProps> = ({ ...props }) => {
	return (
		<button className='icon-btn' {...props}>
			<svg
				width='18'
				height='18'
				viewBox='0 0 18 18'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='13' cy='7' r='1' fill='#E6E6E6' />
				<circle cx='9' cy='7' r='1' fill='#E6E6E6' />
				<circle cx='5' cy='7' r='1' fill='#E6E6E6' />
				<circle cx='5' cy='11' r='1' fill='#E6E6E6' />
				<circle cx='9' cy='11' r='1' fill='#E6E6E6' />
				<circle cx='13' cy='11' r='1' fill='#E6E6E6' />
			</svg>
		</button>
	);
};

