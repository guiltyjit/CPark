import styles from './questionScareToWork.css';

import {
  WORK_FEEL_LIST
} from '../../../components/constants/FormData';

Template.questionScareToWork.helpers({
  styles: styles,
  workFeelList: function () {
    return WORK_FEEL_LIST;
  }
});

Template.questionScareToWork.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionScareToWork",false);
    Session.set("questionForceToWork",true);
  }
})