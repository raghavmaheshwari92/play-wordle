const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

const WORDS = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIKE', 'ALIVE', 'ALLOW', 'ALONE',
    'ALONG', 'ALTER', 'ANGEL', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE', 'APPLY', 'ARENA',
    'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AVOID', 'AWARD', 'AWARE', 'BADLY', 'BAKER',
    'BASES', 'BASIC', 'BASIN', 'BEACH', 'BEGAN', 'BEING', 'BELOW', 'BENCH', 'BILLY', 'BIRTH',
    'BLACK', 'BLAME', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD', 'BOOST', 'BOOTH', 'BOUND', 'BRAIN',
    'BRAND', 'BREAD', 'BREAK', 'BREED', 'BRIEF', 'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD',
    'BUILT', 'BUYER', 'CABLE', 'CALIF', 'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHAOS',
    'CHARM', 'CHART', 'CHASE', 'CHEAP', 'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE',
    'CIVIL', 'CLAIM', 'CLASS', 'CLEAN', 'CLEAR', 'CLICK', 'CLIFF', 'CLIMB', 'CLOCK', 'CLOSE',
    'CLOUD', 'COACH', 'COAST', 'COULD', 'COUNT', 'COURT', 'COVER', 'CRAFT', 'CRASH', 'CRAZY',
    'CREAM', 'CRIME', 'CRISP', 'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CURVE', 'CYCLE', 'DAILY',
    'DANCE', 'DATED', 'DEALT', 'DEATH', 'DEBUT', 'DELAY', 'DELTA', 'DENSE', 'DEPOT', 'DEPTH',
    'DOING', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA', 'DRANK', 'DRAWN', 'DREAM', 'DRESS', 'DRIED',
    'DRILL', 'DRINK', 'DRIVE', 'DROVE', 'DYING', 'EAGER', 'EARLY', 'EARTH', 'EIGHT', 'EIGHT',
    'ELITE', 'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY',
    'EXACT', 'EXIST', 'EXTRA', 'FAITH', 'FALSE', 'FAULT', 'FENCE', 'FIBER', 'FIELD', 'FIERY',
    'FIFTH', 'FIFTY', 'FIGHT', 'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET', 'FLIGHT', 'FLOAT',
    'FLOOD', 'FLOOR', 'FLOWN', 'FLUID', 'FLUNG', 'FOCAL', 'FOCUS', 'FORCE', 'FORTH', 'FORTY',
    'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH', 'FRONT', 'FRUIT', 'FULLY', 'FUNNY',
    'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GOING', 'GRACE', 'GRADE', 'GRAIN', 'GRAND', 'GRANT',
    'GRAPE', 'GRAPH', 'GRASP', 'GRASS', 'GRAVE', 'GREAT', 'GREEN', 'GRIND', 'GROSS', 'GROUP',
    'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'GUILT', 'HABIT', 'HAPPY', 'HARSH', 'HASTE',
    'HEART', 'HEAVY', 'HEDGE', 'HELLO', 'HENRY', 'HENCE', 'HINGE', 'HIRED', 'HOBBY', 'HOIST',
    'HORSE', 'HOTEL', 'HOURS', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'IMPLY', 'INDEX', 'INNER',
    'INPUT', 'INTER', 'INTRO', 'ISSUE', 'JOINT', 'JUDGE', 'KNOWN', 'LABEL', 'LARGE', 'LASER',
    'LATER', 'LAUGH', 'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEMON', 'LEVEL',
    'LEVER', 'LEWIS', 'LIGHT', 'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOGIC', 'LOOSE', 'LOWER',
    'LUCKY', 'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MARIA', 'MATCH', 'MAYBE',
    'MAYOR', 'MEANT', 'MEDIA', 'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MONEY',
    'MONTH', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVED', 'MUSIC', 'NEEDS', 'NEVER',
    'NEWLY', 'NIGHT', 'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'OCCUR', 'OCEAN', 'OFFER',
    'OFTEN', 'ORDER', 'OTHER', 'OUGHT', 'OUTER', 'OWNER', 'PAINT', 'PANEL', 'PAPER', 'PARIS',
    'PARTY', 'PEACE', 'PETER', 'PHASE', 'PHONE', 'PHOTO', 'PIANO', 'PIECE', 'PILOT', 'PITCH',
    'PLACE', 'PLAIN', 'PLANE', 'PLANT', 'PLATE', 'PLAZA', 'POINT', 'POUND', 'POWER', 'PRESS',
    'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE', 'PROOF', 'PROUD', 'PROVE', 'QUEEN',
    'QUICK', 'QUIET', 'QUITE', 'RADIO', 'RAISE', 'RANGE', 'RAPID', 'RARELY', 'RATIO', 'REACH',
    'REALM', 'REBEL', 'REFER', 'RELAX', 'REPLY', 'RIDER', 'RIDGE', 'RIFLE', 'RIGHT', 'RIGID',
    'RIVER', 'ROBIN', 'ROCKY', 'ROGER', 'ROMAN', 'ROAST', 'ROUGH', 'ROUND', 'ROUTE', 'ROYAL',
    'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SERVE', 'SEVEN', 'SHALL', 'SHAPE',
    'SHARE', 'SHARP', 'SHEAR', 'SHEER', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE', 'SHIRT',
    'SHOCK', 'SHOOT', 'SHORE', 'SHORT', 'SHOWN', 'SIGHT', 'SILLY', 'SIMON', 'SINCE', 'SIXTH',
    'SIXTY', 'SIZED', 'SKILL', 'SLASH', 'SLEEP', 'SLEPT', 'SLICE', 'SLIDE', 'SLING', 'SLOPE',
    'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SNACK', 'SNAKE', 'SOLID', 'SOLVE', 'SORRY',
    'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPARK', 'SPEAK', 'SPEED', 'SPEND', 'SPENT', 'SPIKE',
    'SPILL', 'SPINE', 'SPLIT', 'SPOKE', 'SPORT', 'SPRAY', 'SQUAD', 'STACK', 'STAFF', 'STAGE',
    'STAKE', 'STAND', 'START', 'STATE', 'STEAK', 'STEAL', 'STEAM', 'STEEL', 'STEEP', 'STEER',
    'STICK', 'STILL', 'STOCK', 'STOIC', 'STONE', 'STOOD', 'STOOL', 'STORE', 'STORM', 'STORY',
    'STOVE', 'STRAP', 'STRIP', 'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER',
    'SURGE', 'SWEAR', 'SWEAT', 'SWEET', 'SWELL', 'SWEPT', 'SWIFT', 'SWING', 'SWIRL', 'SWORD',
    'TABLE', 'TAKEN', 'TASTE', 'TAXES', 'TEACH', 'TEAMS', 'TENTH', 'TERRY', 'TEXAS', 'THANK',
    'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE',
    'THREE', 'THREW', 'THROW', 'THUMB', 'TIGHT', 'TIMER', 'TITLE', 'TODAY', 'TOPIC', 'TOTAL',
    'TOUCH', 'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIL', 'TRAIN', 'TRASH', 'TREAT', 'TREND',
    'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TROOP', 'TRUCK', 'TRULY', 'TRUMP', 'TRUNK',
    'TRUST', 'TRUTH', 'TWICE', 'TWINS', 'UNCLE', 'UNDER', 'UNDUE', 'UNION', 'UNITY', 'UNTIL',
    'UPPER', 'UPSET', 'URBAN', 'USAGE', 'USUAL', 'VALID', 'VALUE', 'VIDEO', 'VIRUS', 'VISIT',
    'VITAL', 'VOCAL', 'VOICE', 'VOTER', 'WAGON', 'WASTE', 'WATCH', 'WATER', 'WEARY', 'WEBER',
    'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE', 'WIDER', 'WOMAN', 'WOMEN',
    'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND', 'WRITE', 'WRONG', 'WROTE',
    'YIELD', 'YOUNG', 'YOURS', 'YOUTH', 'ZEBRA', 'ZONES'
];

