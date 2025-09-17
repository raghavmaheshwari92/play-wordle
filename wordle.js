const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

// Common words for target selection (curated list)
const TARGET_WORDS = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIKE', 'ALIVE', 'ALLOW', 'ALONE',
    'ALONG', 'ALTER', 'ANGEL', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE', 'APPLY', 'ARENA',
    'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AVOID', 'AWARD', 'AWARE', 'BADLY', 'BAKER',
    'BASES', 'BASIC', 'BASIN', 'BEACH', 'BEGAN', 'BEING', 'BELOW', 'BENCH', 'BIRTH', 'BLACK',
    'BLAME', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD', 'BOOST', 'BOOTH', 'BOUND', 'BRAIN', 'BRAND',
    'BREAD', 'BREAK', 'BREED', 'BRIEF', 'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD', 'BUILT',
    'BUYER', 'CABLE', 'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHAOS', 'CHARM', 'CHART',
    'CHASE', 'CHEAP', 'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE', 'CIVIL', 'CLAIM',
    'CLASS', 'CLEAN', 'CLEAR', 'CLICK', 'CLIFF', 'CLIMB', 'CLOCK', 'CLOSE', 'CLOUD', 'COACH',
    'COAST', 'COULD', 'COUNT', 'COURT', 'COVER', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME',
    'CRISP', 'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CURVE', 'CYCLE', 'DAILY', 'DANCE', 'DATED',
    'DEALT', 'DEATH', 'DEBUT', 'DELAY', 'DELTA', 'DENSE', 'DEPOT', 'DEPTH', 'DOING', 'DOUBT',
    'DOZEN', 'DRAFT', 'DRAMA', 'DRANK', 'DRAWN', 'DREAM', 'DRESS', 'DRIED', 'DRILL', 'DRINK',
    'DRIVE', 'DROVE', 'DYING', 'EAGER', 'EARLY', 'EARTH', 'EIGHT', 'ELITE', 'EMPTY', 'ENEMY',
    'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY', 'EXACT', 'EXIST', 'EXTRA',
    'FAITH', 'FALSE', 'FAULT', 'FENCE', 'FIBER', 'FIELD', 'FIERY', 'FIFTH', 'FIFTY', 'FIGHT',
    'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET', 'FLOAT', 'FLOOD', 'FLOOR', 'FLUID', 'FOCAL',
    'FOCUS', 'FORCE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH',
    'FRONT', 'FRUIT', 'FULLY', 'FUNNY', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GOING', 'GRACE',
    'GRADE', 'GRAIN', 'GRAND', 'GRANT', 'GRAPE', 'GRAPH', 'GRASP', 'GRASS', 'GRAVE', 'GREAT',
    'GREEN', 'GRIND', 'GROSS', 'GROUP', 'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'GUILT',
    'HABIT', 'HAPPY', 'HARSH', 'HASTE', 'HEART', 'HEAVY', 'HEDGE', 'HELLO', 'HENCE', 'HIRED',
    'HOBBY', 'HORSE', 'HOTEL', 'HOURS', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'IMPLY', 'INDEX',
    'INNER', 'INPUT', 'INTER', 'INTRO', 'ISSUE', 'JOINT', 'JUDGE', 'KNOWN', 'LABEL', 'LARGE',
    'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEMON',
    'LEVEL', 'LIGHT', 'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOGIC', 'LOOSE', 'LOWER', 'LUCKY',
    'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MATCH', 'MAYBE', 'MAYOR', 'MEANT',
    'MEDIA', 'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MONEY', 'MONTH', 'MORAL',
    'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVED', 'MUSIC', 'NEEDS', 'NEVER', 'NEWLY', 'NIGHT',
    'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'OCCUR', 'OCEAN', 'OFFER', 'OFTEN', 'ORDER',
    'OTHER', 'OUGHT', 'OUTER', 'OWNER', 'PAINT', 'PANEL', 'PAPER', 'PARTY', 'PEACE', 'PHASE',
    'PHONE', 'PHOTO', 'PIANO', 'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN', 'PLANE', 'PLANT',
    'PLATE', 'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR',
    'PRIZE', 'PROOF', 'PROUD', 'PROVE', 'QUEEN', 'QUICK', 'QUIET', 'QUITE', 'RADIO', 'RAISE',
    'RANGE', 'RAPID', 'RATIO', 'REACH', 'REALM', 'REBEL', 'REFER', 'RELAX', 'REPLY', 'RIDER',
    'RIDGE', 'RIFLE', 'RIGHT', 'RIGID', 'RIVER', 'ROBIN', 'ROCKY', 'ROGER', 'ROMAN', 'ROAST',
    'ROUGH', 'ROUND', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE',
    'SERVE', 'SEVEN', 'SHALL', 'SHAPE', 'SHARE', 'SHARP', 'SHEAR', 'SHEER', 'SHEET', 'SHELF',
    'SHELL', 'SHIFT', 'SHINE', 'SHIRT', 'SHOCK', 'SHOOT', 'SHORE', 'SHORT', 'SHOWN', 'SIGHT',
    'SILLY', 'SIMON', 'SINCE', 'SIXTH', 'SIXTY', 'SIZED', 'SKILL', 'SLASH', 'SLEEP', 'SLEPT',
    'SLICE', 'SLIDE', 'SLING', 'SLOPE', 'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SNACK',
    'SNAKE', 'SOLID', 'SOLVE', 'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPARK', 'SPEAK',
    'SPEED', 'SPEND', 'SPENT', 'SPIKE', 'SPILL', 'SPINE', 'SPLIT', 'SPOKE', 'SPORT', 'SPRAY',
    'SQUAD', 'STACK', 'STAFF', 'STAGE', 'STAKE', 'STAND', 'START', 'STATE', 'STEAK', 'STEAL',
    'STEAM', 'STEEL', 'STEEP', 'STEER', 'STICK', 'STILL', 'STOCK', 'STOIC', 'STONE', 'STOOD',
    'STOOL', 'STORE', 'STORM', 'STORY', 'STOVE', 'STRAP', 'STRIP', 'STUCK', 'STUDY', 'STUFF',
    'STYLE', 'SUGAR', 'SUITE', 'SUPER', 'SURGE', 'SWEAR', 'SWEAT', 'SWEET', 'SWELL', 'SWEPT',
    'SWIFT', 'SWING', 'SWIRL', 'SWORD', 'TABLE', 'TAKEN', 'TASTE', 'TAXES', 'TEACH', 'TEAMS',
    'TENTH', 'TERRY', 'TEXAS', 'THANK', 'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE', 'THICK',
    'THING', 'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW', 'THUMB', 'TIGHT', 'TIMER',
    'TITLE', 'TODAY', 'TOPIC', 'TOTAL', 'TOUCH', 'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIL',
    'TRAIN', 'TRASH', 'TREAT', 'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TROOP',
    'TRUCK', 'TRULY', 'TRUMP', 'TRUNK', 'TRUST', 'TRUTH', 'TWICE', 'TWINS', 'UNCLE', 'UNDER',
    'UNDUE', 'UNION', 'UNITY', 'UNTIL', 'UPPER', 'UPSET', 'URBAN', 'USAGE', 'USUAL', 'VALID',
    'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL', 'VOCAL', 'VOICE', 'VOTER', 'WAGON', 'WASTE',
    'WATCH', 'WATER', 'WEARY', 'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE',
    'WIDER', 'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND',
    'WRITE', 'WRONG', 'WROTE', 'YIELD', 'YOUNG', 'YOURS', 'YOUTH', 'ZEBRA'
];

