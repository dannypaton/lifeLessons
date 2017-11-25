import React from 'react'

class UserCard extends React.Component {
	constructor() {
		super()
	}


	render() {
		console.log(this.props.user, 'this')
		return (
			<div>
				<h1>{ this.props.user && this.props.user.length ? this.props.user[0].username : null }</h1>
			</div>
		)
	}
}

export default UserCard