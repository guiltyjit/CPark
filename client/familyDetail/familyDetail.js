import styles from './familyDetail.css';

if (Meteor.isClient) {
    Template.familyDetail.onRendered(function() {
        Session.set('title', 'Family Details');
    });

    Template.familyDetail.helpers({
        styles: styles,
    });

    Template.familyDetail.events({
        'click #btnSubmit': function (event) {
            event.preventDefault();
            Router.go('familyListPage');
        }
    });
}
