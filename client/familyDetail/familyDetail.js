import styles from './familyDetail.css';

if (Meteor.isClient) {
    Template.familyDetail.onRendered(function() {
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
