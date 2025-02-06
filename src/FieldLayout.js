import styles from './Field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({
	field,
	clickOfMove,
}) => {
	return (
		<>
			{field.map((item, index) => (
				<button
					key={index}
					className={styles['button-field']}
					type="button"
					onClick={() => clickOfMove(index)}
				>
					{item || '\u00A0'}
				</button>
			))}
		</>
	);
};

FieldLayout.prototypes = {
	field: PropTypes.array,
	clickOfMove: PropTypes.func,
};
