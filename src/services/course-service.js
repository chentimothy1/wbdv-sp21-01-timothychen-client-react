
const url = "https://wbdv-generic-server.herokuapp.com/api/timc/courses";


export default class CourseService {

    createCourse = (newCourse) =>
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newCourse),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

    findAllCourses = () =>
        fetch(url)
            .then(response => response.json())


    deleteCourse = (courseId) =>
        fetch(`${url}/${courseId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())

    updateCourse = (courseId, newCourse) =>
        fetch(`${url}/${courseId}`, {
            method: 'PUT',
            body: JSON.stringify(newCourse),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

}
