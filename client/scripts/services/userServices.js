const userServices = {};

userServices.get = () => {
	return fetch('/api/user', {
		method: 'GET',
		credentials: 'include',
		'Content-Type': 'application/json',
	})
}			

module.exports = userServices;