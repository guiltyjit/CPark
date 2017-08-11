function openMenu() {
    var fullScreenContainer = document.querySelector('.js-menu-container');
    if (!fullScreenContainer.classList.contains('is-open')) {
        fullScreenContainer.classList.add('is-open');
    }
}
function closeMenu() {
    var fullScreenContainer = document.querySelector('.js-menu-container');
    if(fullScreenContainer.classList.contains('is-open')) {
        fullScreenContainer.classList.remove('is-open');
    }
}

document.querySelector(".js-menu-button").addEventListener("click", openMenu);
document.querySelector(".js-menu-close").addEventListener("click", closeMenu);

var managementMockData = [
    {
        "username": "Charles",
        "ownerUnit": "A-1-2",
        "slot": [
            {
                "carPlate": "ABC1234"
            },
            {
                "carPlate": "BCD4444"
            }
        ]
    },
    {
        "username": "JunKit",
        "ownerUnit": "A-1-3",
        "slot": [
            {
                "location":"block a, 100",
                "carPlate": "AED9999",
                "lastParkIn": "5/8/2018 1:30pm"
            },
            {
                "location":"block a, 100",
                "carPlate": "ABC1234",
                "lastParkIn": "1/8/2018 11:30pm",
                "guest": "Ah Lian"
            }
        ]
    }
];

document.getElementById('pictureUpload').addEventListener('click', notifyUser);
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
function notifyUser(event) {
    var title;
    var options;

    var notificationEvents = ['onclick', 'onshow', 'onerror', 'onclose'];

    event.preventDefault();

    title = 'Car plate ABC 1234 owner arrived';
    options = {
        body: 'Your guest car plate owner\'s ABC34 s at guardhouse now',
        tag: 'preset',
        icon: 'http://www.audero.it/favicon.ico'
    };


    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("Hi there!");
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification("Hi there!");
            }
        });
    }
}
