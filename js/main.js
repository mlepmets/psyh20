var words = {
    suhtlemine:
        'Teabe edastamine mõtete, sõnumite või teabe vahetamise kaudu, näiteks kõne, visuaalide, signaalide, kirjutamise või käitumisega.',
    suhtlemisoskus: 'Toimimisviis, mis aitab eesmärke saavutada.',
    'sotsiaalsed oskused':
        'Hõlmavad sotsiaalsete märkide lugemist ja tõlgendamist, sisekõnet, probleemide lahendamiseks vajalikku analüüsioskust, teiste inimeste probleemide mõistmist, käitumisnormidest arusaamist, positiivset ellusuhtumist ja eneseteadlikkust. (mitmuses)',
    'emotsionaalsed oskused':
        'Oskuste kompetents, millesse kuuluvad järgmised osaoskused: tunnete äratundmine, tunnete väljendumine, tunnete juhtimine, vahetegemine tunnete ja käitumiste vahel. (mitmuses)',
    transaktsioonianalüüs:
        'Efektiivne suhtlemine eksisteerib kahe inimese vahel siis kui vastuvõtja tõlgendab ja mõistab sõnumit samal kujul nagu saatja mõtleb. Just oskusest kuulata sõltub, kes keda mõjutab, sest ainult nii saab teada, mida teine tegelikult tahab.',
    suhtlemistasandid: 'Berne’i järgi suhtlusstiili jagunemine.',
    alistuv:
        'Suhtleja ei väljenda oma tundeid, mõtteid ja soove otse või hoiab neid üldse tagasi. Sageli omane vaikiv kuulamine, ebalemine. Kuna suhtleja ei ütle välja, mida ta mõtleb, jääb mulje, et suhtluspartner ei mõtle öeldut tõsiselt või ei ole endas kindel. (McGay järgi suhtlusstiil)',
    agressiivne:
        'Suhtleja avaldab oma mõtteid ja arvamusi arvestamata suhtluspartneri vajadusi, õigusi ja tundeid. Kui suhtluspartner jääb oma seisukohtade juurde, võib järgneda kõvahäälne sõim, iroonia. Kasutatakse „sina“ sõnumeid, mis tekitab suhtlustõkkeid (sildistamine, süüdistamine, moraalilugemine jt.) (McGay järgi suhtlusstiil)',
    kehtestav:
        'Suhtleja ütleb oma mõtted ja soovid otse välja. Seisab oma õiguste eest aga arvestab suhtluspartneri vajaduste, arvamuse ja õigustega. Eeldab aktiivse kuulamise olemasolu. Ollakse avatudläbirääkimistele ja kompromissidele kuid mitte oma õigusi tagaplaanile jättes. Selline suhtlusstiil eeldab enesekindlust ja empaatiat. (McGay järgi suhtlusstiil)',
    'aktiivne kuulamine':
        'Eduka suhtlemise osa, mis toetab kuuldut nii kehakeelega (mittesõnaline) kui ka sõnaliselt, andes tagasisidet, et saame aru kuuldud teatest või infost.',
    'konkureeriv kuulamine':
        'Leiab aset kui me oleme rohkem huvitatud oma enese mõtte või vaate edastamisest kui teise inimese mõtte mõistmisest või uurimisest.',
    'passiivne kuulamine': 'Selline kuulamisviis eeldab, et me kuulame ja mõtleme kaasa aga ei näita seda välja.',
    kamandamine: 'Suhtlemistõke',
    'moraali lugemine': 'Suhtlemistõke',
    kehtestamine: 'Tähendab kindlat enese huvide eest seisvat ning samas suhtluspartnerit arvestavat käitumisviisi.',
    'kognitiivsed oskused':
        'hõlmavad sotsiaalsete märkide lugemist ja tõlgendamist, sisekõnet, probleemide lahendamiseks vajalikku analüüsioskust, teiste inimeste probleemide mõistmist, käitumisnormidest arusaamist, positiivset ellusuhtumist ja eneseteadlikkust',
    sobitumine: 'Käitumine teistele vastuvõetavalt.',
    emotsioon:
        'Organismi seisund, millega kaasnevad märgatavad kehalised muutused (hingamises, pulsis, näo verevarustuses jne).',
    kogemus: 'Teadmine või oskus millegi tegemisest, nägemisest või kogemisest.',
    uskumus: 'Millegi tõeseks pidamine.',
    käitumine: 'Indiviidi nähtavaid toiminguid. Need võivad olla spontaansed või seotud reageeringutega stiimuleile.',
    'õpitud abitus':
        'Ebameeldivas olukorras enda aitamiseks pingutustest loobumine isegi siis, kui sellest abi oleks, kuna ühes olukorras passiivse ohvri rolli sunnitud indiviid on oma kogemuse üldistanud teistele olukordadele.',
    hoiak: 'Suhteliselt püsiv õpitud eelsoodumus toimida teatud kindlal viisil objekti suhtes.',
    'klišeed ja stampsõnad': 'Kommunikatsioonitasand.',
    'faktid ja tegelikkus': 'Kommunikatsioonitasand.',
    'mõtted ja uskumused': 'Kommunikatsioonitasand.',
    'tunded ja emotsioonid': 'Kommunikatsioonitasand.'
};

var keys = Object.keys(words);
var currentWord = '';
var currentGuessedLetters = [];
var currentWordGuessCount = 0;
var wordGuessed = false;
var guessedWords = [];

// Get random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Get random word
function getRandomWord(keys) {
    var randomInteger = getRandomInt(0, keys.length);
    return keys[randomInteger];
}

// Display word

