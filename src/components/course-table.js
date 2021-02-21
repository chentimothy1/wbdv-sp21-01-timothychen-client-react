import React from 'react';
import './course-table.style.css';
import CourseAdd from './course-add';
import CourseRow from './course-row';
import CourseHeader from './course-header';
import CourseFooter from './course-footer';

const CourseTable =({courses, deleteCourse, addCourse})=> {
    console.log("Render table");
     console.log(courses);    

    return( <div>
            <CourseAdd addCourse={addCourse}/>              
            <CourseHeader view="table"/>
            <div className="container course-list course-list-first">
                <div className="row modify-day">
                </div>
                {  courses.map((course, index) =>
                        (<CourseRow
                            deleteCourse={ course => deleteCourse(course) }
                            key={index}
                            course={course}/>                       
                  
                      )
                    )
                }
            </div>
            <CourseFooter/>
        </div>)
}
       
export default CourseTable;