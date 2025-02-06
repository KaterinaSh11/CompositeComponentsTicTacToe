import { InformationLayout } from "./InformationLayout"
import PropTypes from 'prop-types';


export const Information = ({ currentPlayer, isDraw, isGameEnded }) => {

	return (
		<InformationLayout currentPlayer={currentPlayer} isDraw={isDraw} isGameEnded={isGameEnded}/>
	)
};

Information.prototypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
