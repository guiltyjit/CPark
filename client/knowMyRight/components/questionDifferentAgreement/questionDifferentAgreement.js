import styles from './questionDifferentAgreement.css';
import {
  YES_NO_LIST
} from '../../../components/constants/FormData';

Template.questionDifferentAgreement.helpers({
  styles: styles,
  yesNoLists: function () {
    return YES_NO_LIST;
  }
});

Template.questionDifferentAgreement.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionDifferentAgreement",false);
    Session.set("questionWorkingDays",true);
  }
})