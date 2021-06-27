var synth = window.speechSynthesis;

let inputTxt = 'Please select a topic';
let countUpText = '';


let totalMorals = 0;
let totalPolitics = 0;
let totalBedroom = 0;
let totalCurrentNews = 0;

let totalDoneMorals = 0;
let totalDonePolitics = 0;
let totalDoneBedroom = 0;
let totalDoneCurrentNews = 0;

let found = false;
let currIdx = -1;

let questions = [
    {"type": "morals", "text": "Morals one", "used": false},
    {"type": "bedroom", "text": "bedroom question 1", "used": false},

    {"type": "politics", "text": "politics question 1", "used": false},
    {"type": "morals", "text": "Morals two", "used": false},
    {"type": "politics", "text": "politics question 3", "used": false},
    {"type": "bedroom", "text": "bedroom question two", "used": false},
    {"type": "politics", "text": "politics question 2", "used": false},

    {"type": "bedroom", "text": "bedroom question 3", "used": false},
    {"type": "morals", "text": "Morals three", "used": false},
    {"type": "bedroom", "text": "bedroom question 4", "used": false},
    {"type": "politics", "text": "politics question 4", "used": false},
    {"type": "bedroom", "text": "bedroom question 5", "used": false},

    {"type": "bedroom", "text": "bedroom question 6", "used": false},
    {"type": "current news", "text": "current news question", "used": false},

    {"type": "bedroom", "text": "bedroom question 7", "used": false},
    {"type": "bedroom", "text": "bedroom question 8", "used": false},
    {"type": "politics", "text": "politics question 5", "used": false},

    {"type": "bedroom", "text": "bedroom question 9", "used": false},
    {"type": "morals", "text": "Morals four", "used": false},

    {"type": "bedroom", "text": "bedroom question 10", "used": false},

];

function speak( type ){ // type === 'random', 'politics', 'morals', 'bedroom', 'current news', 'repeat'
    if (type !== 'repeat') {
        let startingNum = Math.floor(Math.random() * Math.floor(questions.length));
        found = false;

        if (currIdx === -1) {   // If first time in, determine totals for each
            for (let i = 0; i < questions.length; i++) {
                if (questions[i].type === 'morals')
                    totalMorals++;
                else if (questions[i].type === 'politics')
                    totalPolitics++;
                else if (questions[i].type === 'bedroom')
                    totalBedroom++;
                else if (questions[i].type === 'current news')
                    totalCurrentNews++;
            }
        }

        if (!found) {
            for (let i = startingNum; i < questions.length; i++) {
                if (!questions[i].used && (questions[i].type === type || type === 'random')) {
                    found = true;
                    currIdx = i;
                    break;
                }
            }
        }
        if (!found) {   // if not found yet, start from beginning
            for (let i = 0; i < startingNum; i++) {
                if (!questions[i].used && (questions[i].type === type || type === 'random')) {
                    found = true;
                    currIdx = i;
                    break;
                }
            }
        }
        if (found) {
            inputTxt = questions[currIdx].text;
            questions[currIdx].used = true;

            if (questions[currIdx].type === 'morals') {
                totalDoneMorals++;
                countUpText = "Morals: " + totalDoneMorals + " out of " + totalMorals;
            } else if (questions[currIdx].type === 'politics') {
                totalDonePolitics++;
                countUpText = "Politics: " + totalDonePolitics + " out of " + totalPolitics;
            } else if (questions[currIdx].type === 'bedroom') {
                totalDoneBedroom++;
                countUpText = "Bedroom: " + totalDoneBedroom + " out of " + totalBedroom;
            } else if (questions[currIdx].type === 'current news') {
                totalDoneCurrentNews++;
                countUpText = "Current News: " + totalDoneCurrentNews + " out of " + totalCurrentNews;
            } else {
                countUpText = "";
            }
        } else {
            if (type === 'random')
                inputTxt = "All questions have been asked";
            else
                inputTxt = "All questions for " + type + " have been asked";
            countUpText = "";
        }

        document.getElementById('myText').innerHTML = inputTxt;
        document.getElementById('countUpText').innerHTML = countUpText;
    }

    if (synth.speaking) {
	    synth.cancel();
    }
    if (inputTxt !== '') {
        var utterThis = new SpeechSynthesisUtterance(inputTxt);
        utterThis.onend = function (event) {
    };
    utterThis.onerror = function (event) {
    };
    synth.speak(utterThis);
  }
}



