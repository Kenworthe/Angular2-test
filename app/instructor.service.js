System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InstructorService;
    return {
        setters:[],
        execute: function() {
            InstructorService = (function () {
                function InstructorService() {
                    this.instructors = ['Mike Hopper', 'John Mann', 'Marc Wright'];
                }
                InstructorService.prototype.getInstructors = function () {
                    return this.instructors;
                };
                return InstructorService;
            }());
            exports_1("InstructorService", InstructorService);
        }
    }
});
//# sourceMappingURL=instructor.service.js.map