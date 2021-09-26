import { MapConsumer, MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import './ThirdHorizonMap.scss';
import 'leaflet/dist/leaflet.css'
import L, { LatLngBounds } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Container } from "@mui/material";
import SystemDetail from "./SytemDetail";
import { useState } from "react";

let DefaultIcon = L.icon({
	iconSize: [25, 41],
	iconAnchor: [10, 41],
	popupAnchor: [2, -40],
	iconUrl: icon,
	shadowUrl: iconShadow
  });
L.Marker.prototype.options.icon = DefaultIcon;
const bounds = new LatLngBounds([52, -163], [83,0])
//	MyComponent is used for testing purposes of finding locations on custom map
function MyComponent() {
	const map = useMapEvent('click', (e) => {
	  console.log(e.latlng)
	})
	return null
  }

export default function ThirdHorizonMap() {
	
	const [systemId, setsystemId] = useState<string>('0')

	return (
		<Container id="mapid">
			<MapContainer center={[72, -83]} bounds={bounds} zoom={3} scrollWheelZoom={true}>				
				<TileLayer url={process.env.PUBLIC_URL + "/assets/maptiles/{z}-{x}-{y}.jpg"}/>
				<MyComponent></MyComponent>
				<Marker 
					key={`marker-${0}`} 
					position={[76.616, -85.1]}
					eventHandlers={{
						click: (e) => {
							console.log(e)
							setsystemId('1')
						}
					}}
				>
					<Popup>
						<span>A pretty CSS3 popup. <br/> Easily customizable.</span>
					</Popup>
				</Marker>				
				<MapConsumer>
					{(map) => {
						map.setMaxZoom(5);
						map.setMinZoom(3);
						map.setMaxBounds(bounds)
						return null;
					}}
				</MapConsumer>				
			</MapContainer>
			<Container>
				<SystemDetail systemId={systemId}></SystemDetail>
			</Container>
		</Container>

	)
}


