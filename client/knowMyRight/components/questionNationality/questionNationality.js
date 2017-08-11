import styles from './questionNationality.css';
import {
  NATIONALITY_LIST
} from '../../../components/constants/FormData';

Template.questionNationality.helpers({
  styles: styles,
  nationalityLists: function () {
    NATIONALITY_LIST;
    return NATIONALITY_LIST;
  },
  nationalityImage: function () {
    if (Session.get("nationalityImage") !== undefined) {
      return Session.get("nationalityImage");
    } else {
      return "/images/human-traffic-hack/flag/malaysia.svg";
    }

  }
});

Template.questionNationality.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionNationality", false);
    Session.set("questionDifferentAgreement", true);
  },
  'click [name=nationalityCategory]': function (evt, res) {
    evt.preventDefault();
    var arr = Session.get("nationalityCategory");
    var selectedValue = $('[name=nationalityCategory]').val();
    for (var i = 0, len = NATIONALITY_LIST.length; i < len; i++) {
      if (NATIONALITY_LIST[i].key === selectedValue) {
        Session.set("nationalityImage", NATIONALITY_LIST[i].images);
      }
    }
  },
})