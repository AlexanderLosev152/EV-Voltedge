import classNames from 'classnames';
import { SpanTitle } from '../../features/SpanTitle/SpanTitle';
import { Title } from '../../features/Title/Title';

import LOGOICON from '/images/logo-icon.svg';
import LOGO from '/images/logo.svg';
import CARDIMG from '/images/card.jpg';
import CARDTHREE from '/images/cardThree.jpg';
import BATTERY from '/images/battery.png';
import AVA from '/images/avatars.png';

import styles from './style.module.scss';

export const Mobility = () => {
	return (
		<section className={styles.mobility}>
			<div className={classNames('section', 'container')}>
				<div className={styles.mobilityTitle}>
					<SpanTitle>Versatile Power</SpanTitle>
					<Title Tag={'h2'} className={'h2'}>
						Revolutionizing EV Mobility
					</Title>
				</div>

				<div className={styles.wrapper}>
					<div className={styles.cardOne}>
						<div className={styles.cardOneBox}>
							<div>
								<h3 className={styles.cardOneTitle}>What People Say</h3>
								<span className={styles.cardOneDescr}>Sold to over 20M</span>
							</div>
							<img
								className={styles.cardOneImg}
								src={LOGOICON}
								alt='What People Say'
								s
							/>
						</div>

						<div className={styles.cardOneBottom}>
							<div>
								<img src={AVA} alt='alt' />
								<span> 3,000+ Thrilled EV Owners</span>
							</div>
							<span className={styles.cardOneBottomSpan}>$50k+</span>
						</div>
					</div>
					<div
						className={styles.cardTwo}
						style={{
							backgroundImage: `url('${CARDIMG}')`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: 'cover'
						}}
					>
						<div className={styles.cardTwoLogo}>
							<img src={LOGOICON} alt='EV Voltedge' />
							<span>EV Voltedge</span>
						</div>
						<h3 className={styles.cardTwoTitle}>Electric Mobility</h3>
					</div>
					<div
						className={styles.cardThree}
						style={{
							backgroundImage: `url('${CARDTHREE}')`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: 'cover'
						}}
					>
						<a className={styles.cardThreeLink} href='#evvoltage.com'>
							evvoltage.com
						</a>
						<div className={styles.cardThreeText}>
							500 + <span>Miles Per Charge</span>
						</div>
					</div>
					<div
						className={styles.cardFour}
						style={{
							backgroundImage: `url('${LOGO}')`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: '80%'
						}}
					>
						{' '}
					</div>
					<div className={styles.cardFive}>
						<img className={styles.cardFiveImg} src={BATTERY} alt='alt' />
						<p className={styles.cardFiveP}>
							Empowering Sustainable Mobility Through Innovation
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