let targetWord = '';
let currentRow = 0;
let currentTile = 0;
let isGameOver = false;
let guesses = [];
let timerInterval = null;
let startTime = null;
let elapsedTime = 0;

function initializeGame() {
    targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    currentRow = 0;
    currentTile = 0;
    isGameOver = false;
    guesses = [];

    // Reset timer
    stopTimer();
    startTime = null;
    elapsedTime = 0;
    updateTimerDisplay();

    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    for (let i = 0; i < MAX_GUESSES; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('id', `row-${i}`);

        for (let j = 0; j < WORD_LENGTH; j++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.setAttribute('id', `row-${i}-tile-${j}`);
            row.appendChild(tile);
        }

        gameBoard.appendChild(row);
    }

    clearKeyboardColors();
    showMessage('');
}

function clearKeyboardColors() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.classList.remove('correct', 'present', 'absent');
    });
}

function handleKeyPress(letter) {
    if (isGameOver) return;

    if (letter === 'BACKSPACE') {
        deleteLetter();
    } else if (letter === 'ENTER') {
        submitGuess();
    } else if (currentTile < WORD_LENGTH) {
        addLetter(letter);
    }
}

function addLetter(letter) {
    if (currentTile < WORD_LENGTH && currentRow < MAX_GUESSES) {
        // Start timer on first letter
        if (currentRow === 0 && currentTile === 0 && !startTime) {
            startTimer();
        }

        const tile = document.getElementById(`row-${currentRow}-tile-${currentTile}`);
        tile.textContent = letter;
        tile.classList.add('filled');
        currentTile++;
    }
}

