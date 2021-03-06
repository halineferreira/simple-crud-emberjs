import Controller from '@ember/controller';

export default Ember.Controller.extend({
    employees: [
        {nome: 'Marie Curie', email: 'haline@hehe.com'}, 
        {nome: 'Mae Jemison', email: 'haline@hehe.com'},
        {nome: 'Albert Hofmann', email: 'haline@hehe.com'}
    ],
    actions: {
        addEmployee: function(){
            let employeeName = this.get('employeeName');
            let employeeEmail = this.get('employeeEmail');
            this.get('employees').pushObject({nome: employeeName, email: employeeEmail})
        }
    }
});
