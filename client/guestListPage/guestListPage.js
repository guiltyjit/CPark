import styles from './guestListPage.css';
import {
  GUEST_LIST
} from '../components/constants/FormData';

if (Meteor.isClient) {
  Template.guestListPage.helpers({
    styles: styles,
    guestList: function () {
      return GUEST_LIST
    }
  });

  Template.guestListPage.onRendered(function () {
    Session.set("rent", []);
  });

  Template.guestListPage.events({
    'click #btnNewGuest': function (evt, res) {
      event.preventDefault();
      Router.go("guestDetail");
    }
  });
}
