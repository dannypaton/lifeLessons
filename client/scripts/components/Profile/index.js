import React from 'React'
import UserCard from '../User-Card'
import LessonPost from '../Lesson-Post'
import LessonWrapper from '../Lesson-Wrapper'
import lessonServices from '../../services/lessonServices'

class Profile extends React.Component {
	constructor() {
		super()

		this.state = {
			usersLessons: []
		}

		this.getUsersLessons = this.getUsersLessons.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser.userId)  {
			this.getUsersLessons();
		}
	}

	getUsersLessons() {
		console.log(this.props);
		// console.log(this.props.currentUser, 'inside the functions')
		const id = this.props.currentUser.userId
		lessonServices.getUsersLessons(id)
			.then(resp => resp.json())
			.then(lessons => {
				console.log(lessons, 'LESSOSNFDKJFKDSJFKDSJ')
				this.setState({ usersLessons: lessons })
			});
	}

	render() {
		console.log(this, 'inside profile component')
		return (
			<div>
				<div>
				    <UserCard user={ this.props.currentUser } />
				</div>
			    <div>
			        <LessonPost updateGlobalLessonState={this.props.updateGlobalLessonState} />
			        <LessonWrapper lessons={this.state.usersLessons} />
			    </div>
			</div>
		)
	}
}

export default Profile

