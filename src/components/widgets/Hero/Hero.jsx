import classNames from 'classnames';

import styles from './style.module.scss';

import HEROBG from '/images/hero-img.png';

export const Hero = () => {
	const items = [
		{ number: '14M', title: 'Battery Cost Reduction' },
		{ number: '89%', title: 'Battery Cost Reduction' },
		{ number: '1.2M', title: 'Charging infrastructure  Expansion' }
	];
	return (
		<section className={classNames(styles.hero, 'section')}>
			<div className={classNames(styles.wrapper, 'container')}>
				<div className={styles.text}>
					<h1 className={styles.title}>
						<span>SMOOTH</span>
						<span>EV CARS</span>
					</h1>
					<img className={styles.bg} src={HEROBG} alt='SMOOTH EV CARS' />
				</div>

				<div className={styles.items}>
					{items.map((item) => (
						<div>
							<span>{item.number}</span>
							<span>{item.title}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
