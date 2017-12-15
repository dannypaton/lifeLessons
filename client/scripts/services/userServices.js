const userServices = {};

// get current user - used on inital page load to check if user is logged in NOT IN USE
userServices.get = () => {
	return fetch('/api/user', {
		method: 'GET',
		credentials: 'include',
		'Content-Type': 'application/json',
	})
}	

// update info on current user
userServices.update = (user, updatedUser) => {
	return fetch(`/api/user/${user._id}`, {
		method: 'PATCH',
		credentials: 'include',
		headers: {
		    'Content-Type': 'application/json',
		},
		body: JSON.stringify(updatedUser)
	})
}		

module.exports = userServices;