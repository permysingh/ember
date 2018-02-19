import Component from '@ember/component';

export default Component.extend({
    tagName: 'section',
    testValue: 'Type in here',
    init(){

        this._super(...arguments);
        //console.log('INIT');

    },
    didReceiveAttrs(){

        //console.log('RECEIVED ATTRS');

    },
    willRender(){

        //console.log('WILL RENDER');

    },
    didInserElement(){

        //console.log('INSERT ELEMENT');

    },
    didRender(){

        //console.log('DID RENDER');

    },
    actions: {

        clearInput(){

            this.set('testValue','');

        }

    }

});
