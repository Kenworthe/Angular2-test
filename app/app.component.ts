import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { InstructorsComponent } from './instructors.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello from an Angular2 Component!</h1>
        <courses></courses>
        <instructors></instructors>
    `,
	directives: [CoursesComponent, InstructorsComponent]
        // Use 'directives' to specify all components used within the template.
        // All components are technically directives.
        // The difference is directives do NOT have a template.

})
export class AppComponent { }