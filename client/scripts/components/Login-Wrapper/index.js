import React from 'React'
import UserLogin from '../User-Login'
import UserCreate from '../User-Create'

class LoginWrapper extends React.Component {
	render() {
		return (
			<div>
				<div>
				    <UserLogin updateCurrentUserState={this.props.updateCurrentUserState} />
				</div>
			    <div>
			        <UserCreate updateCurrentUserState={this.props.updateCurrentUserState} />
			    </div>
			</div>
		)
	}
}

export default LoginWrapper