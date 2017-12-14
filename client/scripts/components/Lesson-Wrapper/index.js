import React from 'React'
import LessonView from '../Lesson-View'

class LessonWrapper extends React.Component {
	render() {
		return (
			<div className="LessonWrapper">
				{/* <h2>Lessons</h2> */}
				{this.props.lessons.map((lesson, i) => {
					return <LessonView key={i} lesson={lesson} />
				})}
			</div>
		)
	}
}

export default LessonWrapper