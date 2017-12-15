import React from 'React'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
	render() {
		return (
			<div className='navWrapper'>
				<Link to='/'><h4>Life Lessons</h4></Link>
			</div>
		)
	}
}

export default Nav