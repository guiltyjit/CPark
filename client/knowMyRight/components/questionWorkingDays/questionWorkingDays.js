import styles from './questionWorkingDays.css';

import {
  WORK_HOUR_LIST,
  WORK_REST_LIST
} from '../../../components/constants/FormData';

Template.questionWorkingDays.helpers({
  styles: styles,
  workHourLists: function () {
    return WORK_HOUR_LIST;
  },
  workRestLists: function () {
    return WORK_REST_LIST;
  }
});

Template.questionWorkingDays.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionWorkingDays", false);
    Session.set("questionScareToWork", true);
  }
})