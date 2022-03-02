interface IKnowledgeTree {
	id: string,
	name: string
}

export interface IKnowledgeTreeItem extends IKnowledgeTree {
	children?: IKnowledgeTreeItem[]
}