import classNames from 'classnames';

import { products } from '../../../data/products';
import { MySwiper } from '../../features/MySwiper/MySwiper';
import { ProductItem } from '../../features/ProductItem/ProductItem';
import { Title } from '../../features/Title/Title';

import styles from './style.module.scss';
import { SpanTitle } from '../../features/SpanTitle/SpanTitle';

export const Products = () => {
	return (
		<section className={classNames(styles.products, 'section', 'container')}>
			<div className={styles.wrapper}>
				<SpanTitle>Versatile Power</SpanTitle>
				<Title Tag={'h2'} className={'h2'}>
					Discover Our Multi-functional chargers
				</Title>
			</div>

			<div className={classNames(styles.items, styles.product)}>
				{products.map((product) => (
					<ProductItem data={product} />
				))}
			</div>

			<div className={styles.myswiper}>
				<MySwiper items={products}>
					{(product) => <ProductItem data={product} />}
				</MySwiper>
			</div>
		</section>
	);
};
