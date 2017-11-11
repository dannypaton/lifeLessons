import React from 'react'
import { render } from 'react-dom'
import LessonPost from './components/lessonPost'

// Replace this with your own components
class App extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <LessonPost />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))
