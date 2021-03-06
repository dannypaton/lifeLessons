import React from 'react'
import lessonServices from '../../services/lessonServices'

class LessonPost extends React.Component {
    constructor() {
        super();
        this.state = {
            message: '',
            error: ''
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

        if (!this.state.message) this.setState({ error: 'Lesson cannot be empty.' })
        const lesson = Object.assign({}, this.state);
        lesson.userId = this.props.user._id

        lessonServices.postLesson(lesson)
            .then(resp => resp.json())
            .then(lesson => {
                this.props.updateGlobalLessonState(lesson)
                this.setState({ message: '' })
            });
    }

    render() {
        return (
            <div className="form-mainwrap">
                <form className="form-wrap" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <textarea onChange={this.handleChange} name="message" type="text" placeholder="Post a lesson here!" value={this.state.message} />
                    </div>
                    <div className="form-row">
                        <button>Post Lesson</button>
                    </div>
                    {this.state.error ? <p className="error">{this.state.error}</p> : ''}
                </form>
            </div>
        )
    }
}

export default LessonPost