import styles from './questionForceToWork.css';

import {
  YES_NO_LIST
} from '../../../components/constants/FormData';

Template.questionForceToWork.helpers({
  styles: styles,
  yesNoList: function () {
    return YES_NO_LIST;
  }
});

Template.questionForceToWork.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionForceToWork",false);
    Session.set("questionMeal",true);
  }
})