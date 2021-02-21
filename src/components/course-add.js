import React from 'react';
import './course-table.style.css';

class CourseAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    updateForm = event =>
        this.setState({
            title: event.target.value.trim()
        })

    render() {
        return (
            <nav className="navbar navbar-light bg-transparent custom-navbar fixed-top">
                <button className="navbar-toggler mr-2 wbdv-field wbdv-hamburger" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand d-none d-sm-block wbdv-label wbdv-course-manager" href="#">
                    Course Manager
                 </a>

                <div className="form-inline custom-form mr-auto">
                    <input className="form-control mr-sm-2"
                        type="text"
                        id="navBarSearchForm"
                        onChange={this.updateForm}
                        placeholder="New Course" />
                    <button className="btn btn-danger new-course-btn"
                        type="submit"
                        onClick={() => this.props.addCourse({
                            id: (new Date()).getTime() + '',
                            title: this.state.title
                        })}>
                        <i className="fa fa-plus"></i>
                    </button>
                </div>

                <div className="collapse navbar-collapse"
                    id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Log In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Registration</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Created User</a>
                            </li>
                        </ul>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default CourseAdd;

