import Component from '@ember/component';
//import Ember from 'ember'

export default Component.extend({
    tagName:'',
    employees: [],
    actions: {
        addEmployee(){
            let employeeName = this.get('employeeName');
            let employeeEmail = this.get('employeeEmail');
            this.get('employees').pushObject({name: employeeName, email: employeeEmail})
        }
    }
});