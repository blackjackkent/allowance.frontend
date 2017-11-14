import Dashboard from '../display/views/Dashboard';

const appRoutes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'fa-dashboard',
		component: Dashboard
	}
];
class AppRoutes {
	constructor() {
		this.routes = appRoutes;
	}
	getRoutes() {
		return this.routes;
	}
	getBrandFromPath(path) {
		let name;
		this.routes.map((route) => {
			if (route.collapse) {
				route.views.map((prop) => {
					if (prop.path === path) {
						({ name } = prop);
					}
					return null;
				});
			} else if (route.redirect) {
				if (route.path === path) {
					({ name } = route);
				}
			} else if (route.path === path) {
				({ name } = route);
			}
			return null;
		});
		return name;
	}
}

export default AppRoutes;
