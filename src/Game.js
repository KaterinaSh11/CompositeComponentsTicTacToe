import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const [isGameEnded, setIsGameEnded] = useState(false); //была ли завершена игра
	const [isDraw, setIsDraw] = useState(false); //была ли ничья

	const clearArr = () => {
		console.log('CLICK');
		setField(field.map(() => ''));
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	return (
		<GameLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
			clearArr={clearArr}
		/>
	);
};
