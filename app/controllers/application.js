import Controller from '@ember/controller';

export default Controller.extend({
    model: function(){
        return $.get('employees.json');
    }  
});
