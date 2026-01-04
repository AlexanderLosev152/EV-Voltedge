import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const MySwiper = ({ items, children, options = {} }) => {
	const defaultOptions = {
		slidesPerView: 1,
		slidesPerGroup: 3,
		spaceBetween: 30,
		pagination: {
			clickable: true
		},
		modules: [Pagination],
		...options // перезаписываем дефолтные настройки
	};

	return (
		<Swiper {...defaultOptions} className='mySwiper'>
			{items.map((item, index) => (
				<SwiperSlide key={index}>
					{typeof children === 'function' ? children(item) : children}
				</SwiperSlide>
			))}
		</Swiper>
	);
};
