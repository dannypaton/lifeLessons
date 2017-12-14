import React from 'react'

class UserCard extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<h1>Welcome, { this.props.user ? this.props.user.username : null }!</h1>
			</div>
		)
	}
}

export default UserCard