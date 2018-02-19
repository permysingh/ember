import Controller from '@ember/controller';

export default Controller.extend({
    colors : ['red','orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    currentColor: 'grey',
    actions : {
        changeColor(colorParam) {
            
            this.set('currentColor', colorParam);
            
        }
    }
});
