const lessonServices = {};

lessonServices.getAllLessons = () => {
	return fetch('/api/lessons');
}			

lessonServices.getUsersLessons = (userId) => {
	console.log(userId, 'the user id in lessonservices')
	return fetch(`/api/user/${userId}/lessons`)
}

module.exports = lessonServices;