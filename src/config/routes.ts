import IRoute from "../interfaces/route";
import BazaarPage from "../pages/Bazaar";
import HomePage from "../pages/Home";
import IconsPage from "../pages/Icons";
import KnowledgeCenterPage from "../pages/KnowledgeCenter";
import ToolsPage from "../pages/Tools";

const routes: IRoute[] = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
		exact: true
	},
	{
		path: '/tools',
		name: 'Tools',
		component: ToolsPage,
		exact: true
	},	
	{
		path: '/bazaar',
		name: 'Bazaar',
		component: BazaarPage,
		exact: true
	},
	{
		path: '/knowledge-center',
		name: 'Knowledge Center',
		component: KnowledgeCenterPage,
		exact: true
	},
	{
		path: '/Icons',
		name: 'Icons',
		component: IconsPage,
		exact: true
	}
]

export default routes;