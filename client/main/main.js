import { Template } from 'meteor/templating';
import { Meteor  } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import styles from '../style.css';
import './main.html';

Template.mainLayout.helpers({
  styles: styles
});

Template.loginRegisterTemplate.rendered = function(){
  if(window.location.hash)
    $('a[href="'+window.location.hash+'"]').tab('show');
}

Router.configure({
  layoutTemplate: 'mainLayout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.render('header', {to: 'header'});
  this.render('login');
  this.render('footer', {to: 'footer'});
});

Router.route('ref', function () {
  this.render('header', {to: 'header'});
  this.render('page');
  this.render('footer', {to: 'footer'});
});

Router.route('/rentList', function () {
  this.render('header', {to: 'header'});
  this.render('rentList');
  this.render('footer', {to: 'footer'});
});

Router.route('/rentPage', function () {
  this.render('header', {to: 'header'});
  this.render('rentPage');
  this.render('footer', {to: 'footer'});
});

Router.route('/guestListPage', function () {
  this.render('header', {to: 'header'});
  this.render('guestListPage');
  this.render('footer', {to: 'footer'});
});

Router.route('/guestDetail', function () {
  this.render('header', {to: 'header'});
  this.render('guestDetail');
  this.render('footer', {to: 'footer'});
});

Router.route('/familyListPage', function () {
  this.render('header', {to: 'header'});
  this.render('familyListPage');
  this.render('footer', {to: 'footer'});
});

Router.route('/familyDetail', function () {
  this.render('header', {to: 'header'});
  this.render('familyDetail');
  this.render('footer', {to: 'footer'});
});

Router.route('styles', function() {
    this.render('header', {to: 'header'});
    this.render('styles');
    this.render('footer', {to: 'footer'});
});
