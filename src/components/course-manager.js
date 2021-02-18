import React from 'react';
import CourseTable from './course-table';
import CourseGrid from './course-grid';
import CourseService from './course-service';
import CourseEditor from './course-editor';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class CourseManagerContainer extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            // courses: this.courseService.findAllCourses()
            courses: []
        }
    }

    componentDidMount() {
        this.updateCourseList();
    }

    updateCourseList = () => {
        this.courseService.findAllCourses()
            .then(json => this.setState({ courses: json }))
    }

    updateCourse = (id, course) => {
        console.log("update " + id);
        console.log(course);
        this.courseService.updateCourse(id, course).then(json => {
            console.log("json", json)
            //  this.setState({ courses : json })
        });
        //  console.log("courses", this.state.courses)  
    }


    addCourse = newCourse => {
        if (newCourse.title !== "") {
            this.courseService.createCourse(newCourse).then(json => {
                this.updateCourseList();
            })
        }
    }

    deleteCourse = courseToDelete => {
        console.log("DELETE " + courseToDelete);
        this.courseService.deleteCourse(courseToDelete._id).then(json => {
            this.updateCourseList();
        })
    }


    deleteModule = moduleId => {
        this.courseService.deleteModule(moduleId)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    deleteTopic = topic => {
        this.courseService.deleteTopic(topic)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }



    updateModule = (id, title) => {
        this.courseService.updateModule(id, title);
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }




    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/"
                            render={() =>
                                <CourseTable
                                    addCourse={this.addCourse}
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses} />} />
                        <Route exact path="/course/grid"
                            render={() =>
                                <CourseGrid
                                    addCourse={this.addCourse}
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses} />} />
                        <Route
                            exact
                            render={(props) =>
                                <CourseEditor
                                    {...props}
                                    findCourse={this.findCourseById}
                                    deleteModule={this.deleteModule}
                                    updateModule={this.updateModule}
                                    updateCourse={this.updateCourse}
                                    courses={this.state.courses} />}
                            path="/course/:courseId/edit" />
                    </div>
                </Router>
            </div>
        )
    }
}

export default CourseManagerContainer;