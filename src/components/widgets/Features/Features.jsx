import classNames from 'classnames';

import { Title } from '../../features/Title/Title';

import styles from './style.module.scss';

export const Features = () => {
	return (
		<section className={classNames(styles.features, 'section', 'container')}>
			<Title Tag={'h2'} className={'h2'} span={'Our Story'}>
				Powering a Greener Future, One Drive at a Time
			</Title>
		</section>
	);
};
