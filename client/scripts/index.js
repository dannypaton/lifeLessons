import React from 'react'
import { render } from 'react-dom'
import CreateUser from './components/Create-User'
import UserCard from './components/User-Card'
import LessonPost from './components/Lesson-Post'
import LessonWrapper from './components/Lesson-Wrapper'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            lessons: [],
            currentUser: {}
        }

        this.getAllLessons = this.getAllLessons.bind(this)
        this.getUsersLessons = this.getUsersLessons.bind(this)
        this.createLesson = this.createLesson.bind(this)
    }

    componentDidMount() {
        this.getAllLessons()
        this.getCurrentUser()
    }

    createLesson(lesson) {
        const allLessons = this.state.lessons
        allLessons.push(lesson)
        this.setState({ lessons: allLessons })
    }

    getCurrentUser() {
        fetch('/api/user')
            .then(resp => resp.json())
            .then(user => {
                this.setState({ currentUser: user })
            });
    }

    getAllLessons() {
        fetch('/api/lessons')
            .then(resp => resp.json())
            .then(lessons => {
                this.setState({ lessons: lessons })
            });
    }

    getUsersLessons() {
        fetch(`/api/lessons/${2}`)
            .then(resp => resp.json())
            .then(lessons => {
                this.setState({ lessons: lessons })
            });
    }

    render() {
        return (
            <div>
                <div>
                    <UserCard user={ this.state.currentUser } />
                </div>
                <div>
                    <CreateUser />
                </div>
                <div>
                    <LessonPost createLesson={this.createLesson} />
                    <LessonWrapper lessons={this.state.lessons} />
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))
