import styles from './Game.module.css';
import { Field } from './Field';
import { Information } from './Information';

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
