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

Router.route('/rentPage', function () {
  this.render('header', {to: 'header'});
  this.render('rentPage');
  this.render('footer', {to: 'footer'});
});

Router.route('home', function () {
  this.render('header', {to: 'header'});
  this.render('home');
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
