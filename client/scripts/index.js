import React from 'react'
import { render } from 'react-dom'
import LessonPost from './components/Lesson-Post'
import LessonWrapper from './components/Lesson-Wrapper'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            lessons: []
        }

        this.getLessons = this.getLessons.bind(this)
        this.createLesson = this.createLesson.bind(this)
    }

    componentDidMount() {
        this.getLessons()
    }

    createLesson(lesson) {
        console.log(lesson, 'test')
        const allLessons = this.state.lessons
        allLessons.push(lesson)
        this.setState({ lessons: allLessons })
    }

    getLessons() {
        fetch('/api/lessons')
            .then(resp => resp.json())
            .then(lessons => {
                this.setState({ lessons: lessons })
            });
    }

    render() {
        return (
            <div>
                <LessonPost createLesson={this.createLesson} />
                <LessonWrapper lessons={this.state.lessons} />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))
