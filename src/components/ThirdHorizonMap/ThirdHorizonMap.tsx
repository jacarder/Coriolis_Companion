import { MapConsumer, MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from "react-leaflet";
import './ThirdHorizonMap.scss';
import thirdHorizonMap from  '../../assets/img/third_horizon_map.jpg';
import 'leaflet/dist/leaflet.css'
import L, { LatLngBounds } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Container } from "@mui/material";
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;
const bounds = new LatLngBounds([52, -163], [83,0])
function MyComponent() {
	const map = useMapEvent('click', (e) => {
	  console.log(e.latlng)
	})
	return null
  }

export default function ThirdHorizonMap() {
	return (
		<Container id="mapid">
			<MapContainer center={[72, -83]} bounds={bounds} zoom={3} scrollWheelZoom={true}>				
				<TileLayer url={process.env.PUBLIC_URL + "/assets/maptiles/{z}-{x}-{y}.jpg"}/>
				<MyComponent></MyComponent>
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
	)
}
