initialPassword = "";

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
    }
}

function playSound(sound){
    var audio = new Audio(sound + '.mp3');
    audio.play();
}