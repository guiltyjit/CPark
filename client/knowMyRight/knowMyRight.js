if (Meteor.isClient) {
  Session.setDefault("questionNationality", true);
  Session.setDefault("questionDifferentAgreement", false);
  Session.setDefault("questionWorkingDays", false);
  Session.setDefault("questionScareToWork", false);
  Session.setDefault("questionForceToWork", false);
  Session.setDefault("questionWorkingDay", false);
  Session.setDefault("questionMeal", false);
  Session.setDefault("questionPayment", false);
  Session.setDefault("questionBankAccount", false);
  Session.setDefault("questionFreedom", false);
  Session.setDefault("conclusion", false);

  Template.knowMyRight.helpers({
    isNationality: function () {
      return Session.get("questionNationality");
    },
    isDifferentAgreement: function () {
      return Session.get("questionDifferentAgreement");
    },
    isWorkingDays: function () {
      return Session.get("questionWorkingDays");
    },
    isScareToWork: function () {
      return Session.get("questionScareToWork");
    },
    isForceToWork: function () {
      return Session.get("questionForceToWork");
    },
    isMeal: function () {
      return Session.get("questionMeal");
    },
    isPayment: function () {
      return Session.get("questionPayment");
    },
    isBankAccount: function () {
      return Session.get("questionBankAccount");
    },
    isFreedom: function () {
      return Session.get("questionFreedom");
    },
    isConclusion: function () {
      return Session.get("conclusion");
    }
  });
}