import classNames from 'classnames';

import { comfortslide } from '../../../data/comfortslide';
import { Comfortslide } from '../../features/Comfortslide/Comfortslide';
import { MySwiper } from '../../features/MySwiper/MySwiper';
import { SpanTitle } from '../../features/SpanTitle/SpanTitle';
import { Title } from '../../features/Title/Title';

import styles from './style.module.scss';

export const Comfort = () => {
	const swiperOptions = {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 20,
		pagination: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 20
			}
		}
	};
	return (
		<section className={classNames(styles.comfort, 'section')}>
			<div className={styles.comfortTitle}>
				<SpanTitle>Versatile Power</SpanTitle>
				<Title Tag={'h2'} className={'h2'}>
					Future-Ready Comfort
				</Title>
			</div>

			<div className={styles.myswiper}>
				<MySwiper items={comfortslide} options={swiperOptions}>
					{(slide) => <Comfortslide data={slide} />}
				</MySwiper>
			</div>
		</section>
	);
};
