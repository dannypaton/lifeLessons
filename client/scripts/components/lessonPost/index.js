import React from 'react'

class lessonPost extends React.Component {
    constructor() {
        super();
        this.state = {
            message: '',
            lessons: []
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getLessons = this.getLessons.bind(this)
    }

    componentDidMount() {
        this.getLessons()
    }

    getLessons() {
        fetch('/api/lessons')
            .then(resp => resp.json())
            .then(json => {
                this.setState({ lessons: json })
            });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const lesson = Object.assign({}, this.state);
        lesson.userId = 1

        fetch('/api/lessons', {
            method: 'POST',
            body: JSON.stringify(lesson),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(console.log('yay'));
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
                <div>
                    {this.state.lessons.map(lesson => {
                        console.log(lesson, 'lesson')
                        return <p>{lesson.message}</p>
                    })}
                </div>
            </div>
        )
    }
}

export default lessonPost