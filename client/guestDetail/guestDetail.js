import styles from './guestDetail.css';

if (Meteor.isClient) {
    Template.guestDetail.onRendered(function() {
        Session.set('title', 'Guest');
    });

    Template.guestDetail.helpers({
        styles: styles,
    });

    Template.guestDetail.events({
        'submit form': function (event) {
            event.preventDefault();
            // var form = $(event.target);
            // var email = form.find('[name=email]').val();
            // var fname = form.find('[name=fname]').val();
            // var lname = form.find('[name=lname]').val();
            // var phone = form.find('[name=phoneNumber]').val();
            // var qualification = form.find('[name=cbxQualificationForSignup]').val();
            // var password = (phone && !!(+phone.replace(/ /g,''))) ? phone.substr(phone.length-4): "";
            // const userDetail = {
            //     email: email,
            //     fname: fname,
            //     phone: phone,
            //     qualification: qualification,
            //     firstName: fname,
            //     lastName: lname
            // };

            // console.log("Email & password: ",fname, lname,phone,qualification, email, password);
            // Accounts.createUser({
            //     email: email,
            //     password: password
            // }, function (error) {
            //     if (error) {
            //         console.log(error.reason); // Output error if registration fails
            //     } else {
            //         //login
            //         Meteor.loginWithPassword(email, password, function (error) {
            //             if (error) {
            //                 console.log(error.reason);
            //             } else {
            //                 userDetail.userId = Meteor.userId();
            //                 Meteor.call('insertToUser_data', userDetail, function (error, result) {
            //                     if (error) {
            //                         console.log(error);
            //                     }
            //                 });
            //             }
            //         });
            //     }
            // });
            //Router.go('login');
        }
    });
}
