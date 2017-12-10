import React from 'react'
import lessonServices from '../../services/lessonServices'

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
        lesson.userId = '5a19a302fb58951364035fb8'
        // console.log(lesson, 'lesson in handle submit')

        lessonServices.postLesson(lesson)
            .then(resp => resp.json())
            .then(lesson => {
                this.props.updateGlobalLessonState(lesson)
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