import { IKnowledgeItem } from "../interfaces/knowledge-item";
import { IKnowledgeTreeItem } from "../interfaces/knowledge-tree";

class KnowledgeCenterService {
	getSectionData = (dataId: number): IKnowledgeItem | undefined => {
		let knowledge = require('../json/knowledge-items.json') as IKnowledgeItem[];
		return knowledge.find((item) => item.dataId === dataId);
	}
	getTableOfContents = (): IKnowledgeTreeItem[] => {
		let tree = require('../json/knowledge-tree-items.json') as IKnowledgeTreeItem[];
		return tree;
	}
}

export default new KnowledgeCenterService;