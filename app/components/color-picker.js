import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.colors = ['red','orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    },
    currentColor: 'grey',
    actions : {
        changeColor(colorParam) {
            
            this.set('currentColor', colorParam);
            
        }
    }
});
