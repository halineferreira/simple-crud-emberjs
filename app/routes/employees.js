import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {nome: 'Marie Curie', email: 'haline@hehe.com'}, 
            {nome: 'Mae Jemison', email: 'haline@hehe.com'},
            {nome: 'Albert Hofmann', email: 'haline@hehe.com'}];
      }
});