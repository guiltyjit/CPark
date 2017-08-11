Template.humanTraffickingForm.events({
  "click #btnSubmit": function (e) {
    e.preventDefault();
    $("#thanksMessage").css("display","block");
    $("#divForm").css("display","none");
  }
})