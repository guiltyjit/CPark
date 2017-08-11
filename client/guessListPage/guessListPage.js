import styles from './guessListPage.css';
import {
  GUESS_LIST
} from '../components/constants/FormData';

if (Meteor.isClient) {
  Template.guessListPage.helpers({
    styles: styles,
    guessList: function () {
      return GUESS_LIST
    }
  });

  Template.guessListPage.onRendered(function () {
    Session.set("rent", []);
  });

  Template.guessListPage.events({
    'click #btnAddRent': function (evt, res) {
      function getPartnerInformation(key, id) {
        var returnValue = {};
        $(PROVIDER_LIST).each(function (index, object) {
          if (object.key === key) {
            object.id = id;
            returnValue = object;
          }
        });
        return returnValue;
      }

      function getTimeInformation(key, id) {
        var returnValue = {};
        $(TIME_LIST).each(function (index, object) {
          if (object.key === key) {
            object.id = id;
            returnValue = object;
          }
        });
        return returnValue;
      }
      function getDateInformation(key, id) {
        var returnValue = {};
        $(DATE_LIST).each(function (index, object) {
          if (object.key === key) {
            object.id = id;
            returnValue = object;
          }
        });
        return returnValue;
      }
      evt.preventDefault();
      var dateItem = $("#dateList");
      var timeFromItem = $("#timeFrom");
      var timeToItem = $("#timeTo");
      var arr = [];
      if (Session.get("rent") && Session.get("rent").length > 0) {
        var arr = Session.get("rent");
        arr.push({ "id": Session.get("rent").length, "timeFrom": timeFromItem.val(), "timeTo": timeToItem.val(), "date": dateItem.val() });
        Session.set("rent", arr);
      }
      else {
        Session.set("rent", [{ "id": 0, "timeFrom": timeFromItem.val(), "timeTo": timeToItem.val(), "date": dateItem.val() }]);
      }
      console.log(Session.get("rent"));
    }
  });
}
