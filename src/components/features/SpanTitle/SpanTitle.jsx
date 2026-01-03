import styles from './style.module.scss';

export const SpanTitle = ({ children }) => {
	return <span className={styles.span}>{children}</span>;
};
