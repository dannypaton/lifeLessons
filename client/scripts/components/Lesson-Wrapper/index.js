import React from 'React'
import LessonView from '../Lesson-View'

class LessonWrapper extends React.Component {
	render() {
		return (
			<div className="LessonWrapper">
				{this.props.lessons.map(lesson => {
					return <LessonView lesson={lesson} />
				})}
			</div>
		)
	}
}

export default LessonWrapper