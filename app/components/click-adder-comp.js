import Component from '@ember/component';

export default Component.extend({
    init(){
		this._super(...arguments);
    },
    initCounterValue: 0,
    incrementVal() {
    
        var initVal = this.getCounterVal() + 1;
        this.set('initCounterValue',initVal);
    
        return initVal;
    
    },
    decrementVal() {
        var initVal = this.getCounterVal() - 1;

        if(initVal >= 0){
        
            this.set('initCounterValue',initVal);
        
        }
    
        return initVal;

    },
    getCounterVal() {

        return this.get('initCounterValue');

    },
    actions: {
        incrementClick(){
    
            this.incrementVal();
    
        },
        decrementClick(){
    
            this.decrementVal()
    
        }
    }
});
