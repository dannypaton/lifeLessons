import React from 'react'
import Field from '../Field'

class UserLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state)
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(user),
        })
        .then((res) => {
            // 3. If the user is valid, log them in                   
            if (res.status !== 401) {
                return res.json()                
            } else {
                // 4. If the user is invalid, let them know and give them another shot to try again. another shot to try again.                            
                return console.log('Unauthorized')
            }
        })
        .then((json) => {
            // console.log('res.json', json);
            this.props.updateCurrentUserState(json)
        })

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <Field
                        type='email'
                        name='email'
                        label='Enter your email: '
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Field
                        type='password'
                        name='password'
                        label='Enter your password: '
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default UserLogin