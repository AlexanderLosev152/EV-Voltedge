import styles from './style.module.scss';

export const ProductItem = ({ data }) => {
	return (
		<div className={styles.item}>
			<img className={styles.img} src={data.img} alt={data.title} />
			<div className={styles.text}>
				<h3 className={styles.title}>{data.title}</h3>
				<p className={styles.descr}>{data.descr}</p>
				<div className={styles.price}>
					<span>{data.price.old}</span>
					<span>{data.price.new}</span>
				</div>
			</div>
		</div>
	);
};
