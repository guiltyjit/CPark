import styles from './login.css';

if (Meteor.isClient) {
    Template.login.helpers({
        styles: styles
    });

    Template.login.events({
        'click #btnLogin': function (event) {
            event.preventDefault();
            Router.go("ownerDetails");
        }
    });
}
