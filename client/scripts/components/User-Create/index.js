import React from 'react';
import Field from '../Field';

class UserCreate extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // 1. Collect all of the user data from the state
        const user = Object.assign({}, this.state);
        // 2. POST it to the back end to create a new user.
        fetch('/api/user', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then((res) => res.json())
        .then((json) => {
            // console.log(this.props, 'this.props');
            this.props.updateCurrentUserState(json)
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="form-wrap">
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <Field
                        type="text"
                        name="username"
                        label="Enter your username: "
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <Field
                        type="text"
                        name="name"
                        label="Enter your name: "
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <Field
                        type="email"
                        name="email"
                        label="Enter your email: "
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Field
                        type="password"
                        name="password"
                        label="Enter your password: "
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }    
}

export default UserCreate;