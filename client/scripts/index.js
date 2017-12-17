import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import LoginWrapper from './components/Login-Wrapper'
import Profile from './components/Profile'
import Nav from './components/nav'

import userServices from './services/userServices'
import lessonServices from './services/lessonServices'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			lessons: [],
			currentUser: null
		}

		this.logout = this.logout.bind(this)
		this.getAllLessons = this.getAllLessons.bind(this)
		this.updateGlobalLessonState = this.updateGlobalLessonState.bind(this)
		this.updateCurrentUserState = this.updateCurrentUserState.bind(this)
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

	updateCurrentUserState(user) {
		this.setState({ currentUser: user })
	}

	logout(e, props) {
	    fetch('/api/logout', {
	        method: 'GET',
	        credentials: 'include',
	    })
	    .then(() => {
	    	console.log(props);
	    	props.history.push('/')
	        this.setState({
	            currentUser: null,
	        })
	    })
	}

	getCurrentUser() {
		userServices.get()		
			.then(resp => resp.json())
			.then(user => {
				if (user._id) {
					this.setState({ currentUser: user })
				} else {
					this.setState({ currentUser: null })
				}
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
					<Nav />
					<div className="main">
						{ !this.state.currentUser ?
						<div>
							<Route exact path="/" render={(props) => <LoginWrapper {...props} updateCurrentUserState={this.updateCurrentUserState} currentUser={this.state.currentUser} />} /> 
						</div>
					:
						<div>
							<Route 
								exact 
								path="/" 
								render={(props) => 
									<Home {...props} 
										lessons={this.state.lessons}
										updateGlobalLessonState={this.updateGlobalLessonState} 
										updateCurrentUserState={this.updateCurrentUserState} 
										currentUser={this.state.currentUser} 
										logout={this.logout}
									/>} 
									
							/>
							<Route path="/profile" render={(props) => 
								<Profile {...props} 
									updateGlobalLessonState={this.updateGlobalLessonState} 
									currentUser={this.state.currentUser} 
									logout={this.logout} 
								/>} 
							/>
						</div>
						}
					</div>
				</div>
			</Router>
		)
	}
}

render(<App />, document.getElementById('app'))

