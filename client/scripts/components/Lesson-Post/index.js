import React from 'react'

class LessonPost extends React.Component {
    constructor() {
        super();
        this.state = {
            message: '',
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const lesson = Object.assign({}, this.state);
        lesson.userId = 2

        fetch('/api/lessons', {
            method: 'POST',
            body: JSON.stringify(lesson),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(resp => resp.json())
            .then(lesson => {
                this.props.createLesson(lesson)
                this.setState({ message: '' })
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <textarea onChange={this.handleChange} name="message" type="text" placeholder="Lesson..." value={this.state.message} />
                    </div>
                    <div className="form-row">
                        <button>Post Lesson</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LessonPost