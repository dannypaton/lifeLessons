import React from 'React'
import LessonView from '../Lesson-View'

class LessonWrapper extends React.Component {
	render() {
		// console.log(this, 'this in lesson wrappers')
		return (
			<div className="LessonWrapper">
				{this.props.lessons.map((lesson, i) => {
					return <LessonView key={i} lesson={lesson} />
				})}
			</div>
		)
	}
}

export default LessonWrapper