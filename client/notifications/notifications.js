// import styles from './notifications.css';
function spawnNotification() {
    title = 'Car plate ABC 1234 owner arrived';
    options = {
        body: 'Your guest car plate owner\'s ABC34 s at guardhouse now',
        tag: 'preset',
        icon: 'http://www.audero.it/favicon.ico'
    };
    var options = {
        body: options.body,
        icon: options.icon
    };
    var n = new Notification(title,options);
}

if (Meteor.isClient) {
    
    Template.notifications.onRendered(function () {
        Session.set('title', 'Notifications');
    });
    
    Template.notifications.events({
        'click #notify': function(evt) {
            evt.preventDefault();
            console.log('car plate is ABC 1234');
            spawnNotification();
        }
    })
}