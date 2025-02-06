import styles from './Game.module.css';

export const FieldLayout = ({
	field,
	clickOfMove,
}) => {
	return (
		<>
			{field.map((item, index) => (
				<button
					key={index}
					className={styles.button}
					type="button"
					onClick={() => clickOfMove(index)}
				>
					{item || '\u00A0'}
				</button>
			))}
		</>
	);
};