// Cache for validated words (to avoid repeated API calls)
const validatedWords = new Set();
const invalidWords = new Set();

let targetWord = '';
let currentRow = 0;
let currentTile = 0;
let isGameOver = false;
let guesses = [];
let timerInterval = null;
let startTime = null;
let elapsedTime = 0;

// Multiplayer variables
let isMultiplayerMode = false;
let currentPlayerName = '';
let multiplayerData = null;

// Prevent multiple submissions
let isSubmitting = false;

async function validateWord(word) {
    // Check cache first
    if (validatedWords.has(word)) {
        return true;
    }
    if (invalidWords.has(word)) {
        return false;
    }

    // Check if it's in our target words (common words we know are valid)
    if (TARGET_WORDS.includes(word)) {
        validatedWords.add(word);
        return true;
    }

    // Use the Free Dictionary API
    try {
        showMessage('Checking...');

        // Try the free dictionary API
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);

        if (response.ok) {
            validatedWords.add(word);
            showMessage('');
            return true;
        } else if (response.status === 404) {
            // Try alternate spellings (British/American)
            const alternates = getAlternateSpellings(word);
            for (const alt of alternates) {
                const altResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${alt.toLowerCase()}`);
                if (altResponse.ok) {
                    validatedWords.add(word);
                    showMessage('');
                    return true;
                }
            }

            invalidWords.add(word);
            return false;
        }
    } catch (error) {
        console.log('Dictionary API error:', error);
        // If API is down, check if it's a reasonable word pattern
        // But still reject obviously invalid combinations
        if (/^[A-Z]{5}$/.test(word)) {
            // Check if it has at least one vowel (most English words do)
            if (/[AEIOU]/.test(word)) {
                showMessage('API offline - accepting word');
                return true;
            }
        }
        return false;
    }

    return false;
}

function getAlternateSpellings(word) {
    const alternates = [];

    // Common British/American spelling differences
    if (word === 'TYRES') alternates.push('TIRES');
    if (word === 'TIRES') alternates.push('TYRES');
    if (word.endsWith('OURS')) alternates.push(word.replace(/OURS$/, 'ORS'));
    if (word.endsWith('ORS') && word !== 'DOORS') alternates.push(word.replace(/ORS$/, 'OURS'));
    if (word.endsWith('ISED')) alternates.push(word.replace(/ISED$/, 'IZED'));
    if (word.endsWith('IZED')) alternates.push(word.replace(/IZED$/, 'ISED'));

    return alternates;
}

function initializeGame() {
    // Check if this is multiplayer mode
    checkMultiplayerMode();

    // Set target word based on mode
    if (isMultiplayerMode && currentPlayerName) {
        targetWord = generatePlayerWord(currentPlayerName);
        displayPlayerName();
    } else {
        targetWord = TARGET_WORDS[Math.floor(Math.random() * TARGET_WORDS.length)];
    }

    currentRow = 0;
    currentTile = 0;
    isGameOver = false;
    guesses = [];
    isSubmitting = false;

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
    if (isSubmitting) return; // Prevent multiple submissions

    if (currentTile !== WORD_LENGTH) {
        showMessage('Not enough letters');
        shakeRow();
        return;
    }

    const guess = getCurrentGuess();

    // Check for duplicate words
    if (guesses.includes(guess)) {
        showMessage('Word already used');
        shakeRow();
        isSubmitting = false; // Unlock submissions
        return;
    }

    isSubmitting = true; // Lock submissions

    // Validate the word
    const isValid = await validateWord(guess);

    if (!isValid) {
        showMessage('Not in word list');
        shakeRow();
        isSubmitting = false; // Unlock submissions
        return;
    }

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

        // Show result modal after a brief delay
        setTimeout(() => {
            const timeElapsed = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;
            showResultModal(true, targetWord, timeElapsed, currentRow + 1);
        }, 1500);

        handleMultiplayerGameEnd(true);
    } else if (currentRow === MAX_GUESSES - 1) {
        isGameOver = true;
        showMessage(targetWord);
        stopTimer();
        saveGameToHistory(false);

        // Show result modal after a brief delay
        setTimeout(() => {
            const timeElapsed = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;
            showResultModal(false, targetWord, timeElapsed, MAX_GUESSES);
        }, 1500);

        handleMultiplayerGameEnd(false);
    } else {
        currentRow++;
        currentTile = 0;
    }

    isSubmitting = false; // Unlock submissions after processing
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

    // First pass: mark correct positions
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (guessArray[i] === targetArray[i]) {
            result[i] = 'correct';
            targetArray[i] = null;
        }
    }

    // Second pass: mark present letters
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
    if (messageEl) {
        messageEl.textContent = text;
    }
}

function startTimer() {
    startTime = Date.now();

    // Track start time for multiplayer
    if (isMultiplayerMode && currentPlayerName && multiplayerData) {
        multiplayerData.gameStates[currentPlayerName].startTime = startTime;
        localStorage.setItem('multiplayerGameData', JSON.stringify(multiplayerData));
    }

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
    const timerEl = document.getElementById('timer');
    if (!timerEl) return;

    if (!startTime) {
        timerEl.textContent = '00:00';
        return;
    }

    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerEl.textContent = formattedTime;
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

    // Calculate current streak
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

    // Calculate max streak
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

// Modal functions
function showResultModal(won, word, time, attempts) {
    console.log('showResultModal called:', {won, word, time, attempts});
    const modal = document.getElementById('result-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalWord = document.getElementById('modal-word');
    const modalTime = document.getElementById('modal-time');
    const modalAttempts = document.getElementById('modal-attempts');

    console.log('Modal elements found:', {modal, modalTitle, modalWord, modalTime, modalAttempts});

    // Set title and styling based on win/loss
    if (won) {
        modalTitle.textContent = 'Congratulations!';
        modalTitle.className = 'modal-title win';
    } else {
        modalTitle.textContent = 'Game Over!';
        modalTitle.className = 'modal-title lose';
    }

    // Set word and stats
    modalWord.textContent = word;
    modalTime.textContent = formatModalTime(time);
    modalAttempts.textContent = attempts;

    // Show modal
    modal.style.display = 'flex';
}

function hideResultModal() {
    const modal = document.getElementById('result-modal');
    modal.style.display = 'none';
}

function formatModalTime(seconds) {
    if (!seconds) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Multiplayer functions
function checkMultiplayerMode() {
    const urlParams = new URLSearchParams(window.location.search);
    isMultiplayerMode = urlParams.get('mode') === 'multiplayer';

    if (isMultiplayerMode) {
        currentPlayerName = localStorage.getItem('currentMultiplayerPlayer');
        const gameData = localStorage.getItem('multiplayerGameData');
        if (gameData) {
            multiplayerData = JSON.parse(gameData);
        }
    }
}

function generatePlayerWord(playerName) {
    // Get or create session ID for consistent word generation within one game
    let sessionId = localStorage.getItem('multiplayerSessionId');
    if (!sessionId) {
        sessionId = Date.now().toString();
        localStorage.setItem('multiplayerSessionId', sessionId);
    }

    // Generate different words for each player using name + session
    const nameHash = playerName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const sessionHash = parseInt(sessionId.slice(-6));
    const playerIndex = multiplayerData.players.indexOf(playerName);

    // Combine all factors for unique word per player
    const seed = (nameHash + sessionHash + (playerIndex * 17)) % TARGET_WORDS.length;
    return TARGET_WORDS[seed];
}

function displayPlayerName() {
    if (isMultiplayerMode && currentPlayerName) {
        const playerNameEl = document.getElementById('player-name');
        if (playerNameEl) {
            playerNameEl.textContent = `${currentPlayerName}'s Turn`;
            playerNameEl.style.display = 'block';
        }

        // Update new game button text for multiplayer
        const newGameBtn = document.getElementById('new-game');
        if (newGameBtn) {
            newGameBtn.textContent = 'Back to Players';
        }
    }
}

