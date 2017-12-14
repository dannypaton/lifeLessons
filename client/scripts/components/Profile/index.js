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

		this.editUser = this.editUser.bind(this)
		this.getUsersLessons = this.getUsersLessons.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser._id)  {
			this.getUsersLessons(nextProps.currentUser._id)
		}
	}

	componentDidMount() {
		this.getUsersLessons(this.props.currentUser._id)
	}

	editUser() {
		let updatedUser = Object.assign({}, this.props.currentUser)
		updatedUser.username = 'MYUPDATEDNAME'

		console.log(updatedUser, 'updateduser')
		fetch(`/api/user/${this.props.currentUser._id}`, {
			method: 'PATCH',
			credentials: 'include',
			'Content-Type': 'application/json',
			body: JSON.stringify(updatedUser),
		})
		.then(resp => resp.json())
		.then(user => {
			console.log(user, 'the updated user')
		})
	}

	getUsersLessons(userID) {
		if (!userID) return
		lessonServices.get(userID)
			.then(resp => resp.json())
			.then(lessons => {
				this.setState({ usersLessons: lessons })
			})
	}

	render() {
		return (
			<div className="main">
				<div className="user">
					<UserCard user={this.props.currentUser} className="currentUser" />
					<button onClick={this.editUser}>Edit</button>
					<button onClick={(e) => this.props.logout(e, this.props)}>Logout</button>
				</div>
			    <div>
			        <LessonPost updateGlobalLessonState={this.props.updateGlobalLessonState} user={this.props.currentUser} />
			        <LessonWrapper lessons={this.state.usersLessons} />
			    </div>
			</div>
		)
	}
}

export default Profile

