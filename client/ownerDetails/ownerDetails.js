if (Meteor.isClient) {
  Template.ownerDetails.events({
    'click #btnRentOut': function (evt, res) {
      event.preventDefault();
      console.log("rent");
      Router.go("rentPage");
    }
  });
}
