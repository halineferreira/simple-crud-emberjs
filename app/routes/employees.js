import Route from '@ember/routing/route';

export default Route.extend({
    
    model(){
        /*let myJson = $.getJSON('employees.json');
        console.log(myJson);
        return myJson;*/
         return [
            {
                "name": "Albert Hofmann Route", 
                "email": "haline@hehe.com"
            },
            {
                "name": "Haline Ferreira Route",
                "email": "haline@hehe.com"
            }
        ]
        
    }
    
    /*
    model: function(){
        return $.get( 'employees.json');
      }
      */
});