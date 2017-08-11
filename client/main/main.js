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
  this.render('home');
  this.render('footer', {to: 'footer'});
});

Router.route('ref', function () {
  this.render('header', {to: 'header'});
  this.render('page');
  this.render('footer', {to: 'footer'});
});

Router.route('/map', function () {
  this.render('header', {to: 'header'});
  this.render('home');
  this.render('footer', {to: 'footer'});
});

Router.route('/map/cenang', function () {
  this.render('header', {to: 'header'});
  this.render('cenangBeachViewPage');
  this.render('footer', {to: 'footer'});
});

Router.route('/safetyLocationPage', function () {
  this.render('header', {to: 'header'});
  this.render('safetyLocationPage');
  this.render('footer', {to: 'footer'});
});

Router.route('/safetyInformationPage', function () {
  this.render('header', {to: 'header'});
  this.render('safetyInformationPage');
  this.render('footer', {to: 'footer'});
});

Router.route('/map/cherating', function () {
  this.render('header', {to: 'header'});
  this.render('cheratingBeachViewPage');
  this.render('footer', {to: 'footer'});
});

Router.route('home', function () {
  this.render('header', {to: 'header'});
  this.render('home');
  this.render('footer', {to: 'footer'});
});
Router.route('safty', function () {
  this.render('header', {to: 'header'});
  this.render('fullDetails');
  this.render('footer', {to: 'footer'});
});
Router.route('locations', function () {
  this.render('header', {to: 'header'});
  this.render('adminDetailPage');
  this.render('footer', {to: 'footer'});
});

Router.route('knowMyRight', function () {
  this.render('header', {to: 'header'});
  this.render('knowMyRight');
  this.render('footer', {to: 'footer'});
});

Router.route('styles', function() {
    this.render('header', {to: 'header'});
    this.render('styles');
    this.render('footer', {to: 'footer'});
});
