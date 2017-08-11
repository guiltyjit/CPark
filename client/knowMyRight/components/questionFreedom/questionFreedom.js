import styles from './questionFreedom.css';

import {
  YES_NO_LIST
} from '../../../components/constants/FormData';

Template.questionFreedom.helpers({
  styles: styles,
  yesNoList: function(){
    return YES_NO_LIST;
  }
});

Template.questionFreedom.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionFreedom",false);
    Session.set("conclusion",true);
  }
})