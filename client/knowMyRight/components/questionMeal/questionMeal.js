import styles from './questionMeal.css';
import {
  YES_NO_FOOD_LIST
} from '../../../components/constants/FormData';

Template.questionMeal.helpers({
  styles: styles,
  foodYesNoList: function () {
    return YES_NO_FOOD_LIST;
  },
  nationalityImage: function () {
    if (Session.get("nationalityImage") !== undefined) {
      return Session.get("nationalityImage");
    } else {
      return "/images/human-traffic-hack/flag/india.png";
    }

  }
});

Template.questionMeal.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionMeal",false);
    Session.set("questionPayment",true);
  }
})