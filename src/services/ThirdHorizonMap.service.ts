import { db } from "../utils/firebase"

export default new class ThirdHorizonMapService {
	getSystemDetails = async (systemId: string): Promise<any> => {
		return db.collection('Systems').doc(systemId).get().then((data) => {
			return data.data();
		});
	}
	getSystems = async (): Promise<any> => {
		return db.collection('Systems').get().then((data) => {
			return data.docs.map((doc: any) => doc.data())
		});
	}	
}