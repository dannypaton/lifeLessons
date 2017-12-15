import React from 'react'
import Field from '../Field'
import userServices from '../../services/userServices'

class UserCard extends React.Component {
	constructor() {
		super()

		this.state = {
			username: '',
			editing: false
		}

		this.editUser = this.editUser.bind(this)
		this.toggleEditState = this.toggleEditState.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	editUser() {
		let updatedUser = Object.assign({}, this.props.user)
		updatedUser.username = this.state.username

		userServices.update(this.props.user, updatedUser)
			.then(resp => resp.json())
			.then(user => {
				this.props.updateCurrentUserState(user)
				this.setState({ editing: false })
			})
	}

	toggleEditState() {
		if (!this.state.editing) this.setState({ username: ''})
		this.setState({ editing: !this.state.editing })
	}

	handleChange(e) {
	    this.setState({
	        [e.target.name]: e.target.value
	    });
	}

	render() {
		return (
			<div>
				<button onClick={this.toggleEditState}>Edit</button>

				{this.state.editing ? 
					<div>
						<Field 
							type="text"
							name="username"
							label="Enter your username: "
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<button onClick={this.editUser}>Update</button>
						<button onClick={this.toggleEditState}>Cancel</button>
					</div>
					:
					<h1>Welcome, { this.props.user ? this.props.user.username : null }!</h1>
				}
			</div>
		)
	}
}

export default UserCard