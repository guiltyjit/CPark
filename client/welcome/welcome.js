import styles from './welcome.css';

Template.welcome.helpers({
    styles: styles
});

Template.welcome.onRendered(function () {
     Session.set('title', 'Welcome');
});