import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import * as serviceWorker from './serviceWorker';
// import "node_modules/font-awesome/less/font-awesome.less"
// import "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import CourseManager from './components/course-manager'

ReactDOM.render(<CourseManager />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();