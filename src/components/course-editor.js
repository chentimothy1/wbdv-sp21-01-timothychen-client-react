import React, { Component } from 'react'
import ModuleList from "./course editor components/module-list";
import LessonTabs from "./course editor components/lesson-tabs";
import TopicPills from "./course editor components/topic-pills";
import './course-editor.style.css';
import { Link } from 'react-router-dom'
import WidgetList from './course editor components/widget-list';

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { courseId: this.props.match.params.courseId }
        //   console.log(this.props)
    }

    componentDidMount() {
        if (this.state.courseId)
            this.props.findCourse(this.state.courseId).then(course => {
                if (course !== null) {

                    console.log("course " + course.title);
                    this.setState({ isEdit: false })

                    if (course.modules !== undefined) {
                        const selectedModule = course.modules[0];
                        const selectedLesson = selectedModule.lessons[0];
                        const selectedTopic = selectedLesson.topics[0];

                        this.setState({
                            course: course,
                            title: course.title,
                            selectedModule: selectedModule,
                            selectedLesson: selectedLesson,
                            selectedTopic: selectedTopic
                        })
                    }
                    else {
                        this.setState({
                            course: course,
                            title: course.title,
                            selectedModule: [],
                            selectedLesson: [],
                            selectedTopic: []
                        })
                    }
                }
            });
    }

    selectLesson = lesson => {
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]
        })
        console.log(lesson);
    }

    selectTopic = topic =>
        this.setState({
            selectedTopic: topic
        })

    selectModule = module => {
        if (module.lessons !== undefined) {
            this.setState({
                selectedModule: module,
                selectedLesson: module.lessons[0],
                selectedTopic: module.lessons[0].topics[0]
            })
        }
        else {
            this.setState({
                selectedModule: module,
                selectedLesson: [],
                selectedTopic: []
            })
        }

    }


    editLesson = (isEdit) => {
        this.setState({
            isEdit: isEdit
        });
        this.props.updateLesson(this.props.lesson.id, this.state.title || "Lesson Name");
    }

    formChanged = (event) => {
        console.log("event target" + event.target)
        this.setState({
            title: event.target.value
        })
    }

    editCourse = (isEdit) => {
        let course = this.state.course;
        course.title = this.state.title;
        this.setState({
            isEdit: isEdit
        });
        this.props.updateCourse(this.state.courseId, course);
    }

    componentWillMount() {
        document.body.className = "course-editor";
    }

    componentWillUnmount() {
        document.body.className = null;
    }

    render() {
        if (!this.state.course) return null;
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                    <button className="navbar-toggler mr-2"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <span className="navbar-brand mx-auto mr-md-5">
                        <Link to="/" className="mr-2 mt-1">
                            <i className="fa fa-times close-editor"></i>
                        </Link>
                        {!this.state.isEdit ?
                            <span>
                                {this.state.title}
                                <i className="fa fa-edit ml-1 click-title"
                                    onClick={() => this.setState({ isEdit: true })}>
                                </i>
                            </span>
                            :
                            <span>
                                <input type="text"
                                    className="mr-2"
                                    value={this.state.title}
                                    onChange={this.formChanged} />

                                <button type="submit"
                                    className="btn btn-info"
                                    onClick={() => this.editCourse(false)}>
                                    <i className="fa fa-check"></i>
                                </button>
                                <button type="submit"
                                    className="btn btn-danger"
                                    onClick={() => this.setState({ isEdit: false })}>
                                    <i className="fa fa-times"></i>
                                </button>
                            </span>
                        }
                    </span>
                    <LessonTabs
                        selectLesson={this.selectLesson}
                        selectedLesson={this.state.selectedLesson}
                        updateLesson={this.props.updateLesson}
                        lessons={this.state.selectedModule.lessons || []} />
                </nav>

                <div className="container-fluid widget-container">
                    <div className="row">
                        <ModuleList
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            deleteModule={this.props.deleteModule}
                            updateModule={this.props.updateModule}
                            modules={this.state.course.modules || []}
                        />

                        <div className="col-md-9 topic-list">
                            <div className="row">
                                <div className="col-md-12">
                                    <TopicPills
                                        selectTopic={this.selectTopic}
                                        selectedTopic={this.state.selectedTopic}
                                        updateTopic={this.props.updateTopic}
                                        topics={this.state.selectedLesson.topics || []} />
                                </div>


                                <div className="col-md-12 text-right">
                                    <button className="btn btn-info mr-3">Save</button>
                                    <label htmlFor="previewBtn" className="mr-1">Preview</label>
                                    <input id="previewBtn" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger" type="checkbox" />
                                </div>

                                <WidgetList />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed-bottom">
                    <a className="float-right btn btn-success new-widget-btn">
                        <i className="fas fa-plus"></i>
                    </a>
                </div>
            </div>

        )
    }
}

