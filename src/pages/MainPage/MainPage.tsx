import './styles.scss';
import React, {useState} from 'react';
import GoogleMap from 'components/GoogleMap';
import actions from 'actions';
import {useDispatch} from 'react-redux';

function MainPage(props: any): JSX.Element {
	const dispatch = useDispatch();
	const [formula, setFormula] = useState('');
	return (
		<div className="main-page">
			<GoogleMap />
			<div className="search-box-container">
				<input
					type="text"
					onChange={(e) => {
						setFormula(e.target.value);
					}}
				/>
				<button
					className="search-box_button"
					onClick={() => {
						dispatch(actions.App.search(formula));
					}}
				>
					Search
				</button>
			</div>
		</div>
	);
}

export default MainPage;
