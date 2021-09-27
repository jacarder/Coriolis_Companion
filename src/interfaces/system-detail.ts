import { LatLngExpression } from "leaflet";


export default interface ISystemDetail {
	id: number;
	lat_long: any; // TODO get the GeoPoint class from firebase. Currently not in index of firebase?
	name: string;
	planetCount: number;
}