import styles from './guestListPage.css';
import {
  GUESt_LIST
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
    Session.set('title', 'Guest List');
  });

  Template.guestListPage.events({
    'click #btnNewGuest': function (evt, res) {
      event.preventDefault();
      Router.go("guestDetail");
    }
  });
}
