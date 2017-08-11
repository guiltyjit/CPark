import styles from './questionPayment.css';

import {
  PAYMENT_LIST,
  YES_NO_LIST
} from '../../../components/constants/FormData';

Template.questionPayment.helpers({
  styles: styles,
  payList: function () {
    return PAYMENT_LIST;
  },
  yesNoList: function(){
    return YES_NO_LIST;
  }
});

Template.questionPayment.events({
  // 'click [name=monthlySalary]': function (evt, res) {
  //   evt.preventDefault();
  //   var selectedValue = $('[name=monthlySalary]').val();
  //   console.log('selectedValue => ',selectedValue);
  //   if(selectedValue !== "NoPay"){
  //     $('partBQuestion').css("display","inline");
  //   }else{
  //     $('partBQuestion').css("display","none");
  //   }
  // },
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionPayment",false);
    Session.set("questionFreedom",true);
  }
})