function handleMultiplayerGameEnd(won) {
    if (!isMultiplayerMode || !currentPlayerName || !multiplayerData) return;

    // Update player's game state
    const gameState = multiplayerData.gameStates[currentPlayerName];
    gameState.completed = true;
    gameState.won = won;
    gameState.attempts = currentRow + (won ? 1 : 0);
    gameState.word = targetWord;
    gameState.endTime = Date.now();
    gameState.guesses = [...guesses];

    if (gameState.startTime) {
        gameState.timeTaken = Math.round((gameState.endTime - gameState.startTime) / 1000);
    }

    // Save updated data
    localStorage.setItem('multiplayerGameData', JSON.stringify(multiplayerData));

    // Navigation will be handled by the modal continue button
}

// Initialize game on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initializeGame();

    // Keyboard input
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleKeyPress('ENTER');
        } else if (e.key === 'Backspace') {
            handleKeyPress('BACKSPACE');
        } else if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
            handleKeyPress(e.key.toUpperCase());
        }
    });

    // On-screen keyboard
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('click', () => {
            handleKeyPress(key.getAttribute('data-key'));
        });
    });

    // New game button
    const newGameBtn = document.getElementById('new-game');
    if (newGameBtn) {
        newGameBtn.addEventListener('click', () => {
            if (isMultiplayerMode) {
                window.location.href = 'multiplayer-game.html';
            } else {
                initializeGame();
            }
        });
    }

    // Modal continue button
    const modalContinueBtn = document.getElementById('modal-continue');
    if (modalContinueBtn) {
        modalContinueBtn.addEventListener('click', () => {
            hideResultModal();
            if (isMultiplayerMode) {
                // For multiplayer, return to player selection after a brief delay
                setTimeout(() => {
                    window.location.href = 'multiplayer-game.html?return=true';
                }, 500);
            } else {
                // For single player, just hide modal - they can start new game if they want
            }
        });
    }
});