var initialPassword = "";
var global_sound_index = -1;
all_sound_names = ['bitch','chill','shut-up','scream','scream2','orange','quiet','loud','shut-up-howard','be-safe','room','addison','vroom','lucky-goose','howard','voicemail','ah-man','damn','thats-not','okay'];
all_author_names= ['Paul','Paul','Paul','Paul','Paul','Paul','Howard','Howard','Howard','Howard','Carson','Carson','Carson','Carson','Carson','Carson','Holly','Holly','Holly','Holly'];

function checkIfParams(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    if(urlParams.has('s')){
        var sound = urlParams.get('s');
        global_sound_index = sound;
        displayAutoBtn();
        //console.log(sound);
        //playSound(all_sound_names[sound]);
    } else {
        console.log('no params');
    }
}

function displayAutoBtn(){
    document.getElementById('number-grid').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('passcode-display').style.display = 'none';
    document.getElementById('btnContainer').style.display = 'block';
}

function playSoundAuto(){
    console.log(all_sound_names[global_sound_index]);
    playSound(all_sound_names[global_sound_index]);
}

function displayURLs(){
    document.getElementById('boxes-section').style.display = 'none';
    document.getElementById('url-table').style.display = 'block';
}

function send0(){
    initialPassword = initialPassword + "0";
    checkLogin();
}

function send1(){
    initialPassword = initialPassword + "1";
    checkLogin();
}

function send2(){
    initialPassword = initialPassword + "2";
    checkLogin();
}

function send3(){
    initialPassword = initialPassword + "3";
    checkLogin();
}

function send4(){
    initialPassword = initialPassword + "4";
    checkLogin();
}

function send5(){
    initialPassword = initialPassword + "5";
    checkLogin();
}

function send6(){
    initialPassword = initialPassword + "6";
    checkLogin();
}

function send7(){
    initialPassword = initialPassword + "7";
    checkLogin();
}

function send8(){
    initialPassword = initialPassword + "8";
    checkLogin();
}

function send9(){
    initialPassword = initialPassword + "9";
    checkLogin();
}

function checkLogin(){
    document.getElementById('passcode-display').textContent = initialPassword;
    console.log(initialPassword);
    if(initialPassword == 1937){
        loadSoundboard();
    }
}

function reset(){
    initialPassword = '';
    checkLogin();
}

function loadSoundboard(){
    console.log('soundboard loaded');
    document.getElementById('number-grid').style.display = 'none';
    document.getElementById('passcode-display').style.display = 'none';
    document.getElementById('boxes-section').style.display = 'block';
    document.getElementById('reset').style.display = 'none';
}

function getPerson(person){
    if(person == "paul"){
        loadFinal('paul');
    } else if (person == "howard"){
        loadFinal('howard');
    } else if (person == "carson"){
        loadFinal('carson');
    } else if (person == "holly"){
        loadFinal('holly');
    } else if (person == "addison"){
        loadFinal('addison');
    } else if (person == "owen"){
        loadFinal('owen');
    } else if (person == "all"){
        loadFinal('all');
    } else if (person == "random"){
        playRandomSequence();
    }
}

function loadFinal(person){
    if(person == "paul"){
        document.getElementById('boxes-section').style.display = 'none';
        document.getElementById('paul-board').style.display = 'block';
    } else if (person == "howard"){
        document.getElementById('boxes-section').style.display = 'none';
        document.getElementById('howard-board').style.display = 'block';
    } else if (person == "carson"){
        document.getElementById('boxes-section').style.display = 'none';
        document.getElementById('carson-board').style.display = 'block';
    } else if (person == "holly"){
        document.getElementById('boxes-section').style.display = 'none';
        document.getElementById('holly-board').style.display = 'block';
    } else if (person == "addison"){
        document.getElementById('boxes-section').style.display = 'none';
        document.getElementById('addison-board').style.display = 'block';
    } else if (person == "owen"){
        document.getElementById('boxes-section').style.display = 'none';
        document.getElementById('owen-board').style.display = 'block';
    } else if (person == "all"){
        document.getElementById('boxes-section').style.display = 'none';
        document.getElementById('sound-grid').style.display = 'block';
        document.getElementById('all').style.display = 'block';
    }
}

function playSound(sound){
    var audio = new Audio(sound + '.mp3');
    audio.play();
}

function goBack(){
    document.getElementById('boxes-section').style.display = 'block';
    document.getElementById('paul-board').style.display = 'none';
    document.getElementById('howard-board').style.display = 'none';
    document.getElementById('carson-board').style.display = 'none';
    document.getElementById('holly-board').style.display = 'none';
    document.getElementById('owen-board').style.display = 'none';
    document.getElementById('random-button').style.display = 'none';
    console.log('hidden');
}

function goBack_Everyone(){
    document.getElementById('boxes-section').style.display = 'block';
    document.getElementById('sound-grid').style.display = 'none';
    document.getElementById('all').style.display = 'none';
}

function displayRandom(){
    document.getElementById('boxes-section').style.display = 'none';
    document.getElementById('random-button').style.display = 'block';
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomSound(){
    var num = getRandomInt(all_sound_names.length-1);
    playSound(all_sound_names[num]);
    var display = "'" + all_sound_names[num] + "'" + ' by: ' + all_author_names[num];
    display = display.toUpperCase();
    document.getElementById('author').textContent = display;
}
