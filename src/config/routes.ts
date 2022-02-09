import IRoute from "../interfaces/route";
import BazaarPage from "../pages/Bazaar";
import HomePage from "../pages/Home";
import KnowledgeCenterPage from "../pages/KnowledgeCenter";
import ToolsPage from "../pages/Tools";

const routes: IRoute[] = [
	{
		path: '/',
		name: 'Home Page',
		component: HomePage,
		exact: true
	},
	{
		path: '/tools',
		name: 'Tools Page',
		component: ToolsPage,
		exact: true
	},	
	{
		path: '/bazaar',
		name: 'Bazaar Page',
		component: BazaarPage,
		exact: true
	},
	{
		path: '/knowledge-center',
		name: 'Knowledge Center Page',
		component: KnowledgeCenterPage,
		exact: true
	}	
]

export default routes;