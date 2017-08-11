import styles from './story.css';

var stories = [
    { id: 0, line: "Use earphone to optimize the experience" },
    { id: 1, line: "Chinh, Vietnamese, 24" },
    { id: 2, line: "The boat was rocking so hard that Chinh jerked awake. It was dark. He couldn’t see anything but he could hear the breathing sound of humans around him. " },
    { id: 3, line: "In a far corner, he could even hear a wheezing sound that looks like it belonged to an elderly man." },
    { id: 4, line: "“Where am I?”" },
    { id: 5, line: "He was disoriented. While he slowly regained his sense, flashbacks of memories came back to him. He was on a boat heading to Malaysia." },
    { id: 6, line: "“Yes, I left my small town in Vietnam because mother was really sick and poor Phuong.. my cute baby sister what would happened to her?”" },
    { id: 7, line: "“No! Chinh you must be strong; your family needs you.” He tried hard to shake that dreadful feeling off." },
    { id: 8, line: "“Thank god, Danh my old friend from my village told me about this construction job in Malaysia. Danh already bought a land and building his own house in the village just only one year working in Malaysia." },
    { id: 9, line: "Soon, I will be able to give mother and Phuong a better life, ” Chinh thought to himself." },
    { id: 10, line: "While Chinh was lost in his own thoughts, there was a commotion among the others. A tall silhouette had appeared demanding them to hand over their passports for a checkpoint ahead." },
    { id: 11, line: "That deep voice continued on that he will be keeping their passport from this point onwards and will only get back their passport when their contracts with their employers have ended." },
    { id: 12, line: "Someone protested and the man sneered, “This is how things work here, if you don’t like it, you can leave now and pay us the money for your travels here.”" },
    { id: 13, line: "The crowd went silent. Fear shot through Chinh. “I can’t leave now, how would Mama and Phuong survive?”" },
     { id: 14, line: "Beware of every jobs you're going to apply. Human trafficking is real. Don't be a victim. Protect your family, friends and community from scams."}
];

var storySessionDone = false;

Tracker.autorun(function () {
    var sessionVal = Session.get("userProfileDone");
    if (sessionVal === true) {
        Session.set("userProfileDone", false);
        storyTeller();
    }

});

Template.story.helpers({
    styles: styles,
    stories: function () {
        return stories;
    }
});

Template.story.events({
    "click button": function (e) {
        e.preventDefault();

    }
});

function storyTeller() {
    $("._client_story__story__main").css("visibility", "visible");
    console.log("storytelling");
    displayStory(0);
}

function displayStory(id){
    if(id > stories.length-1){
        storySessionDone = true;
        displayDecision();
        return;
    }
    let target = $("#"+id);
    let strLen = (target.text()).length;
    let nextChange = strLen < 30? strLen * 120 : strLen * 65;
    target.addClass("fadeIn");
    target.css("display","block");
    window.setTimeout(function(){
        removeStory(id);
    }, nextChange);
}

function removeStory(id){
    let target = $("#"+id);
    target.removeClass("fadeIn");
    target.addClass("fadeOut");
    window.setTimeout(function(){
        target.css("display", "none");
        displayStory(id+1);
    }, 500);
}

function displayDecision(){
    if(storySessionDone){
        var removeID = stories.length -1;
        $("#"+removeID).css("display","none");
        window.setTimeout(function(){
            $('._client_story__story__userDecision').css("display","block");
        }, 1000);
        
    }
    
}