function deleteLetter() {
    if (currentTile > 0) {
        currentTile--;
        const tile = document.getElementById(`row-${currentRow}-tile-${currentTile}`);
        tile.textContent = '';
        tile.classList.remove('filled');
    }
}

async function submitGuess() {
    // Count actual filled tiles
    let filledTiles = 0;
    for (let i = 0; i < WORD_LENGTH; i++) {
        const tile = document.getElementById(`row-${currentRow}-tile-${i}`);
        if (tile && tile.textContent.trim() !== '') {
            filledTiles++;
        }
    }

    if (filledTiles !== WORD_LENGTH) {
        showMessage(`Need 5 letters (have ${filledTiles})`);
        shakeRow();
        return;
    }

    const guess = getCurrentGuess();
    console.log('Guess:', guess, 'Length:', guess.length);

    // Additional check for empty or incomplete guess
    if (!guess || guess.length !== WORD_LENGTH || guess.includes('')) {
        showMessage('Not enough letters');
        shakeRow();
        return;
    }

    // Check if word is valid using dictionary API
    showMessage('Checking...');
    const isValid = await checkWordValidity(guess);

    if (!isValid) {
        showMessage('Not in word list');
        shakeRow();
        return;
    }

    // Clear the checking message
    showMessage('');

    const result = checkGuess(guess);
    guesses.push(guess);
    updateBoard(result);
    updateKeyboard(guess, result);

    if (guess === targetWord) {
        isGameOver = true;
        showMessage('Genius!');
        setTimeout(() => {
            if (currentRow === 0) showMessage('Genius!');
            else if (currentRow === 1) showMessage('Magnificent!');
            else if (currentRow === 2) showMessage('Impressive!');
            else if (currentRow === 3) showMessage('Splendid!');
            else if (currentRow === 4) showMessage('Great!');
            else showMessage('Phew!');
        }, 500);
        stopTimer();
        saveGameToHistory(true);
    } else if (currentRow === MAX_GUESSES - 1) {
        isGameOver = true;
        showMessage(targetWord);
        stopTimer();
        saveGameToHistory(false);
    } else {
        currentRow++;
        currentTile = 0;
    }
}

function getCurrentGuess() {
    let guess = '';
    for (let i = 0; i < WORD_LENGTH; i++) {
        const tile = document.getElementById(`row-${currentRow}-tile-${i}`);
        guess += tile.textContent;
    }
    return guess;
}

function checkGuess(guess) {
    const result = [];
    const targetArray = targetWord.split('');
    const guessArray = guess.split('');

    for (let i = 0; i < WORD_LENGTH; i++) {
        if (guessArray[i] === targetArray[i]) {
            result[i] = 'correct';
            targetArray[i] = null;
        }
    }

    for (let i = 0; i < WORD_LENGTH; i++) {
        if (result[i]) continue;

        const index = targetArray.indexOf(guessArray[i]);
        if (index > -1) {
            result[i] = 'present';
            targetArray[index] = null;
        } else {
            result[i] = 'absent';
        }
    }

    return result;
}

