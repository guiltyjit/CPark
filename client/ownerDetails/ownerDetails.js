import styles from './ownerDetails.css';

if (Meteor.isClient) {
  Template.ownerDetails.events({
    'click #btnRentOut': function (evt, res) {
      event.preventDefault();
      console.log("rent");
      Router.go("rentPage");
    }
  });

    Template.ownerDetails.helpers({
        styles: styles
    });

  Template.ownerDetails.onRendered(function () {
    Session.set('title', 'Owner Details');
  });
}
