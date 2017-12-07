const lessonServices = {};

lessonServices.getAllLessons = () => {
	return fetch('/api/lessons');
}			

lessonServices.getUsersLessons = (userId) => {
	return fetch(`/api/user/${userId}/lessons`)
}

lessonServices.postLesson = (lesson) => {
	return fetch('/api/lessons', {
	    method: 'POST',
	    body: JSON.stringify(lesson),
	    headers: {
	        'Content-Type': 'application/json',
	    }
	})
}

module.exports = lessonServices;