import styles from './Information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
	return (
		<>
			{isDraw === true && <h1 className={styles.turn}>Ничья</h1>}
			{isDraw === false && isGameEnded === true && (
				<h1 className={styles.turn}>Победа {currentPlayer}</h1>
			)}
			{isDraw === false && isGameEnded === false && (
				<h1 className={styles.turn}>Ходит {currentPlayer}</h1>
			)}
		</>
	);
};

InformationLayout.prototypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};

