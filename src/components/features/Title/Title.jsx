import classNames from 'classnames';

import styles from './style.module.scss';

export const Title = ({ children, Tag, className, span }) => {
	return (
		<Tag className={classNames(className, styles.title)}>
			<span className={styles.span}>{span}</span> {children}
		</Tag>
	);
};
