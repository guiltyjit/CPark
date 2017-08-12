
import styles from './ownerDetails.css';

Template.ownerDetails.onRendered(function () {
    Session.set('title', 'Owner Details');
  });

  Template.ownerDetails.helpers({
    styles: styles
});