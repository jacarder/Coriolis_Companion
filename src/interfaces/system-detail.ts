import { LatLngExpression } from "leaflet";


export default interface ISystemDetail {
	id: string;
	created_at: string,
	longitude: number,
	latitude: number,
	name: string;
	planet_count: number;
}