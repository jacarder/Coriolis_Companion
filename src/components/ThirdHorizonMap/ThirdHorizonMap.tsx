import { MapConsumer, MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import './ThirdHorizonMap.scss';
import 'leaflet/dist/leaflet.css'
import L, { LatLngBounds } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import icon2 from '../../assets/img/star_marker.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Box, Container, Grid } from "@mui/material";
import SystemDetail from "./SystemDetail";
import { useEffect, useState } from "react";
import ISystemDetail from "../../interfaces/system-detail";
import ThirdHorizonMapService from "../../services/ThirdHorizonMapService";

let DefaultIcon = L.icon({
	iconSize: [15, 15],
	//iconAnchor: [10, 41],
	//popupAnchor: [2, -40],
	iconUrl: icon2,
	//shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;
const bounds = new LatLngBounds([52, -153], [83, 0])
//	MyComponent is used for testing purposes of finding locations on custom map
function MyComponent() {
	const map = useMapEvent('click', (e) => {
		console.log(e.latlng)
	})
	return null
}

const ThirdHorizonMap = () => {

	const [selectedSystem, setSelectedSystem] = useState<ISystemDetail>();
	const [systems, setSystems] = useState<[ISystemDetail]>();

	useEffect(() => {
		ThirdHorizonMapService.getSystems().then((data: [ISystemDetail]) => {
			setSystems(data);
		})
	}, [])

	return (
		<>
			<Container>
				<SystemDetail system={selectedSystem}></SystemDetail>
			</Container>
			<Container id="mapid">
				<MapContainer center={[74, -83]} bounds={bounds} zoom={3} scrollWheelZoom={true}>
					<TileLayer url={process.env.PUBLIC_URL + "/assets/maptiles/{z}-{x}-{y}.jpg"} />
					<MyComponent></MyComponent>
					{systems?.map((system) =>
						<Marker
							key={`marker-${system.id}`}
							position={[system.lat_long.latitude, system.lat_long.longitude]}
							eventHandlers={{
								click: (e) => {
									setSelectedSystem(system);
								}
							}}
						>
							<Popup>
								<span>A pretty CSS3 popup. <br /> Easily customizable.</span>
							</Popup>
						</Marker>
					)}
					<MapConsumer>
						{(map) => {
							map.setMaxZoom(5);
							map.setMinZoom(3);
							map.setMaxBounds(bounds)
							return null;
						}}
					</MapConsumer>
				</MapContainer>
			</Container>
		</>
	)
}
export default ThirdHorizonMap;