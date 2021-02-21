import React from 'react';
import './course-table.style.css';
import CourseAdd from './course-add';
import CourseCard from './course-card';
import CourseHeader from './course-header';
import CourseFooter from './course-footer';

const CourseGrid = ({ courses, deleteCourse, addCourse }) =>
    <div>
        <CourseAdd addCourse={addCourse} />
        <CourseHeader view="grid" />
        <div className="container course-list course-list-first">
            <div className="row">
                {
                    courses.map((course, index) =>
                        (<CourseCard
                            deleteCourse={deleteCourse}
                            key={index}
                            course={course} />)
                    )
                }
            </div>
        </div>
        <CourseFooter />
    </div>

export default CourseGrid;