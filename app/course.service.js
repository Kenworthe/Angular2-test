System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                    this.courses = ['Angular101', 'React101', 'jQuery101'];
                }
                CourseService.prototype.getCourses = function () {
                    return this.courses;
                    //pretend that this is returning data coming from an API.
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map