import React from 'react'
import Field from '../Field'

class CreateUser extends React.Component {
	constructor() {
		super()

		this.state = {
			username: '',
			password: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
	    this.setState({
	        [e.target.name]: e.target.value,
	    })
	}

	handleSubmit(e) {
	    e.preventDefault();
	    const lesson = Object.assign({}, this.state);

	    fetch('/api/user', {
	        method: 'POST',
	        body: JSON.stringify(lesson),
	        headers: {
	            'Content-Type': 'application/json',
	        }
	    })
	        .then(resp => resp.json())
	        .then(user => {
	            // this.setState({ username: '' })
	        });
	}

	render() {
		return (
			<div className='createUser'>
				<form onSubmit={this.handleSubmit}>
				    <div className="form-row">
				        <Field onChange={ this.handleChange } name="username" type="text" placeholder="Username" value={this.state.username} />
				        <Field onChange={ this.handleChange } name="password" type="text" placeholder="Password" value={this.state.password} />
				    </div>
				    <div className="form-row">
				        <button>Create User</button>
				    </div>
				</form>
			</div>
		)
	}	
}

export default CreateUser