function updateBoard(result) {
    for (let i = 0; i < WORD_LENGTH; i++) {
        const tile = document.getElementById(`row-${currentRow}-tile-${i}`);
        setTimeout(() => {
            tile.classList.add(result[i]);
        }, i * 100);
    }
}

function updateKeyboard(guess, result) {
    for (let i = 0; i < WORD_LENGTH; i++) {
        const letter = guess[i];
        const key = document.querySelector(`[data-key="${letter}"]`);

        setTimeout(() => {
            if (result[i] === 'correct') {
                key.classList.remove('present', 'absent');
                key.classList.add('correct');
            } else if (result[i] === 'present' && !key.classList.contains('correct')) {
                key.classList.remove('absent');
                key.classList.add('present');
            } else if (result[i] === 'absent' && !key.classList.contains('correct') && !key.classList.contains('present')) {
                key.classList.add('absent');
            }
        }, WORD_LENGTH * 100);
    }
}

function shakeRow() {
    const row = document.getElementById(`row-${currentRow}`);
    row.classList.add('shake');
    setTimeout(() => {
        row.classList.remove('shake');
    }, 500);
}

function showMessage(text) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
}

async function checkWordValidity(word) {
    // First check if it's in our common words list (for offline support)
    if (WORDS.includes(word)) {
        return true;
    }

    // Try to validate using the Free Dictionary API
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);

        if (response.ok) {
            const data = await response.json();
            // If we get a valid response, it's a real word
            return data && data.length > 0;
        } else if (response.status === 404) {
            // Word not found in dictionary
            return false;
        }
    } catch (error) {
        // If API fails, fall back to checking if it's alphabetic
        // This allows the game to continue working offline
        console.log('Dictionary API unavailable, using fallback');
        return /^[A-Z]{5}$/.test(word);
    }

    return false;
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimerDisplay, 100);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    if (startTime) {
        elapsedTime = Date.now() - startTime;
    }
}

function updateTimerDisplay() {
    if (!startTime) {
        document.getElementById('timer').textContent = '00:00';
        return;
    }

    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer').textContent = formattedTime;
}

function saveGameToHistory(won) {
    const gameData = {
        date: new Date().toISOString(),
        word: targetWord,
        guesses: guesses,
        attempts: guesses.length,
        won: won,
        time: elapsedTime
    };

    let history = JSON.parse(localStorage.getItem('wordleHistory')) || [];
    history.unshift(gameData);

    if (history.length > 100) {
        history = history.slice(0, 100);
    }

    localStorage.setItem('wordleHistory', JSON.stringify(history));
    updateStatistics();
}

function updateStatistics() {
    const history = JSON.parse(localStorage.getItem('wordleHistory')) || [];

    const stats = {
        gamesPlayed: history.length,
        gamesWon: history.filter(game => game.won).length,
        currentStreak: 0,
        maxStreak: 0,
        guessDistribution: [0, 0, 0, 0, 0, 0]
    };

    let currentStreak = 0;
    for (let i = 0; i < history.length; i++) {
        if (history[i].won) {
            currentStreak++;
            stats.guessDistribution[history[i].attempts - 1]++;
        } else {
            break;
        }
    }
    stats.currentStreak = currentStreak;

    let maxStreak = 0;
    let tempStreak = 0;
    for (const game of history) {
        if (game.won) {
            tempStreak++;
            maxStreak = Math.max(maxStreak, tempStreak);
        } else {
            tempStreak = 0;
        }
    }
    stats.maxStreak = maxStreak;

    if (history.length > 0) {
        stats.winPercentage = Math.round((stats.gamesWon / stats.gamesPlayed) * 100);
    } else {
        stats.winPercentage = 0;
    }

    localStorage.setItem('wordleStatistics', JSON.stringify(stats));
}

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleKeyPress('ENTER');
        } else if (e.key === 'Backspace') {
            handleKeyPress('BACKSPACE');
        } else if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
            handleKeyPress(e.key.toUpperCase());
        }
    });

    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('click', () => {
            handleKeyPress(key.getAttribute('data-key'));
        });
    });

    document.getElementById('new-game').addEventListener('click', initializeGame);
});