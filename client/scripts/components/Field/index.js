import React from 'react';

class Field extends React.Component {
    render() {
        const { label, value, onChange, error } = this.props;
        return <div className='field'>
            <label className='field-label'>{ label }</label>
            <input className='field-input' type='text' value={ value } onChange={ onChange } />
            { error ? <div className='field-error'>{error.message}</div> : null }
        </div>
    }
}

export default Field;