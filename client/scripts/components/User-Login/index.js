import React from 'react'
import Field from '../Field'

class UserLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error: ''
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
               this.setState({ error: 'Incorrect Password.'})
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
            <div className="form-wrap">
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
                    {this.state.error ? <p className='error'>{this.state.error}</p> : ''}
                </form>
            </div>
        )
    }
}

export default UserLogin