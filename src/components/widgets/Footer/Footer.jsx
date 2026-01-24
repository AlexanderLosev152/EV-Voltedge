import { Logo } from '../../features/Logo/Logo';
import styles from './style.module.scss';

import BG from '/images/footer-bg.jpg';

import classNames from 'classnames';

import { footerLinks } from '../../../data/footerLinks';

export const Footer = () => {
	return (
		<footer className={styles.footer} style={{ backgroundImage: `url(${BG})` }}>
			<div className={classNames(styles.wrapper, 'container')}>
				<div className={styles.box}>
					<Logo />
					<ul className={styles.items}>
						{footerLinks.map((items, itemsIndex) => (
							<li key={`items-${itemsIndex}`}>
								<h4>{items.title}</h4>
								<ul>
									{items.links.map((link, linkIndex) => (
										<li key={`link-${itemsIndex}-${linkIndex}`}>
											<a href='#'>{link}</a>
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.bottom}>
					<span>© 2025</span>
					<div>
						<a href='#'>Term of Service</a>
						<a href='#'>Privacy Policy</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
