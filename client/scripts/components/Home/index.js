import React from 'React'
import UserCard from '../User-Card'
import { Link } from 'react-router-dom'
import LessonPost from '../Lesson-Post'
import LessonWrapper from '../Lesson-Wrapper'

class Home extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="user">
				    <UserCard user={ this.props.currentUser } updateCurrentUserState={this.props.updateCurrentUserState}/>
					<Link to='/profile'>Profile</Link>
					<button onClick={(e) => this.props.logout(e, this.props)}>Logout</button>
				</div>
			    <div>
			        <LessonPost updateGlobalLessonState={this.props.updateGlobalLessonState} user={this.props.currentUser} />
			        <LessonWrapper lessons={this.props.lessons} />
			    </div>
			</div>
		)
	}
}

export default Home