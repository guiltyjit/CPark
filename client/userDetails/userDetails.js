import styles from './userDetails.css';

var userSections = [
    "._client_userDetails__userDetails__detailsSectionA",
    "._client_userDetails__userDetails__detailsSectionB",
    "._client_userDetails__userDetails__detailsSectionC"
];

var screenPos = 160;

//start user screening position
window.onload = function(){
    $(document).scrollTop(screenPos);
}

Template.userDetails.created = function(){
    Session.setDefault("userProfileDone", false);
};

Template.userDetails.helpers({
    styles:styles
});

Template.userDetails.events({
    "click ._client_userDetails__userDetails__detailsSectionA button": function(e) {
        e.preventDefault();
        Session.set('gender', e.target.name);
        $(userSections[0]).removeClass('fadeInRight');
        $(userSections[0]).addClass('fadeOutLeft');
        window.setTimeout(function(){
            $(userSections[0]).css("display", "none");
            $(userSections[1]).css("display", "block");
        }, 1000);
    },
     "click ._client_userDetails__userDetails__detailsSectionB button": function(e) {
        e.preventDefault();
        Session.set('ageGroup', e.target.name);
        $(userSections[1]).removeClass('fadeInRight');
        $(userSections[1]).addClass('fadeOutLeft');
        window.setTimeout(function(){
            $(userSections[1]).css("display", "none");
            $(userSections[2]).css("display", "block");
        }, 1000);
    },
     "click ._client_userDetails__userDetails__detailsSectionC button": function(e) {
        e.preventDefault();
        Session.set('workingStatus', e.target.name);
        $(userSections[2]).removeClass('fadeInRight');
        $(userSections[2]).addClass('fadeOutLeft');
        Session.set('userProfileDone', true);
        window.setTimeout(function(){
            $('.userMain').css("display","none");
        }, 500);
    }
});

