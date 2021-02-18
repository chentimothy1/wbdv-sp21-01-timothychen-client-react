import React from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course, deleteCourse}) =>

             <div className="course-selection">
                    <div className="row course">
                        <div className="col-md-4 col-sm-11 col-11">
                               <i className="fa fa-book course-icon"></i>{" "}
                                <Link to={`/course/${course._id}/edit`} className="course-title">
                                   {course.title}
                                </Link>
                                <Link to={`/course/${course._id}/edit`} className="course-title">
                                   <i className="fa fa-edit ml-2"></i>
                                </Link>
                        </div>


                        <div className="col-md-3 d-sm-none d-none d-md-block">
                            me
                        </div>

                        <div className="col-md-3 d-sm-none d-none d-md-block">
                            2:30pm
                        </div>

                        <div className="col-md-1 d-sm-none d-none d-md-block"></div>
                        <div className="col-md-1 col-sm-1 col-1">
                            <i className="fas fa-times delete-icon" onClick={() => deleteCourse(course)}></i>
                        </div>
                    </div>
              </div> 
    
export default CourseRow

 