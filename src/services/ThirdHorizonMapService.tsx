import { db } from "../utils/firebase"

export default new class ThirdHorizonMapService {
	getSystemDetails = async (systemId: string): Promise<any> => {
		return db.collection('Systems').doc(systemId).get();
	}
}