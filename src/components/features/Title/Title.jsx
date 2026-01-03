import classNames from 'classnames';

import styles from './style.module.scss';

export const Title = ({ children, Tag, className }) => {
	return <Tag className={classNames(className, styles.title)}>{children}</Tag>;
};
