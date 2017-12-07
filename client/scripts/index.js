import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Profile from './components/Profile'
import userServices from './services/userServices';
import lessonServices from './services/lessonServices';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			lessons: [],
			currentUser: {}
		}

		this.getAllLessons = this.getAllLessons.bind(this)
		this.updateGlobalLessonState = this.updateGlobalLessonState.bind(this)
	}

	componentDidMount() {
		this.getAllLessons()
		this.getCurrentUser()
	}

	updateGlobalLessonState(lesson) {
		const allLessons = this.state.lessons.slice()
		allLessons.push(lesson)
		this.setState({ lessons: allLessons })
	}

	getCurrentUser() {
		userServices.getCurrentUser()		
			.then(resp => resp.json())
			.then(user => {
				// this.setState({ currentUser: user })
				this.setState({ currentUser: user[1] })
			});
	}

	getAllLessons() {
		lessonServices.getAllLessons()
			.then(resp => resp.json())
			.then(lessons => {
				this.setState({ lessons: lessons })
			});
	}

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" render={(props) => <Home {...props} lessons={this.state.lessons} updateGlobalLessonState={this.updateGlobalLessonState} currentUser={this.state.currentUser} />} />
					<Route path="/profile" render={(props) => <Profile {...props} updateGlobalLessonState={this.updateGlobalLessonState} currentUser={this.state.currentUser} />} />
				</div>
			</Router>
		)
	}
}

render(<App />, document.getElementById('app'))

// <Route path="/profile" render={(props) => <Profile {...props} users={this.state.users} />} />