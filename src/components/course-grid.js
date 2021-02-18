import React from 'react';
import './CourseTableComponent.style.css';
import CourseAdd from './CourseAddComponent';
import CourseCard from './course-card';
import CourseHeader from './CourseHeaderComponent';
import Footer from './FooterComponent';

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
        <Footer />
    </div>

export default CourseGrid;