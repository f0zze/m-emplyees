import _ from 'lodash';
import {Meteor} from 'meteor/meteor';
import {image, helpers} from 'faker';

import {Emplyees} from '../imports/collections/employees';

Meteor.startup(() => {
    const recods = Emplyees.find({}).count();
    console.log(recods);
    console.log('yo');
    if (!recods) {
        _.times(5000, ()=> {
            const {name, email, phone}  = helpers.createCard();

            Emplyees.insert({
                name,
                email,
                phone,
                avatar: image.avatar()
            });
        });
    }
});