function displayWord(word) {
    var wordDiv = $('#word');
    wordDiv.empty();
    var splitWord = word.split('');
    splitWord.forEach(function(letter) {
        if (currentGuessedLetters.indexOf(letter) != -1 || letter.charCodeAt(0) == 32) {
            wordDiv.append('<span class="sple font-weight-bold px-1">' + letter + '</span>');
        } else {
            if (letter.charCodeAt(0) == 32) {
                wordDiv.append('<span class="sple font-weight-bold px-1">' + ' ff ' + '</span>');
            } else {
                wordDiv.append('<span class="sple font-weight-bold px-1">_</span>');
            }
        }
    });
}

function displayDescription(word) {
    var descDiv = $('#desc');
    descDiv.append('<p>' + words[word] + '</p>');
}

// https://stackoverflow.com/a/3410557
function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0,
        index,
        indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

function setNewWord() {
    currentGuessedLetters = [];
    currentWordGuessCount = 0;
    wordGuessed = false;
    $('#guess-count').text(currentWordGuessCount);
    $('#feedback-msg').text('');
    $('#desc').text('');
    $('#letter-submit, #word-submit').removeAttr('disabled');
    // Leht laeb, paneme yhe sona valmis
    currentWord = getRandomWord(keys);
    // toodelda sona
    displayWord(currentWord);
    displayDescription(currentWord);
    $('#new-word-submit')
        .addClass('btn-secondary')
        .removeClass('btn-danger');
}

// enter key plugin
$.fn.enterKey = function(fnc) {
    return this.each(function() {
        $(this).keypress(function(ev) {
            var keycode = ev.keyCode ? ev.keyCode : ev.which;
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        });
    });
};

// Set word on page load
setNewWord();

$('#letter-submit').on('click', function(event) {
    event.preventDefault();
    var letterInput = $('#letter-input');
    var letterInputValue = letterInput.val().toLowerCase();
    var messageBlock = $('#feedback-msg');
    var guessCount = $('#guess-count');
    var indicesCount = getIndicesOf(letterInputValue, currentWord, false).length;

    $('#letter-submit, #word-submit').prop('disabled', 'true');
    if (
        currentWordGuessCount < 5 &&
        letterInput.val().length == 1 &&
        letterInput.val().charCodeAt(0) != 32 &&
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(letterInputValue) == -1 &&
        currentWord.split('').indexOf(letterInputValue) != -1 &&
        currentGuessedLetters.indexOf(letterInputValue) == -1
    ) {
        for (i = 0; i < indicesCount; i++) {
            currentGuessedLetters.push(letterInputValue);
        }
        if (currentWord.length == currentGuessedLetters.length) {
            messageBlock.text('Õige! Arvasid sõna ära :)');
            wordGuessed = true;
            $('#new-word-submit')
                .removeClass('btn-secondary')
                .addClass('btn-danger');
        } else {
            messageBlock.text('Õige! Leiti ' + indicesCount + ' ' + letterInputValue + ' tähte.');
        }

        messageBlock.removeClass('text-danger');
        messageBlock.addClass('text-success');
    } else {
        currentWordGuessCount += 1;
        guessCount.text(currentWordGuessCount);
        if (currentWordGuessCount == 5) {
            messageBlock.text('Eksisid 5 korda, sõna arvamine ebaõnnestus. ');
            $('#new-word-submit')
                .removeClass('btn-secondary')
                .addClass('btn-danger');
            currentGuessedLetters = currentWord.split('');
            displayWord(currentWord);
        } else {
            messageBlock.text('Sellist tähte ei leitud.');
        }
        messageBlock.addClass('text-danger');
        messageBlock.removeClass('text-success');
    }
    letterInput.val('');
    displayWord(currentWord);
    if ((!wordGuessed && currentWordGuessCount < 5) || (!wordGuessed && currentWordGuessCount < 5)) {
        $('#letter-submit, #word-submit').removeAttr('disabled');
    }
    letterInput.focus();
});

$('#word-submit').on('click', function(event) {
    event.preventDefault();
    var wordInput = $('#word-input');
    var messageBlock = $('#feedback-msg');
    var guessCount = $('#guess-count');
    var wordInputValue = wordInput.val().toLowerCase();
    var indicesCount = getIndicesOf(wordInputValue, currentWord, false).length;

    $('#letter-submit, #word-submit').prop('disabled', 'true');
    if (wordInputValue == currentWord) {
        wordGuessed = true;
        messageBlock.text('Õige! Arvasid sõna ära :)');
        wordGuessed = true;
        messageBlock.removeClass('text-danger');
        messageBlock.addClass('text-success');
        currentGuessedLetters = currentWord.split('');
        displayWord(currentWord);
        $('#new-word-submit')
            .removeClass('btn-secondary')
            .addClass('btn-danger');
    } else {
        currentWordGuessCount += 1;
        guessCount.text(currentWordGuessCount);
        if (currentWordGuessCount == 5) {
            messageBlock.text('Eksisid 5 korda, sõna arvamine ebaõnnestus. ');
            $('#new-word-submit')
                .removeClass('btn-secondary')
                .addClass('btn-danger');
            currentGuessedLetters = currentWord.split('');
            displayWord(currentWord);
        } else {
            messageBlock.text('See ei ole õige vastus.');
        }

        messageBlock.addClass('text-danger');
        messageBlock.removeClass('text-success');
    }
    wordInput.val('');
    displayWord(currentWord);
    if ((!wordGuessed && currentWordGuessCount < 5) || (!wordGuessed && currentWordGuessCount < 5)) {
        $('#letter-submit, #word-submit').removeAttr('disabled');
    }
    wordInput.focus();
});
$('#new-word-submit').on('click', function(event) {
    event.preventDefault();
    setNewWord();
});

// click button when enter pressed
$('#word-input').enterKey(function() {
    $('#word-submit').click();
});
$('#letter-input').enterKey(function() {
    $('#letter-submit').click();
});
