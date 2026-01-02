import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const MySwiper = ({ items = [], children }) => {
	return (
		<Swiper
			pagination={{ clickable: true }}
			modules={[Pagination]}
			className='mySwiper'
		>
			{items.map((item, index) => (
				<SwiperSlide key={index}>
					{typeof children === 'function' ? children(item) : children}
				</SwiperSlide>
			))}
		</Swiper>
	);
};
