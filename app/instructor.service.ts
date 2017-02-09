export class InstructorService {
	instructors: string[] = ['Mike Hopper', 'John Mann', 'Marc Wright'];

	getInstructors(){
		return this.instructors;
	}
}