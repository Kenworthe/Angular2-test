import { Component } from 'angular2/core'
import { CourseService } from './course.service'

@Component({
	selector: 'courses',
	template: `
		<h2>{{ title }}</h2>
		<ul>
			<li *ngFor="#course of courses">{{ course }}</li>
		</ul>
	`,
	providers: [CourseService]
		// Use 'providers' to list all services this component uses.
		// Then include the 
})

export class CoursesComponent {
	title: string = 'CoursesComponent!';
	courses;

	constructor(courseService : CourseService){		//inject CourseService dependency.
		this.courses = courseService.getCourses();
	}
}