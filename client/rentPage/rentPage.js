import styles from './rentPage.css';
import {
  RENT_SELECTION_LIST,
  RENT_TYPE_SELECTION_LIST,
  TIME_LIST,
  DATE_LIST
} from '../components/constants/FormData';

if (Meteor.isClient) {
  
  Template.rentPage.helpers({
    styles: styles,
    rentSelectionList: function () {
      return RENT_SELECTION_LIST
    },
    rentTypeSelectionList: function () {
      return RENT_TYPE_SELECTION_LIST;
    },
    timeList: function () {
      return TIME_LIST;
    },
    dateList: function () {
      return DATE_LIST;
    },
    rentLists: function () {
      if (Session.get("rent").length > 0) {
        return Session.get("rent");
      }
      else {
        return [];
      }
    }
  });

  Template.rentPage.onRendered(function () {
    Session.set("rent", []);
    Session.set('title', 'Rent');
  });

  Template.rentPage.events({
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
    'click [name=rentTypeOption]': function (evt, res) {
      evt.preventDefault();
      console.log(evt.currentTarget.innerText);
       $('.btn-date').removeClass('isActive');
      if (evt.currentTarget.innerText === "Specify") {
        $("#divRentSpecify").css("display", "inline");
        $("#divRentRange").css("display", "none");
         $(evt.currentTarget).addClass('isActive');
      }
      else {
        $("#divRentRange").css("display", "inline");
        $("#divRentSpecify").css("display", "none");
         $(evt.currentTarget).addClass('isActive');
      }
    },
    'submit form': function (evt, res) {
      event.preventDefault();
      // var selected = res.findAll("input[type=checkbox]:checked");
      // var intake = [];
      // var studyMode = [];
      // var deliveryMode = [];

      // $(selected).each(function (index, object) {
      //   switch (object.name) {
      //     case "deliveryMode":
      //       deliveryMode.push({ "value": object.value, "text": DELIVERY_MODE_MAP[object.value] });
      //       break;
      //     case "studyMode":
      //       studyMode.push({ "value": object.value, "text": STUDY_MODE_MAP[object.value] });
      //       break;
      //     case "intake":
      //       intake.push({ "month": object.value, "text": NUM_TO_MONTH_MAP[object.value] });
      //       break;
      //     default:
      //       break;
      //   }
      // });

      // var saveCourseInfromation = {};

      // saveCourseInfromation.course = $('[name=txtCourse]').val();
      // saveCourseInfromation.courseImgUrl = $('[name=txtCourseImageUrl]').val();
      // saveCourseInfromation.qualification = $('[name=txtQualification]').val();
      // saveCourseInfromation.courseDurationMax = $('[name=txtMaxCourseDuration]').val();
      // saveCourseInfromation.courseDurationMin = $('[name=txtMinCourseDuration]').val();

      // saveCourseInfromation.deliveryMode = deliveryMode;
      // saveCourseInfromation.studyMode = studyMode;
      // saveCourseInfromation.intake = intake;

      // saveCourseInfromation.qualificationLevel = $('[name=qualificationLevel]').val();
      // saveCourseInfromation.qualificationCategory = $('[name=qualificationCategory]').val();
      // saveCourseInfromation.provider = $('[name=provider]').val();
      // saveCourseInfromation.providerLabel = $("[name=provider] option:selected").text();
      // saveCourseInfromation.location = Session.get("location");
      // saveCourseInfromation.keyTopic = Session.get("keyTopic");
      // saveCourseInfromation.careerOutcomes = Session.get("careerOutcomes");
      // saveCourseInfromation.preRequisites = Session.get("preRequisites");
      // saveCourseInfromation.partner = Session.get("partner");

      // Meteor.call("insertCourse", saveCourseInfromation, function (error, results) {
      //   if (error) {
      //     console.log(error);
      //   }
      //   else {
      //     console.log("data been save");
      //     alert("data been save");
      //   }
      // });

    }
  });
}
