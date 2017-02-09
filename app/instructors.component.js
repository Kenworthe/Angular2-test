System.register(['angular2/core', './instructor.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, instructor_service_1;
    var InstructorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (instructor_service_1_1) {
                instructor_service_1 = instructor_service_1_1;
            }],
        execute: function() {
            InstructorsComponent = (function () {
                function InstructorsComponent(instructorService) {
                    this.title = 'InstructorsComponent!';
                    this.instructors = instructorService.getInstructors();
                }
                InstructorsComponent = __decorate([
                    core_1.Component({
                        selector: 'instructors',
                        template: "\n\t\t<h2>{{ title }}</h2>\n\t\t<ul>\n\t\t\t<li *ngFor=\"#instructor of instructors\">{{ instructor }}</li>\n\t\t</ul>\n\t",
                        providers: [instructor_service_1.InstructorService]
                    }), 
                    __metadata('design:paramtypes', [instructor_service_1.InstructorService])
                ], InstructorsComponent);
                return InstructorsComponent;
            }());
            exports_1("InstructorsComponent", InstructorsComponent);
        }
    }
});
//# sourceMappingURL=instructors.component.js.map