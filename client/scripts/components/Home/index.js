import React from 'React'
import UserCard from '../User-Card'
import LessonPost from '../Lesson-Post'
import LessonWrapper from '../Lesson-Wrapper'

class Home extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="user">
				    <UserCard user={ this.props.currentUser } className="currentUser" />
					<button onClick={this.props.logout}>Logout</button>
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