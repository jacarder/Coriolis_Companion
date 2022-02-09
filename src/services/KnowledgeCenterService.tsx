import { IKnowledgeItem } from "../interfaces/knowledge-item";

class KnowledgeCenterService {
	getSectionData= (dataId: number): IKnowledgeItem | undefined => {
		let knowledge = require('../json/knowledge-items.json') as IKnowledgeItem[];
		return knowledge.find((item) => item.dataId === dataId);
	}
}

export default new KnowledgeCenterService;