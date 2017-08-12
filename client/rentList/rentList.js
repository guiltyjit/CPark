import styles from './rentList.css';
import {
  MOCK_CURRENT_RENT_DATA,
  MOCK_PROFIT_RENT_DATA,
  RENT_LIST_TAB_OPTION
} from '../components/constants/FormData';

if (Meteor.isClient) {
  
  Template.rentList.helpers({
    styles: styles,
    rentListTabOption: function () {
      return RENT_LIST_TAB_OPTION
    },
    mockProfitRentData: function(){
      console.log('MOCK_PROFIT_RENT_DATA');
      console.log(MOCK_PROFIT_RENT_DATA);
      return MOCK_PROFIT_RENT_DATA
    },
    mockCurrentRentData: function(){
      console.log('MOCK_CURRENT_RENT_DATA');
      console.log(MOCK_CURRENT_RENT_DATA);
      return MOCK_CURRENT_RENT_DATA
    }
  });

  Template.rentList.onRendered(function () {
    Session.set("rent", []);
    Session.set('title', 'Rent List');
  });

  Template.rentList.events({
    'mouseenter .addHoverEvent': function (evt, res) {
      $(evt.currentTarget).removeClass('fa-plus-square');
      $(evt.currentTarget).addClass('fa-plus-square-o');
    },
    'mouseleave .addHoverEvent': function (evt, res) {
      $(evt.currentTarget).removeClass('fa-plus-square-o');
      $(evt.currentTarget).addClass('fa-plus-square');
    },
    'mouseenter .removeHoverEvent': function (evt, res) {
      $(evt.currentTarget).removeClass('fa-minus-square');
      $(evt.currentTarget).addClass('fa-minus-square-o');
    },
    'mouseleave .removeHoverEvent': function (evt, res) {
      $(evt.currentTarget).removeClass('fa-minus-square-o');
      $(evt.currentTarget).addClass('fa-minus-square');
    },
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
    },
    'click [name=btnRemoveRent]': function (evt, res) {
      evt.preventDefault();
      var arr = Session.get("rent");
      console.log(evt.currentTarget.id);
      var output = [];
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i].id != evt.currentTarget.id) {
          output.push(arr[i]);
        }
      }
      Session.set("rent", output);
    },
    'click [name=rentListDisplay]': function (evt, res) {
      evt.preventDefault();
      console.log(evt.currentTarget.innerText);
      if (evt.currentTarget.innerText === "Profits") {
        $("#divRentProfit").css("display", "inline");
        $("#divRentCurrent").css("display", "none");
      }
      else {
        $("#divRentCurrent").css("display", "inline");
        $("#divRentProfit").css("display", "none");
      }
    }
  });
}
