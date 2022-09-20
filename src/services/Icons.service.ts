import { IIcon } from "../interfaces/icon";


class IconsService {
	getIconData = (dataId: number): IIcon | undefined => {
		let iconData = require('../json/icons.json') as IIcon[];
		return iconData.find((item) => item.id === dataId);
	}
}

export default new IconsService;