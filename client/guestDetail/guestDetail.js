import styles from './guestDetail.css';

if (Meteor.isClient) {
    Template.guestDetail.onRendered(function() {
        Session.set('title', 'Guest');
    });

    Template.guestDetail.helpers({
        styles: styles,
    });

    Template.guestDetail.events({
        'click #addNewBtn': function (event) {
            event.preventDefault();
            Router.go("guestListPage");
        }
    });
}
