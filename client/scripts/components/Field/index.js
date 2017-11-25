import React from 'react';

class Field extends React.Component {
	constructor () {
		super()

		this.state = {
			requiredError: false
		}

		this.valueChanged = this.valueChanged.bind(this)
		this.renderError = this.renderError.bind(this)
	}

	renderError() {
		// if (this.state.requiredError || this.props.error.kind === 'required') {
		// 	return <div className="error">Field is required</div>
		// } else if (this.props.error.kind === 'enum') {
		// 	return <div className="error">Field must be: { this.props.error.properties.enumValues.join(', ') }</div>
		// } else {
		// 	return <div className="error">{ this.props.error.message }</div>
		// }
	}

	valueChanged(e) {
		if (this.props.isRequired && e.target.value === '') {
			this.setState({ requiredError: true })
		}
		this.props.onChange(e)
	}

    render() {
        const { label, value, onChange, error, name, type } = this.props;
        return <div className='field'>
            <label className='field-label'>{ label }</label>
            <input className='field-input' type={ type } name={ name } value={ value } onChange={ onChange } />
            { error ? <div className='field-error'>{error.message}</div> : null }
        </div>
    }
}

export default Field;