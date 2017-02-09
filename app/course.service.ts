export class CourseService {
	courses: string[] = ['Angular101', 'React101', 'jQuery101'];

	getCourses() : string[] {
		return this.courses;
		//pretend that this is returning data coming from an API.
	}
}