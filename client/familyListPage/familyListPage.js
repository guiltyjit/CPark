import styles from './familyListPage.css';
import {
  FAMILY_LIST
} from '../components/constants/FormData';

if (Meteor.isClient) {
  Template.familyListPage.helpers({
    styles: styles,
    familyList: function () {
      return FAMILY_LIST
    }
  });

  Template.familyListPage.onRendered(function () {
    Session.set("rent", []);
  });

  Template.familyListPage.events({
    'click #btnNewFamily': function (evt, res) {
      evt.preventDefault();
      Router.go("familyDetail");
    }
  });
}
