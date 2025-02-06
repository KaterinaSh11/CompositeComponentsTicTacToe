import styles from './Game.module.css';
import { Field } from './Field';
import { Information } from './Information';
import PropTypes from 'prop-types';

export const GameLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isDraw,
	isGameEnded,
	setIsDraw,
	setIsGameEnded,
	clearArr
}) => {
	return (
		<>
			<div className={styles.container}>
				<label className={styles.appLabel}>tic tac toe</label>
				<Information
					currentPlayer={currentPlayer}
					isDraw={isDraw}
					isGameEnded={isGameEnded}
				/>
				<div className={styles.square}>
					<Field
						field={field}
						setField={setField}
						currentPlayer={currentPlayer}
						setCurrentPlayer={setCurrentPlayer}
						isGameEnded={isGameEnded}
						setIsDraw={setIsDraw}
						setIsGameEnded={setIsGameEnded}
					/>
				</div>
				<button className={styles.clearBtn} onClick={clearArr}>Начать заново</button>
			</div>
		</>
	);
};

GameLayout.prototypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	clearArr: PropTypes.func,
};
