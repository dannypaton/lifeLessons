import React from 'React'

class LessonView extends React.Component {
	render() {
		const { message } = this.props.lesson
		console.log(this, 'this in lessonView')
		return (
			<section className='lessonView'>
				<div>
					<img src="" alt=""/>
				</div>
				<div>
					<p></p>
					<p>{ message }</p>
					<span></span>
				</div>
			</section>
		)
	}
}

export default LessonView