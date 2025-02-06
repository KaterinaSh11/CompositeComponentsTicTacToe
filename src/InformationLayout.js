import styles from './Game.module.css';
//import { Field } from './Field';

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
	return (
		<>
			{/* <h1 className={styles.turn}>Сейчас ходят {currentPlayer}-ки</h1> */}

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

// Если isDraw равен true — 'Ничья' ;
// Если isDraw равен false , но isGameEnded равен true — `Победа:
// ${currentPlayer}` ;
// Если isDraw равен false и isGameEnded равен false — `Ходит:
// ${currentPlayer}` .
