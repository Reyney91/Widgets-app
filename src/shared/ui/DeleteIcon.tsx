import { FC } from 'react';
import { IconProps } from '../types';

export const DeleteIcon: FC<IconProps> = ({ ...props }) => {
	return (
		<button className='icon-btn' {...props}>
			<svg
				width='12'
				height='12'
				viewBox='0 0 12 12'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_461_1256)'>
					<path
						d='M0.5 0.5L11.5 11.5M11.5 0.5L0.5 11.5'
						stroke='#E6E6E6'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</g>
			</svg>
		</button>
	);
};

