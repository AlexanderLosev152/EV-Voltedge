import classNames from 'classnames';

import { Title } from '../../features/Title/Title';
import { SpanTitle } from '../../features/SpanTitle/SpanTitle';

import IMGVIDEO from '/images/video.jpg';
import IMGVIDEO2 from '/images/video-img.jpg';

import styles from './style.module.scss';
import { Btn } from '../../features/Btn/Btn';

export const Features = () => {
	return (
		<section className={classNames(styles.features, 'section', 'container')}>
			<div className={styles.titlebox}>
				<SpanTitle>Our Story</SpanTitle>
				<div className={styles.text}>
					<Title Tag={'h2'} className={'h2'}>
						Powering a Greener Future, One Drive at a Time
					</Title>
					<p>
						We are here to support your journey towards sustainable driving.
						Explore cutting-edge EV technology, a growing charging network, and
						exclusive resources designed to enhance your electric vehicle
						experience.
					</p>
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.leftbox}>
					<img src={IMGVIDEO} alt='Join a Connected Charging Network' />
					<div className={styles.lefttextbox}>
						<h3 className={classNames(styles.title, 'h5')}>
							Join a Connected Charging Network
						</h3>
						<p>
							Be part of a growing network of EV drivers who share a passion for
							sustainability and innovation.
						</p>
					</div>
				</div>

				<div
					className={styles.rightbox}
					style={{ backgroundImage: `url('${IMGVIDEO2}')` }}
				>
					<div className={styles.rigthboxdiv}>
						<h3 className={classNames(styles.title, 'h5')}>EVs for Everyone</h3>
						<p className={styles.descrbox}>
							From eco-conscious drivers to performance enthusiasts, we believe
							electric vehicles should be accessible and exciting for all.
						</p>
						<Btn>Our Story</Btn>
					</div>
				</div>
			</div>
		</section>
	);
};
