import styles from './alarm.css';
var song = new Audio('/music/song.mp3');
Template.alarm.onRendered(function () {
  Session.set("done", false);
  Session.set("finish", true);
  Session.set("timer",10);
  var countdown = new ReactiveCountdown(10);
  Session.set("countDown", countdown);
});

Template.alarm.helpers({
  styles: styles,
  done: function () {
    return Session.get("done");
  },
  finish: function () {
    return Session.get("finish");
  }
});
Template.alarm.events({
  "click #turnAlarm": function () {
    song.pause();
    Session.set("done", false);
    var countdown = new ReactiveCountdown(Session.get("timer"));
    countdown.start(function () {
      song.play();
      Session.set("done", true);
    });
  },
  "click #doneAlarm": function () {
    song.pause();
    Session.set("done", false);
    Session.set("finish", true);
    Session.set("timer",10);
    var countdown = new ReactiveCountdown(10);
    Session.set("countDown", countdown);
  },
  "click #start": function () {
    var countdown = new ReactiveCountdown(Session.get("timer"));
    countdown.start(function () {
      song.play();
      Session.set("done", true);
    });
    Session.set("finish", false);
  },
  "change #skin1": function () {
    Session.set("timer",10);
  },
  "change #skin2": function () {
    Session.set("timer",20);
  },
  "change #skin3": function () {
    Session.set("timer",30);
  }
});

