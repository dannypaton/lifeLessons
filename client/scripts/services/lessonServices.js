const lessonServices = {};

lessonServices.getAllLessons = () => {
	return fetch('/api/lessons');
}			

lessonServices.get = (userId) => {
	return fetch(`/api/user/${userId}/lessons`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

lessonServices.postLesson = (lesson) => {
	return fetch('/api/lessons', {
	    method: 'POST',
	    credentials: 'include',
	    body: JSON.stringify(lesson),
	    headers: {
	        'Content-Type': 'application/json',
	    }
	})
}

module.exports = lessonServices;