import AxiosHttp from './axiosHttp';

class UserApi {
	static getCurrentUser() {
		return AxiosHttp.get('http://allowanceapi-production.azurewebsites.net/api/users')
			.then(function (response) {
				return response.data;
			});
	}
}

export default UserApi;
