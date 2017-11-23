import React from 'react'
import Field from '../Field'

class UserCard extends React.Component {
	constructor() {
		super()

		this.state = {
			firstName: '',
			lastName: '',
			biography: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		console.log(e, 'eeee')
	    this.setState({
	        [e.target.name]: e.target.value,
	    })
	}

	handleSubmit(e) {
	    e.preventDefault();
	    const lesson = Object.assign({}, this.state);

	    fetch('/api/users', {
	        method: 'POST',
	        body: JSON.stringify(lesson),
	        headers: {
	            'Content-Type': 'application/json',
	        }
	    })
	        .then(resp => resp.json())
	        .then(user => {
	        	console.log(user, 'user')
	            // this.setState({ firstName: '' })
	        });
	}

	render() {
		return (
			<div className='userCard'>
				<form onSubmit={this.handleSubmit}>
				    <div className="form-row">
				        <Field onChange={this.handleChange} name="firstName" type="text" placeholder="First Name" value={this.state.firstName} />
				    </div>
				    <div className="form-row">
				        <button>Create User</button>
				    </div>
				</form>
			</div>
		)
	}	
}

export default UserCard