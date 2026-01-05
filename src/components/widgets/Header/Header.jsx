import classNames from 'classnames';

import { Btn } from '../../features/Btn/Btn';

import styles from './style.module.scss';

import LOGO from '/images/logo.svg';

export const Header = () => {
	const items = [
		{ path: '/', title: 'Home' },
		{ path: '/products', title: 'Products' },
		{ path: '/features', title: 'Features' },
		{ path: '/gearShop', title: 'Gear Shop' }
	];
	return (
		<header className={classNames(styles.header, 'container')}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<a href='#'>
						<img src={LOGO} alt='alt' />
					</a>
				</div>

				<nav className={styles.nav}>
					<ul>
						{items.map((item, index) => (
							<li key={index}>
								<a className={styles.link} href={item.link}>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className={styles.btn}>
					<Btn>Order Now </Btn>
				</div>

				<div className={styles.burger}>
					<span>-</span>
					<span>-</span>
					<span>-</span>
				</div>
			</div>
		</header>
	);
};
