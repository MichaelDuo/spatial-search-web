import React, {useState, useRef} from 'react';
import GoogleMapReact from 'google-map-react';
import {useDispatch, useSelector} from 'react-redux';
import actions from 'actions';

function Point(props: any): JSX.Element {
	const colors = ['green', 'blue', 'orange', 'red'];
	const colorIndex = Math.floor(props.rank / (props.total / colors.length));
	return <div className={`point ${colors[colorIndex]}`}>{props.rank}</div>;
}

function GoogleMap(props: any): JSX.Element {
	const [map, setMap] = useState(null);
	const dispatch = useDispatch();
	const points = useSelector((state: any) => state.App.points);

	const handleApiLoaded = (map: any, maps: any) => {
		setMap(map);
		map.addListener('bounds_changed', function () {
			const bounds = map.getBounds();
			dispatch({type: 'SET_BOUNDING', payload: bounds.toJSON()});
		});
	};
	return (
		<div style={{height: '100vh', width: '100%'}}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: 'AIzaSyApP25E3lxKNGil3jEo8joNIimxrNLUTUY',
				}}
				defaultCenter={props.center}
				defaultZoom={props.zoom}
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={({map, maps}) => handleApiLoaded(map, maps)}
			>
				{points.map((p: any, index: any): any => (
					<Point
						key={index}
						lat={p.lat}
						lng={p.lng}
						rank={index}
						total={points.length}
					/>
				))}
			</GoogleMapReact>
		</div>
	);
}

GoogleMap.defaultProps = {
	center: {
		lat: 33.973769,
		lng: -117.328077,
	},
	zoom: 17,
};

export default GoogleMap;
