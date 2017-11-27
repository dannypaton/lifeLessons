const userServices = {};

userServices.getCurrentUser = () => {
	return fetch('/api/user');
}			

module.exports = userServices;