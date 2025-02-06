import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsDraw,
	setIsGameEnded
	}) => {
	const clickOfMove = (index) => {
		if (field[index] === '' && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);
			setCurrentPlayer(currentPlayer === 'X' ? 'О' : 'X');
			if (newField.every((item) => item !== '')) {
				setIsDraw(true);
			}
			WIN_PATTERNS.forEach((item_win) => {
				if (item_win.includes(index)) {
					if (item_win.every((win_index) =>	newField[index] === newField[win_index])) {
						setIsGameEnded(true);
						setCurrentPlayer(currentPlayer);
					}
				}
			});
		}
	}
	return (
		<FieldLayout
			field={field}
			clickOfMove={clickOfMove}
		/>
	);
};

Field.prototypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
};
