import React from 'React'
import UserCard from '../User-Card'
import LessonPost from '../Lesson-Post'
import LessonWrapper from '../Lesson-Wrapper'

class Home extends React.Component {
	constructor () {
		super()

		this.logout = this.logout.bind(this)
	}

	logout() {
	    fetch('/api/logout', {
	        method: 'GET',
	        credentials: 'include',
	    })
	    .then(() => {
	        this.props.updateCurrentUserState()
	    })
	    
	}

	render() {
		return (
			<div className='main'>
				<div>
					<button onClick={this.logout}>Logout</button>
				    <UserCard user={ this.props.currentUser } />
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