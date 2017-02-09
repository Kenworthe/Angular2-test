import { Component } from 'angular2/core';
import { InstructorService } from './instructor.service';

@Component({
	selector: 'instructors',
	template: `
		<h2>{{ title }}</h2>
		<ul>
			<li *ngFor="#instructor of instructors">{{ instructor }}</li>
		</ul>
	`,
	providers: [InstructorService]

})
export class InstructorsComponent {
	title: string = 'InstructorsComponent!';
	instructors;

	constructor(instructorService: InstructorService) {
		this.instructors = instructorService.getInstructors();
	}
}