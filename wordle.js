const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

// Easy words - Common, everyday vocabulary
const EASY_WORDS = [
    'ABOUT', 'AFTER', 'AGAIN', 'ALONE', 'ALONG', 'APPLE', 'BELOW', 'BLACK', 'BOARD', 'BREAD',
    'BRING', 'BROWN', 'BUILD', 'CARRY', 'CATCH', 'CHAIR', 'CHEAP', 'CHILD', 'CLEAN', 'CLEAR',
    'CLOSE', 'CLOUD', 'COUNT', 'COVER', 'DAILY', 'DANCE', 'DEATH', 'DREAM', 'DRINK', 'DRIVE',
    'EARLY', 'EARTH', 'EIGHT', 'EMPTY', 'ENJOY', 'ENTER', 'EVERY', 'FIELD', 'FIFTY', 'FIGHT',
    'FINAL', 'FIRST', 'FLOOR', 'FOUND', 'FRESH', 'FRONT', 'FRUIT', 'FUNNY', 'GLASS', 'GOING',
    'GREAT', 'GREEN', 'GROUP', 'HAPPY', 'HEART', 'HEAVY', 'HELLO', 'HORSE', 'HOTEL', 'HOUSE',
    'HUMAN', 'LARGE', 'LATER', 'LAUGH', 'LEARN', 'LEAVE', 'LIGHT', 'LUNCH', 'MAGIC', 'MATCH',
    'MAYBE', 'MONEY', 'MONTH', 'MUSIC', 'NEVER', 'NIGHT', 'NORTH', 'OCEAN', 'OFFER', 'OFTEN',
    'ORDER', 'OTHER', 'PAINT', 'PAPER', 'PARTY', 'PEACE', 'PHONE', 'PIANO', 'PLACE', 'PLANT',
    'POINT', 'POWER', 'PRICE', 'QUICK', 'QUIET', 'RADIO', 'RIGHT', 'RIVER', 'ROUND', 'SEVEN',
    'SHARE', 'SHIRT', 'SHORT', 'SIGHT', 'SLEEP', 'SMALL', 'SMILE', 'SOUND', 'SOUTH', 'SPACE',
    'SPEAK', 'SPEED', 'STAND', 'START', 'STATE', 'STILL', 'STORY', 'STUDY', 'SUGAR', 'SWEET',
    'TABLE', 'TEACH', 'THANK', 'THEIR', 'THERE', 'THESE', 'THING', 'THINK', 'THREE', 'TODAY',
    'TOTAL', 'TOUCH', 'TRAIN', 'UNDER', 'UNTIL', 'VISIT', 'VOICE', 'WATER', 'WATCH', 'WHERE',
    'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WOMAN', 'WORLD', 'WOULD', 'WRITE', 'WRONG', 'YOUNG'
];

// Medium words - Moderately common vocabulary
const MEDIUM_WORDS = [
    'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AGENT', 'AGREE', 'AHEAD',
    'ALARM', 'ALBUM', 'ALERT', 'ALIKE', 'ALIVE', 'ALLOW', 'ALTER', 'ANGEL', 'ANGER', 'ANGLE',
    'ANGRY', 'APART', 'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AVOID',
    'AWARD', 'AWARE', 'BADLY', 'BAKER', 'BASIC', 'BASIN', 'BEACH', 'BEGAN', 'BEING', 'BENCH',
    'BIRTH', 'BLAME', 'BLIND', 'BLOCK', 'BLOOD', 'BOOST', 'BOOTH', 'BOUND', 'BRAIN', 'BRAND',
    'BREAK', 'BREED', 'BRIEF', 'BROAD', 'BROKE', 'BUILT', 'BUYER', 'CABLE', 'CAUSE', 'CHAIN',
    'CHAOS', 'CHARM', 'CHART', 'CHASE', 'CHECK', 'CHEST', 'CHIEF', 'CHINA', 'CHOSE', 'CIVIL',
    'CLAIM', 'CLASS', 'CLICK', 'CLIFF', 'CLIMB', 'CLOCK', 'COACH', 'COAST', 'COULD', 'COURT',
    'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME', 'CRISP', 'CROSS', 'CROWD', 'CROWN', 'CRUDE',
    'CURVE', 'CYCLE', 'DATED', 'DEALT', 'DEBUT', 'DELAY', 'DELTA', 'DENSE', 'DEPOT', 'DEPTH',
    'DOING', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA', 'DRANK', 'DRAWN', 'DRESS', 'DRIED', 'DRILL',
    'DROVE', 'DYING', 'EAGER', 'ELITE', 'ENEMY', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EXACT',
    'EXIST', 'EXTRA', 'FAITH', 'FALSE', 'FAULT', 'FENCE', 'FIBER', 'FIERY', 'FIFTH', 'FIXED',
    'FLASH', 'FLEET', 'FLOAT', 'FLOOD', 'FLUID', 'FOCAL', 'FOCUS', 'FORCE', 'FORTH', 'FORTY',
    'FORUM', 'FRAME', 'FRANK', 'FRAUD', 'FULLY', 'GIANT', 'GIVEN', 'GLOBE', 'GRACE', 'GRADE',
    'GRAIN', 'GRAND', 'GRANT', 'GRAPE', 'GRAPH', 'GRASP', 'GRASS', 'GRAVE', 'GRIND', 'GROSS',
    'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'GUILT', 'HABIT', 'HARSH', 'HASTE', 'HEDGE',
    'HENCE', 'HIRED', 'HOBBY', 'HOURS', 'IDEAL', 'IMAGE', 'IMPLY', 'INDEX', 'INNER', 'INPUT',
    'INTER', 'INTRO', 'ISSUE', 'JOINT', 'JUDGE', 'KNOWN', 'LABEL', 'LASER', 'LAYER', 'LEASE',
    'LEAST', 'LEGAL', 'LEMON', 'LEVEL', 'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOGIC', 'LOOSE',
    'LOWER', 'LUCKY', 'LYING', 'MAJOR', 'MAKER', 'MARCH', 'MAYOR', 'MEANT', 'MEDIA', 'METAL',
    'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH',
    'MOVED', 'NEEDS', 'NEWLY', 'NOISE', 'NOTED', 'NOVEL', 'NURSE', 'OCCUR', 'OUTER', 'OWNER',
    'PANEL', 'PHASE', 'PHOTO', 'PIECE', 'PILOT', 'PITCH', 'PLAIN', 'PLANE', 'PLATE', 'POUND',
    'PRESS', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE', 'PROOF', 'PROUD', 'PROVE', 'QUEEN',
    'QUITE', 'RAISE', 'RANGE', 'RAPID', 'RATIO', 'REACH', 'REALM', 'REBEL', 'REFER', 'RELAX',
    'REPLY', 'RIDER', 'RIDGE', 'RIFLE', 'RIGID', 'ROBIN', 'ROCKY', 'ROGER', 'ROMAN', 'ROAST',
    'ROUGH', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SERVE',
    'SHALL', 'SHAPE', 'SHARP', 'SHEAR', 'SHEER', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE',
    'SHOCK', 'SHOOT', 'SHORE', 'SHOWN', 'SILLY', 'SIMON', 'SINCE', 'SIXTH', 'SIXTY', 'SIZED',
    'SKILL', 'SLASH', 'SLEPT', 'SLICE', 'SLIDE', 'SLING', 'SLOPE', 'SMART', 'SMITH', 'SMOKE',
    'SNACK', 'SNAKE', 'SOLID', 'SOLVE', 'SORRY', 'SPARE', 'SPARK', 'SPEND', 'SPENT', 'SPIKE',
    'SPILL', 'SPINE', 'SPLIT', 'SPOKE', 'SPORT', 'SPRAY', 'SQUAD', 'STACK', 'STAFF', 'STAGE',
    'STAKE', 'STEAK', 'STEAL', 'STEAM', 'STEEL', 'STEEP', 'STEER', 'STICK', 'STOCK', 'STOIC',
    'STONE', 'STOOD', 'STOOL', 'STORE', 'STORM', 'STOVE', 'STRAP', 'STRIP', 'STUCK', 'STUFF',
    'STYLE', 'SUITE', 'SUPER', 'SURGE', 'SWEAR', 'SWEAT', 'SWELL', 'SWEPT', 'SWIFT', 'SWING',
    'SWIRL', 'SWORD', 'TAKEN', 'TASTE', 'TAXES', 'TEAMS', 'TENTH', 'TERRY', 'TEXAS', 'THEFT',
    'THEME', 'THICK', 'THIRD', 'THOSE', 'THREW', 'THROW', 'THUMB', 'TIGHT', 'TIMER', 'TITLE',
    'TOPIC', 'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIL', 'TRASH', 'TREAT', 'TREND', 'TRIAL',
    'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TROOP', 'TRUCK', 'TRULY', 'TRUMP', 'TRUNK', 'TRUST',
    'TRUTH', 'TWICE', 'TWINS', 'UNCLE', 'UNDUE', 'UNION', 'UNITY', 'UPPER', 'UPSET', 'URBAN',
    'USAGE', 'USUAL', 'VALID', 'VALUE', 'VIDEO', 'VIRUS', 'VITAL', 'VOCAL', 'VOTER', 'WAGON',
    'WASTE', 'WEARY', 'WHEEL', 'WHOSE', 'WIDER', 'WOMEN', 'WORRY', 'WORSE', 'WORST', 'WORTH',
    'WOUND', 'WROTE', 'YIELD', 'YOURS', 'YOUTH', 'ZEBRA'
];

// Hard words - Uncommon, technical, or complex letter patterns
const HARD_WORDS = [
    'ABUZZ', 'AFFIX', 'ASKEW', 'AXIOM', 'AZURE', 'BANJO', 'BAYOU', 'BLITZ', 'BOOZY', 'BUZZY',
    'CALYX', 'CHAMP', 'CHAZY', 'CHUMP', 'CIVIC', 'COYPU', 'CRWTH', 'CURVY', 'CYBER', 'CYSTS',
    'DADDY', 'DANDY', 'DIZZY', 'DROLL', 'DRUNK', 'DRYLY', 'DWARF', 'EARLY', 'EBONY', 'EJECT',
    'ELFIN', 'ELBOW', 'EPOCH', 'EQUAL', 'EQUIP', 'ETHYL', 'EVOKE', 'EXACT', 'EXALT', 'EXPEL',
    'FANNY', 'FATWA', 'FAZED', 'FELON', 'FEMME', 'FERRY', 'FETAL', 'FETCH', 'FEWER', 'FIBBY',
    'FIFTY', 'FILMS', 'FINCH', 'FIZZY', 'FJORD', 'FLASK', 'FLESH', 'FLICK', 'FLING', 'FLUNK',
    'FOLKS', 'FOLKY', 'FOUND', 'FRAYS', 'FRITZ', 'FROZE', 'FULLY', 'FUNKY', 'FUZZY', 'GAILY',
    'GAMMA', 'GAUDY', 'GAWKS', 'GIZMO', 'GLYPH', 'GNOME', 'GODLY', 'GOING', 'GOLLY', 'GOOPY',
    'GOOFY', 'GRIMY', 'GRUFF', 'GULCH', 'GULLY', 'GUPPY', 'GUSTY', 'GUTSY', 'GYPSY', 'HAIKU',
    'HANDY', 'HAPPY', 'HARSH', 'HASTY', 'HATCH', 'HEFTY', 'HELIX', 'HILLS', 'HILLY', 'HIPPY',
    'HITCH', 'HOARY', 'HOBBY', 'HOIST', 'HOLLY', 'HOOEY', 'HOOKY', 'HOPPY', 'HOTLY', 'HOWDY',
    'HUFFY', 'HULKY', 'HUNKY', 'HURRY', 'HUSKY', 'HUSSY', 'HUTCH', 'HYENA', 'HYING', 'HYMEN',
    'ICHOR', 'IGLOO', 'IMPLY', 'INBOX', 'INDEX', 'INEPT', 'INFIX', 'INKLE', 'IONIC', 'ITCHY',
    'IVORY', 'JAZZY', 'JELLY', 'JERKY', 'JETTY', 'JIMMY', 'JOLLY', 'JOWLY', 'JUDGY', 'JUICE',
    'JUICY', 'JUMBO', 'JUMPY', 'JUNKY', 'KAYAK', 'KEBAB', 'KETCH', 'KHAKI', 'KIDDY', 'KINKY',
    'KITTY', 'KLUTZ', 'KNACK', 'KNEAD', 'KNEEL', 'KNELT', 'KNIFE', 'KNOCK', 'KNOLL', 'KNOWN',
    'KOALA', 'KOOKY', 'KYOTO', 'LABIA', 'LAGER', 'LLAMA', 'LOBBY', 'LOFTY', 'LOWLY', 'LUCKY',
    'LUMPY', 'LUNCH', 'LUSTY', 'LYING', 'LYMPH', 'LYRIC', 'MACHO', 'MADLY', 'MAFIA', 'MAGIC',
    'MAGNA', 'MAIZE', 'MAMBO', 'MANGO', 'MANOR', 'MAPLE', 'MARCH', 'MARRY', 'MARSH', 'MATCH',
    'MAXIM', 'MAYBE', 'MAYOR', 'MEATY', 'MECCA', 'MERCY', 'MERRY', 'MESSY', 'MIGHT', 'MILKY',
    'MINTY', 'MISTY', 'MITTEN', 'MOCHA', 'MODAL', 'MOGUL', 'MOIST', 'MOLDY', 'MONEY', 'MONKS',
    'MOOCH', 'MOODY', 'MOOSE', 'MOSSY', 'MOTTO', 'MOULD', 'MOUND', 'MOUNT', 'MOUSE', 'MOUSY',
    'MOUTH', 'MUCKY', 'MUDDY', 'MUGGY', 'MUMMY', 'MURKY', 'MUSHY', 'MUSKY', 'MUSTY', 'MYRRH',
    'MYTHS', 'NANNY', 'NASTY', 'NATTY', 'NAVAL', 'NERDY', 'NEWSY', 'NIGHT', 'NINJA', 'NINNY',
    'NINTH', 'NIPPY', 'NITTY', 'NOBLE', 'NODDY', 'NOISY', 'NOMAD', 'NOOSE', 'NORTH', 'NOTCH',
    'NOVEL', 'NUMB', 'NUTTY', 'NYLON', 'NYMPH', 'OAKUM', 'OATHS', 'OCCUR', 'OCHRE', 'ODDLY',
    'OFFAL', 'OFTEN', 'OILED', 'OLIVE', 'OMBRE', 'OMEGA', 'ONION', 'OOMPH', 'OPTIC', 'ORBIT',
    'ORGAN', 'OTHER', 'OTTER', 'OUGHT', 'OUNCE', 'OUTDO', 'OUTER', 'OVARY', 'OVINE', 'OWING',
    'OXBOW', 'OXIDE', 'OZONE', 'PADDY', 'PAGAN', 'PANSY', 'PAPAW', 'PAPER', 'PARTY', 'PASTA',
    'PASTY', 'PATCH', 'PATSY', 'PATTY', 'PEACH', 'PEARL', 'PEATY', 'PECKY', 'PEDAL', 'PENNY',
    'PERKY', 'PESKY', 'PETAL', 'PETTY', 'PHASE', 'PHONE', 'PHOTO', 'PIANO', 'PICKY', 'PIECE',
    'PIETY', 'PIGGY', 'PILOT', 'PINCH', 'PINEY', 'PINKY', 'PIOUS', 'PITCH', 'PITHY', 'PIZZA',
    'PLACE', 'PLAID', 'PLAIN', 'PLAIT', 'PLANE', 'PLANK', 'PLANT', 'PLASH', 'PLATE', 'PLAZA',
    'PLEAD', 'PLEAT', 'PLIED', 'PLONK', 'PLOPS', 'PLOTS', 'PLOWS', 'PLUCK', 'PLUGS', 'PLUMB',
    'PLUME', 'PLUMP', 'PLUMS', 'PLUNK', 'PLUSH', 'POEMS', 'POETS', 'POINT', 'POKER', 'POLAR',
    'POLES', 'POLKA', 'POLLS', 'POMPS', 'PONDS', 'PONYS', 'POOLS', 'POPES', 'POPPY', 'PORCH',
    'PORKS', 'PORTS', 'POSED', 'POSER', 'POSTS', 'POTTY', 'POUCH', 'POUND', 'POURS', 'POUTS',
    'POWER', 'PRAWN', 'PRESS', 'PRICE', 'PRICK', 'PRIDE', 'PRIED', 'PRIME', 'PRIMO', 'PRINT',
    'PRIOR', 'PRIVY', 'PRIZE', 'PROBE', 'PROOF', 'PROPS', 'PROSE', 'PROUD', 'PROVE', 'PROWL',
    'PROXY', 'PRUDE', 'PRUNE', 'PSALM', 'PSYCH', 'PUBIC', 'PUDGY', 'PUFFS', 'PUFFY', 'PULLS',
    'PULSE', 'PUMPS', 'PUNCH', 'PUNKS', 'PUNNY', 'PURGE', 'PURLS', 'PURSE', 'PUSHY', 'PUTTY',
    'PYGMY', 'QUACK', 'QUADS', 'QUAIL', 'QUAKE', 'QUALM', 'QUART', 'QUASI', 'QUEEN', 'QUEER',
    'QUELL', 'QUERY', 'QUEST', 'QUEUE', 'QUICK', 'QUIET', 'QUIFF', 'QUILL', 'QUILT', 'QUIPS',
    'QUIRK', 'QUITE', 'QUITS', 'QUOTA', 'QUOTE', 'QUOTH', 'RABBI', 'RABID', 'RACES', 'RACKS',
    'RADAR', 'RADII', 'RADIO', 'RADON', 'RAFTS', 'RAGES', 'RAIDS', 'RAILS', 'RAINS', 'RAISE',
    'RAKED', 'RALLY', 'RAMPS', 'RANCH', 'RANGE', 'RANKS', 'RAPID', 'RARELY', 'RASED', 'RASP',
    'RATES', 'RATIO', 'REACH', 'READS', 'READY', 'REALM', 'REAMS', 'REBEL', 'REFER', 'REGAL',
    'REIGN', 'RELAX', 'RELAY', 'RELIC', 'REMIX', 'REPAY', 'REPLY', 'RESET', 'RIDER', 'RIDGE',
    'RIFLE', 'RIGHT', 'RIGID', 'RINGS', 'RINSE', 'RIOTS', 'RISEN', 'RISKS', 'RIVAL', 'RIVER',
    'ROADS', 'ROAMS', 'ROARS', 'ROAST', 'ROBED', 'ROBOT', 'ROCKS', 'ROCKY', 'ROGUE', 'ROLES',
    'ROLLS', 'ROMAN', 'ROMPS', 'ROOFS', 'ROOMS', 'ROOTS', 'ROPED', 'ROSES', 'ROTOR', 'ROUGE',
    'ROUGH', 'ROUND', 'ROUTE', 'ROWAN', 'ROWDY', 'ROYAL', 'RUB', 'RUGBY', 'RUINS', 'RULER',
    'RUMOR', 'RUNGS', 'RURAL', 'RUSHY', 'RUSTY', 'SADLY', 'SAFER', 'SAGES', 'SAINT', 'SAKE',
    'SALLY', 'SALON', 'SALTS', 'SALTY', 'SANDS', 'SANDY', 'SAPPY', 'SARGE', 'SATIN', 'SATYR',
    'SAUCE', 'SAUCY', 'SAUNA', 'SAVED', 'SAVES', 'SAVOR', 'SAVOY', 'SAVVY', 'SCALD', 'SCALE',
    'SCALP', 'SCAMP', 'SCAMS', 'SCANT', 'SCARE', 'SCARF', 'SCARY', 'SCENE', 'SCENT', 'SCHWA',
    'SCION', 'SCOFF', 'SCOLD', 'SCONE', 'SCOOP', 'SCOPE', 'SCORE', 'SCORN', 'SCOTS', 'SCOUT',
    'SCOWL', 'SCRAM', 'SCRAP', 'SCREE', 'SCREW', 'SCRUB', 'SCUBA', 'SEDAN', 'SEEDS', 'SEEDY',
    'SEEKS', 'SEEMS', 'SEEPS', 'SELLS', 'SENDS', 'SENSE', 'SEPIA', 'SERIF', 'SERVE', 'SETUP',
    'SEVEN', 'SEVER', 'SEWED', 'SHACK', 'SHADE', 'SHADY', 'SHAFT', 'SHAKE', 'SHAKY', 'SHALE',
    'SHALL', 'SHAME', 'SHAMS', 'SHANK', 'SHAPE', 'SHARD', 'SHARE', 'SHARK', 'SHARP', 'SHAVE',
    'SHAWL', 'SHEAR', 'SHEDS', 'SHEEP', 'SHEER', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE',
    'SHINY', 'SHIPS', 'SHIRK', 'SHIRT', 'SHOAL', 'SHOCK', 'SHOD', 'SHOES', 'SHONE', 'SHOOK',
    'SHOOT', 'SHOPS', 'SHORE', 'SHORN', 'SHORT', 'SHOTS', 'SHOUT', 'SHOVE', 'SHOWN', 'SHOWS',
    'SHOWY', 'SHRED', 'SHREW', 'SHRUB', 'SHRUG', 'SHUCK', 'SHUNT', 'SHUSH', 'SHUTE', 'SHUTS',
    'SHYLY', 'SIDES', 'SIEGE', 'SIEVE', 'SIGHT', 'SIGMA', 'SIGNS', 'SILKY', 'SILLY', 'SILTS',
    'SILTY', 'SINCE', 'SINEW', 'SINGS', 'SINKS', 'SIREN', 'SISSY', 'SITES', 'SIXES', 'SIXTH',
    'SIXTY', 'SIZES', 'SKATE', 'SKEET', 'SKEWS', 'SKIDS', 'SKIES', 'SKIFF', 'SKILL', 'SKIMP',
    'SKINS', 'SKIPS', 'SKIRT', 'SKITS', 'SKULK', 'SKULL', 'SKUNK', 'SLABS', 'SLACK', 'SLAIN',
    'SLAMS', 'SLANG', 'SLANT', 'SLASH', 'SLATE', 'SLATS', 'SLAVE', 'SLAYS', 'SLEDS', 'SLEEP',
    'SLEET', 'SLEPT', 'SLICE', 'SLICK', 'SLIDE', 'SLIME', 'SLIMY', 'SLING', 'SLINK', 'SLIPS',
    'SLITS', 'SLOBS', 'SLOOP', 'SLOPE', 'SLOPS', 'SLOSH', 'SLOTH', 'SLOTS', 'SLOWS', 'SLUED',
    'SLUGS', 'SLUMP', 'SLUNG', 'SLUNK', 'SLURP', 'SLUSH', 'SLUTS', 'SLYLY', 'SMACK', 'SMALL',
    'SMART', 'SMASH', 'SMEAR', 'SMELL', 'SMELT', 'SMILE', 'SMIRK', 'SMITH', 'SMOCK', 'SMOKE',
    'SMOKY', 'SMOLT', 'SMOTE', 'SNACK', 'SNAFU', 'SNAGS', 'SNAIL', 'SNAKE', 'SNAPS', 'SNARE',
    'SNARL', 'SNEAK', 'SNEER', 'SNIDE', 'SNIFF', 'SNIPE', 'SNIPS', 'SNOBS', 'SNOOD', 'SNOOK',
    'SNOOP', 'SNORE', 'SNORT', 'SNOTS', 'SNOUT', 'SNOWY', 'SNUBS', 'SNUCK', 'SNUFF', 'SNUGS',
    'SOAKS', 'SOAPS', 'SOAPY', 'SOARS', 'SOBER', 'SOCKS', 'SODAS', 'SOGGY', 'SOILS', 'SOLAR',
    'SOLDI', 'SOLID', 'SOLVE', 'SONAR', 'SONGS', 'SONIC', 'SOOKY', 'SOOTY', 'SORRY', 'SORTS',
    'SOULS', 'SOUND', 'SOUPS', 'SOUPY', 'SOURS', 'SOUTH', 'SOWED', 'SPACE', 'SPADE', 'SPARE',
    'SPARK', 'SPASM', 'SPAWN', 'SPEAK', 'SPEAR', 'SPECS', 'SPEED', 'SPELL', 'SPEND', 'SPENT',
    'SPERM', 'SPICE', 'SPICY', 'SPIED', 'SPIEL', 'SPIES', 'SPIKE', 'SPIKY', 'SPILL', 'SPILT',
    'SPINE', 'SPINS', 'SPINY', 'SPIRE', 'SPITS', 'SPLIT', 'SPOIL', 'SPOKE', 'SPOOF', 'SPOOK',
    'SPOOL', 'SPOON', 'SPORE', 'SPORT', 'SPOTS', 'SPOUT', 'SPRAY', 'SPREE', 'SPRIG', 'SPUDS',
    'SPUME', 'SPUNK', 'SPURN', 'SPURS', 'SQUAD', 'SQUAT', 'SQUIB', 'STACK', 'STAFF', 'STAGE',
    'STAGS', 'STAID', 'STAIN', 'STAIR', 'STAKE', 'STALE', 'STALK', 'STALL', 'STAMP', 'STAND',
    'STANK', 'STAPH', 'STARE', 'STARK', 'STARS', 'START', 'STASH', 'STATE', 'STATS', 'STAVE',
    'STAYS', 'STEAD', 'STEAK', 'STEAL', 'STEAM', 'STEED', 'STEEL', 'STEEP', 'STEER', 'STEMS',
    'STEPS', 'STERN', 'STICK', 'STIFF', 'STILL', 'STILT', 'STING', 'STINK', 'STINT', 'STOCK',
    'STOIC', 'STOKE', 'STOLE', 'STOMP', 'STONE', 'STONY', 'STOOD', 'STOOL', 'STOOP', 'STORE',
    'STORK', 'STORM', 'STORY', 'STOUT', 'STOVE', 'STRAP', 'STRAW', 'STRAY', 'STRIP', 'STROP',
    'STRUT', 'STUCK', 'STUDS', 'STUFF', 'STUMP', 'STUNG', 'STUNK', 'STUNT', 'STYLE', 'SUAVE',
    'SUDS', 'SUGAR', 'SUITE', 'SULKY', 'SULLY', 'SUMER', 'SUNNY', 'SUPER', 'SURER', 'SURGE',
    'SURLY', 'SWABS', 'SWAGS', 'SWAIN', 'SWALE', 'SWAMP', 'SWANS', 'SWAPS', 'SWARD', 'SWARM',
    'SWASH', 'SWATH', 'SWATS', 'SWAYS', 'SWEAR', 'SWEAT', 'SWEEP', 'SWEET', 'SWELL', 'SWEPT',
    'SWIFT', 'SWIGS', 'SWIMS', 'SWINE', 'SWING', 'SWIPE', 'SWIRL', 'SWISH', 'SWISS', 'SWOON',
    'SWOOP', 'SWORD', 'SWORE', 'SWORN', 'SWUNG', 'SYRUP', 'TABBY', 'TABLE', 'TABOO', 'TACIT',
    'TACKS', 'TACKY', 'TACOS', 'TACTS', 'TAFFY', 'TAILS', 'TAINT', 'TAKEN', 'TAKER', 'TAKES',
    'TALES', 'TALKS', 'TALLY', 'TALON', 'TAMED', 'TAMER', 'TAMES', 'TANGO', 'TANGS', 'TANKS',
    'TAPED', 'TAPER', 'TAPES', 'TARDY', 'TARES', 'TARNS', 'TAROT', 'TARPS', 'TARTS', 'TASKS',
    'TASTE', 'TASTY', 'TATTY', 'TAUNT', 'TAWNY', 'TAXED', 'TAXES', 'TAXIS', 'TEACH', 'TEAMS',
    'TEARS', 'TEASE', 'TEATS', 'TEDDY', 'TEENS', 'TEETH', 'TELLS', 'TEMPO', 'TEMPS', 'TENDS',
    'TENET', 'TENOR', 'TENSE', 'TENTH', 'TENTS', 'TEPID', 'TERMS', 'TERNS', 'TERRY', 'TERSE',
    'TESTS', 'TEXAS', 'TEXTS', 'THANK', 'THAWS', 'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE',
    'THICK', 'THIEF', 'THIGH', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW',
    'THUGS', 'THUMB', 'THUMP', 'THUNK', 'TIARA', 'TIBIA', 'TICKS', 'TIDAL', 'TIDES', 'TIERS',
    'TIGER', 'TIGHT', 'TILDE', 'TILED', 'TILES', 'TILLS', 'TILTS', 'TIMBO', 'TIMED', 'TIMER',
    'TIMES', 'TIMID', 'TINGE', 'TINGS', 'TINNY', 'TINTS', 'TIPSY', 'TIRED', 'TIRES', 'TITAN',
    'TITHE', 'TITLE', 'TOADS', 'TOAST', 'TODAY', 'TODDY', 'TOFFS', 'TOGAS', 'TOLLS', 'TOMBS',
    'TOMES', 'TONED', 'TONER', 'TONES', 'TONGS', 'TOOLS', 'TOOTH', 'TOOTS', 'TOPAZ', 'TOPIC',
    'TORCH', 'TORSO', 'TOTAL', 'TOUCH', 'TOUGH', 'TOURS', 'TOWEL', 'TOWER', 'TOWNS', 'TOXIC',
    'TOXIN', 'TRACE', 'TRACK', 'TRACT', 'TRADE', 'TRAIL', 'TRAIN', 'TRAIT', 'TRAMP', 'TRANS',
    'TRAPS', 'TRASH', 'TRAWL', 'TREAD', 'TREAT', 'TREES', 'TREND', 'TRESS', 'TRIAD', 'TRIAL',
    'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TRIGS', 'TRILL', 'TRIMS', 'TRIOS', 'TRIPS', 'TRITE',
    'TROLL', 'TROMP', 'TROOP', 'TROPE', 'TROTS', 'TROUT', 'TROVE', 'TRUCE', 'TRUCK', 'TRUED',
    'TRUER', 'TRUES', 'TRULY', 'TRUMP', 'TRUNK', 'TRUSS', 'TRUST', 'TRUTH', 'TRYST', 'TUBAS',
    'TUBES', 'TUCKS', 'TUFTS', 'TULIP', 'TUMBO', 'TUMOR', 'TUNED', 'TUNES', 'TUNIC', 'TURBO',
    'TURNS', 'TWAIN', 'TWANG', 'TWEED', 'TWERP', 'TWICE', 'TWIGS', 'TWILL', 'TWINS', 'TWIRL',
    'TWIST', 'TWITS', 'TYPED', 'TYPES', 'TYPOS', 'ULTRA', 'UMBER', 'UMIAC', 'UNAPT', 'UNARM',
    'UNARY', 'UNBOX', 'UNCAP', 'UNCLE', 'UNCUT', 'UNDER', 'UNDUE', 'UNFED', 'UNFIT', 'UNFIX',
    'UNIFY', 'UNION', 'UNITS', 'UNITY', 'UNIX', 'UNLAY', 'UNLED', 'UNLIT', 'UNMET', 'UNMIX',
    'UNPEN', 'UNPIN', 'UNSAY', 'UNSET', 'UNSEX', 'UNTAX', 'UNTIE', 'UNTIL', 'UNWED', 'UNWET',
    'UNWON', 'UNZIP', 'UPBOW', 'UPDOS', 'UPEND', 'UPPER', 'UPSET', 'URBAN', 'URGED', 'URINE',
    'USAGE', 'USERS', 'USHER', 'USING', 'USUAL', 'USURP', 'USURY', 'UTTER', 'VAGUE', 'VAILS',
    'VALES', 'VALID', 'VALOR', 'VALUE', 'VALVE', 'VAPOR', 'VAULT', 'VEERS', 'VEINS', 'VELAR',
    'VENAL', 'VENDS', 'VENOM', 'VENTS', 'VENUE', 'VERGE', 'VERSE', 'VERSO', 'VESTS', 'VETCH',
    'VEXED', 'VIALS', 'VIBES', 'VICAR', 'VICES', 'VIDEO', 'VIEWS', 'VIGOR', 'VILLA', 'VINES',
    'VINYL', 'VIOLA', 'VIPER', 'VIRAL', 'VIRUS', 'VISIT', 'VISOR', 'VISTA', 'VITAL', 'VIVID',
    'VIXEN', 'VOCAL', 'VODKA', 'VOGUE', 'VOICE', 'VOIDS', 'VOILA', 'VOLES', 'VOLTS', 'VOMIT',
    'VOTED', 'VOTER', 'VOTES', 'VOUCH', 'VOWED', 'VOWEL', 'WACKO', 'WACKY', 'WADED', 'WADES',
    'WAFTS', 'WAGER', 'WAGES', 'WAGON', 'WAIFS', 'WAILS', 'WAIST', 'WAITS', 'WAKED', 'WAKES',
    'WALKS', 'WALLS', 'WALTZ', 'WANDS', 'WANED', 'WANES', 'WANTS', 'WARDS', 'WARES', 'WARMS',
    'WARNS', 'WARPS', 'WARTS', 'WASTE', 'WATCH', 'WATER', 'WAVED', 'WAVER', 'WAVES', 'WAXED',
    'WAXES', 'WEARY', 'WEAVE', 'WEBER', 'WEDGE', 'WEEDS', 'WEEDY', 'WEEKS', 'WEENY', 'WEEPS',
    'WEIGH', 'WEIRD', 'WEIRS', 'WELCH', 'WELDS', 'WELLS', 'WELSH', 'WELTS', 'WENCH', 'WHACK',
    'WHALE', 'WHAMS', 'WHARF', 'WHATS', 'WHEAT', 'WHEEL', 'WHELM', 'WHELP', 'WHENS', 'WHERE',
    'WHETS', 'WHEYS', 'WHICH', 'WHIFF', 'WHILE', 'WHIMS', 'WHINE', 'WHINY', 'WHIPS', 'WHIRL',
    'WHIRR', 'WHIRS', 'WHISH', 'WHISK', 'WHIST', 'WHITE', 'WHITS', 'WHIZZ', 'WHOLE', 'WHOMP',
    'WHOOP', 'WHOPS', 'WHORE', 'WHORL', 'WHOSE', 'WHOSO', 'WICKS', 'WIDEN', 'WIDER', 'WIDOW',
    'WIELD', 'WIFED', 'WIFES', 'WIFEY', 'WIFTY', 'WILDS', 'WILED', 'WILES', 'WILLS', 'WILTS',
    'WIMPS', 'WIMPY', 'WINCE', 'WINCH', 'WINDS', 'WINDY', 'WINED', 'WINES', 'WINGS', 'WINKS',
    'WIPED', 'WIPER', 'WIPES', 'WIRED', 'WIRES', 'WISED', 'WISER', 'WISES', 'WISPS', 'WISPY',
    'WITCH', 'WIVES', 'WIZEN', 'WOLDS', 'WOMAN', 'WOMBS', 'WOMEN', 'WONKS', 'WONKY', 'WOODS',
    'WOODY', 'WOOED', 'WOOER', 'WOOFS', 'WOOLS', 'WOOLY', 'WOOZY', 'WORDS', 'WORDY', 'WORKS',
    'WORLD', 'WORMS', 'WORMY', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND', 'WOVEN',
    'WOWED', 'WRACK', 'WRAPS', 'WRATH', 'WREAK', 'WRECK', 'WRENS', 'WREST', 'WRIER', 'WRIES',
    'WRING', 'WRIST', 'WRITE', 'WRITS', 'WRONG', 'WROTE', 'WRUNG', 'WRYER', 'WRYLY', 'WURST',
    'XEBEC', 'XENIA', 'XENON', 'XERIC', 'XERUS', 'XRAYS', 'XYLEM', 'XYLOL', 'XYLYL', 'XYSTS',
    'YACHT', 'YACKS', 'YAFFS', 'YAGER', 'YAGIS', 'YAMEN', 'YANGS', 'YANKS', 'YARDS', 'YARNS',
    'YAWED', 'YAWLS', 'YAWNS', 'YAWPS', 'YEAHS', 'YEANS', 'YEARS', 'YEAST', 'YECCH', 'YECHS',
    'YECHY', 'YEEDS', 'YELLS', 'YELPS', 'YENTA', 'YENTE', 'YERBA', 'YERDS', 'YERKS', 'YESES',
    'YESTS', 'YESTY', 'YETIS', 'YETTS', 'YEUKS', 'YEUKY', 'YIELD', 'YIKES', 'YILLS', 'YINCE',
    'YIPES', 'YIRDS', 'YIRKS', 'YIRRS', 'YIRTH', 'YITES', 'YITIE', 'YLEMS', 'YLIKE', 'YLKES',
    'YOBBO', 'YOCKS', 'YODEL', 'YODHS', 'YODLE', 'YOGAS', 'YOGEE', 'YOGHS', 'YOGIC', 'YOGIN',
    'YOGIS', 'YOICK', 'YOJAN', 'YOKED', 'YOKEL', 'YOKES', 'YOKUL', 'YOLKS', 'YOLKY', 'YOMIM',
    'YOUNG', 'YOURN', 'YOURS', 'YOURT', 'YOUSE', 'YOUTH', 'YOWED', 'YOWES', 'YOWIE', 'YOWLS',
    'YOWZA', 'YRENT', 'YRIVD', 'YRNEH', 'YSAME', 'YTOST', 'YUANS', 'YUCAS', 'YUCCA', 'YUCCH',
    'YUCKO', 'YUCKS', 'YUCKY', 'YUGAS', 'YUKED', 'YUKES', 'YUKKY', 'YULAN', 'YULES', 'YUMMY',
    'YUPIK', 'YUPPY', 'YURTA', 'YURTS', 'YUZUS', 'ZAIRE', 'ZAKAT', 'ZAMBO', 'ZAMIA', 'ZANZA',
    'ZAPPY', 'ZARFS', 'ZARIS', 'ZATCH', 'ZAYIN', 'ZAZEN', 'ZEALS', 'ZEBEC', 'ZEBRA', 'ZEBUS',
    'ZEDAS', 'ZEINS', 'ZERDA', 'ZERKS', 'ZEROS', 'ZESTS', 'ZESTY', 'ZETAS', 'ZETHS', 'ZEUGM',
    'ZHOMO', 'ZIBET', 'ZILCH', 'ZILLS', 'ZINCK', 'ZINCS', 'ZINCY', 'ZINEB', 'ZINES', 'ZINGS',
    'ZINGY', 'ZINKE', 'ZINCS', 'ZIPPY', 'ZITIS', 'ZIZIT', 'ZLOTY', 'ZOBUS', 'ZOCCO', 'ZODAS',
    'ZOEAE', 'ZOEAL', 'ZOEAS', 'ZOMBI', 'ZONAE', 'ZONAL', 'ZONED', 'ZONER', 'ZONES', 'ZONKS',
    'ZOOEY', 'ZOOID', 'ZOOKS', 'ZOOMS', 'ZOONS', 'ZOOTY', 'ZORCH', 'ZORIL', 'ZORIS', 'ZOUKS',
    'ZOWIE', 'ZOYSI', 'ZUZIM', 'ZYMES', 'ZYMIC'
];

// Difficulty levels
const DIFFICULTY_LEVELS = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard',
    MIXED: 'mixed'
};

// Combined word list for validation and mixed mode
const TARGET_WORDS = [...EASY_WORDS, ...MEDIUM_WORDS, ...HARD_WORDS];

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
let currentDifficulty = DIFFICULTY_LEVELS.MEDIUM;

// Multiplayer variables
let isMultiplayerMode = false;
let currentPlayerName = '';
let multiplayerData = null;

// Prevent multiple submissions
let isSubmitting = false;

// Difficulty-based word selection functions
function getWordsByDifficulty(difficulty) {
    switch (difficulty) {
        case DIFFICULTY_LEVELS.EASY:
            return EASY_WORDS;
        case DIFFICULTY_LEVELS.MEDIUM:
            return MEDIUM_WORDS;
        case DIFFICULTY_LEVELS.HARD:
            return HARD_WORDS;
        case DIFFICULTY_LEVELS.MIXED:
        default:
            return TARGET_WORDS;
    }
}

function selectRandomWord(difficulty = DIFFICULTY_LEVELS.MIXED) {
    const wordList = getWordsByDifficulty(difficulty);
    return wordList[Math.floor(Math.random() * wordList.length)];
}

function getDifficultyFromWord(word) {
    if (EASY_WORDS.includes(word)) return DIFFICULTY_LEVELS.EASY;
    if (MEDIUM_WORDS.includes(word)) return DIFFICULTY_LEVELS.MEDIUM;
    if (HARD_WORDS.includes(word)) return DIFFICULTY_LEVELS.HARD;
    return DIFFICULTY_LEVELS.MIXED;
}

function getDifficultyColor(difficulty) {
    switch (difficulty) {
        case DIFFICULTY_LEVELS.EASY:
            return '#6b8e6b'; // Muted green
        case DIFFICULTY_LEVELS.MEDIUM:
            return '#f4e19c'; // Light yellow
        case DIFFICULTY_LEVELS.HARD:
            return '#c47272'; // Muted red
        default:
            return '#7d8590'; // Muted gray
    }
}

function getDifficultyLabel(difficulty) {
    switch (difficulty) {
        case DIFFICULTY_LEVELS.EASY:
            return 'Easy';
        case DIFFICULTY_LEVELS.MEDIUM:
            return 'Medium';
        case DIFFICULTY_LEVELS.HARD:
            return 'Hard';
        case DIFFICULTY_LEVELS.MIXED:
        default:
            return 'Mixed';
    }
}

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

    // Use hardcoded medium difficulty

    // Set target word based on mode
    if (isMultiplayerMode && currentPlayerName) {
        targetWord = generatePlayerWord(currentPlayerName);
        displayPlayerName();
    } else {
        targetWord = selectRandomWord(DIFFICULTY_LEVELS.MEDIUM);
    }

    // No difficulty indicator needed for hardcoded difficulty

    // Only reset game state if not in multiplayer or if no saved state exists
    if (!isMultiplayerMode || !hasExistingGameState()) {
        currentRow = 0;
        currentTile = 0;
        isGameOver = false;
        guesses = [];
        isSubmitting = false;
    }

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
        if (tile) {
            tile.textContent = letter;
            tile.classList.add('filled');
            currentTile++;

            // Save progress in multiplayer mode
            if (isMultiplayerMode) {
                saveCurrentGameState();
            }
        }
    }
}

function deleteLetter() {
    if (currentTile > 0) {
        currentTile--;
        const tile = document.getElementById(`row-${currentRow}-tile-${currentTile}`);
        tile.textContent = '';
        tile.classList.remove('filled');

        // Save progress in multiplayer mode
        if (isMultiplayerMode) {
            saveCurrentGameState();
        }
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
            const timeElapsed = elapsedTime > 0 ? Math.round(elapsedTime / 1000) : (startTime ? Math.round((Date.now() - startTime) / 1000) : 0);
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
            const timeElapsed = elapsedTime > 0 ? Math.round(elapsedTime / 1000) : (startTime ? Math.round((Date.now() - startTime) / 1000) : 0);
            showResultModal(false, targetWord, timeElapsed, MAX_GUESSES);
        }, 1500);

        handleMultiplayerGameEnd(false);
    } else {
        currentRow++;
        currentTile = 0;
    }

    // Save current progress in multiplayer mode AFTER row/tile updates
    if (isMultiplayerMode) {
        saveCurrentGameState();
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

function updateDifficultyIndicator() {
    // Create or update difficulty indicator in the message area
    const messageEl = document.getElementById('message');
    if (!messageEl) return;

    // Only show difficulty indicator if not in multiplayer mode
    if (isMultiplayerMode) return;

    // Get the actual difficulty of the current word
    const wordDifficulty = getDifficultyFromWord(targetWord);
    const difficultyLabel = getDifficultyLabel(wordDifficulty);
    const difficultyColor = getDifficultyColor(wordDifficulty);

    // Create difficulty badge HTML
    const difficultyBadge = `
        <div style="
            display: inline-block;
            background-color: ${difficultyColor};
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 10px;
        ">
            ${difficultyLabel}
        </div>
    `;

    // Only show during gameplay, not when there are messages
    if (!messageEl.textContent.trim()) {
        messageEl.innerHTML = difficultyBadge;
    }
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
    const modal = document.getElementById('result-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalWord = document.getElementById('modal-word');
    const modalTime = document.getElementById('modal-time');
    const modalAttempts = document.getElementById('modal-attempts');

    // Set title and styling based on win/loss
    if (won) {
        modalTitle.textContent = 'Congratulations!';
        modalTitle.className = 'modal-title win';
    } else {
        modalTitle.textContent = 'Game Over!';
        modalTitle.className = 'modal-title lose';
    }

    // Set word and stats
    if (won) {
        modalWord.textContent = word;
    } else {
        // Don't show the target word when game is lost
        modalWord.textContent = '';
    }
    modalTime.textContent = formatModalTime(time);
    modalAttempts.textContent = `${attempts}/6`;

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
        console.log('Current player name:', currentPlayerName);

        const gameData = localStorage.getItem('multiplayerGameData');
        console.log('Raw game data from localStorage:', gameData);

        if (gameData) {
            multiplayerData = JSON.parse(gameData);
            console.log('Parsed multiplayerData:', multiplayerData);

            if (currentPlayerName && multiplayerData.gameStates) {
                console.log(`Game state for ${currentPlayerName}:`, multiplayerData.gameStates[currentPlayerName]);
            }
        }

        // Restore ongoing game state if player hasn't completed the game
        restoreGameState();
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

function hasExistingGameState() {
    if (!isMultiplayerMode || !currentPlayerName || !multiplayerData) return false;

    const gameState = multiplayerData.gameStates[currentPlayerName];
    return gameState && gameState.currentProgress && !gameState.completed;
}

function saveCurrentGameState() {
    if (!isMultiplayerMode || !currentPlayerName) return;

    const gameState = multiplayerData.gameStates[currentPlayerName];
    if (!gameState || gameState.completed) return;

    // Get current letters in the current row
    const currentLetters = [];
    for (let i = 0; i < currentTile; i++) {
        const tile = document.getElementById(`row-${currentRow}-tile-${i}`);
        currentLetters[i] = tile ? tile.textContent : '';
    }

    // Calculate current elapsed time if timer is running
    const currentElapsed = startTime ? Date.now() - startTime : elapsedTime;

    // Save current game progress
    gameState.currentProgress = {
        currentRow,
        currentTile,
        guesses: [...guesses],
        isGameOver,
        startTime,
        elapsedTime: currentElapsed,
        targetWord,
        currentLetters
    };

    localStorage.setItem('multiplayerGameData', JSON.stringify(multiplayerData));
}

function restoreGameState() {
    if (!isMultiplayerMode || !currentPlayerName || !multiplayerData) return;

    const gameState = multiplayerData.gameStates[currentPlayerName];

    // Handle completed games differently - show final state
    if (gameState && gameState.completed) {
        restoreCompletedGame(gameState);
        return;
    }

    if (!gameState || !gameState.currentProgress) return;

    const progress = gameState.currentProgress;

    // Restore game variables
    currentRow = progress.currentRow || 0;
    currentTile = progress.currentTile || 0;
    guesses = progress.guesses ? [...progress.guesses] : [];
    isGameOver = progress.isGameOver || false;
    startTime = progress.startTime || null;
    elapsedTime = progress.elapsedTime || 0;
    targetWord = progress.targetWord;
    isSubmitting = false; // Ensure we can accept input


    // Restore the board and keyboard state
    setTimeout(() => {
        restoreBoardState();
        restoreKeyboardState();
        if (startTime && !isGameOver) {
            // Resume timer without resetting startTime
            timerInterval = setInterval(updateTimerDisplay, 100);
            updateTimerDisplay();
        }
    }, 100);
}

function restoreBoardState() {
    // Clear the board first
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    // Recreate the board
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

    // Restore completed guesses
    console.log('Restoring guesses:', guesses);
    console.log('Target word for checking:', targetWord);

    guesses.forEach((guess, rowIndex) => {
        console.log(`Restoring guess ${rowIndex}: ${guess}`);
        for (let i = 0; i < WORD_LENGTH; i++) {
            const tile = document.getElementById(`row-${rowIndex}-tile-${i}`);
            console.log(`Setting tile ${rowIndex}-${i} to ${guess[i]}`);
            tile.textContent = guess[i];
            tile.classList.add('filled');

            // Apply the result styling
            const result = checkGuess(guess, targetWord);
            console.log(`Result for ${guess}: ${result}`);
            tile.classList.add(result[i]);
        }
    });

    // Restore current row if game is not over
    if (!isGameOver && currentRow < MAX_GUESSES && currentTile > 0) {
        // Restore partially typed letters in current row
        const gameState = multiplayerData.gameStates[currentPlayerName];
        if (gameState && gameState.currentProgress && gameState.currentProgress.currentLetters) {
            for (let i = 0; i < currentTile; i++) {
                const tile = document.getElementById(`row-${currentRow}-tile-${i}`);
                tile.textContent = gameState.currentProgress.currentLetters[i] || '';
                if (tile.textContent) tile.classList.add('filled');
            }
        }
    }
}

function restoreKeyboardState() {
    // Restore keyboard coloring based on guesses
    guesses.forEach(guess => {
        const result = checkGuess(guess, targetWord);
        for (let i = 0; i < guess.length; i++) {
            const letter = guess[i];
            const key = document.querySelector(`[data-key="${letter}"]`);
            if (key) {
                // Remove existing classes
                key.classList.remove('correct', 'present', 'absent');
                // Add the appropriate class
                key.classList.add(result[i]);
            }
        }
    });
}

// Handle window focus/blur for timer accuracy
window.addEventListener('blur', () => {
    if (timerInterval && startTime && !isGameOver) {
        // Store current elapsed time when window loses focus
        elapsedTime = Date.now() - startTime;
        clearInterval(timerInterval);
        timerInterval = null;
    }
});

window.addEventListener('focus', () => {
    if (startTime && !isGameOver && !timerInterval) {
        // Resume timer when window regains focus
        // Adjust startTime to account for the time spent unfocused
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimerDisplay, 100);
        updateTimerDisplay();
    }
});

function restoreCompletedGame(gameState) {
    console.log('=== RESTORING COMPLETED GAME ===');
    console.log('Full gameState:', JSON.stringify(gameState, null, 2));
    console.log('gameState.guesses:', gameState.guesses);
    console.log('gameState.timeTaken:', gameState.timeTaken);
    console.log('gameState.word:', gameState.word);
    console.log('gameState.won:', gameState.won);
    console.log('gameState.attempts:', gameState.attempts);

    // Set game as completed and show final state
    isGameOver = true;
    targetWord = gameState.word;
    guesses = gameState.guesses || [];
    currentRow = gameState.attempts || guesses.length;
    currentTile = 0;
    elapsedTime = gameState.timeTaken ? gameState.timeTaken * 1000 : 0;
    startTime = null;

    console.log('After setting variables:');
    console.log('targetWord:', targetWord);
    console.log('guesses:', guesses);
    console.log('guesses.length:', guesses.length);
    console.log('currentRow:', currentRow);
    console.log('elapsedTime:', elapsedTime);

    // Update timer display with final time
    updateTimerDisplayForCompleted(gameState.timeTaken || 0);

    // Build the board to show the final state
    setTimeout(() => {
        console.log('About to restore board state...');
        restoreBoardState();
        restoreKeyboardState();

        // Show the final result message
        if (gameState.won) {
            showMessage('Game completed - Word found!');
        } else {
            showMessage(`Game completed - Word was: ${targetWord}`);
        }
    }, 100);
}

function updateTimerDisplayForCompleted(timeInSeconds) {
    const timerEl = document.getElementById('timer');
    if (!timerEl) return;

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerEl.textContent = formattedTime;
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

    // Back button
    const backBtn = document.getElementById('back-button');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (isMultiplayerMode) {
                window.location.href = 'multiplayer-game.html';
            } else {
                window.location.href = 'index.html';
            }
        });
    }

    // Submit button
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            handleKeyPress('ENTER');
        });
    }

    // Delete button
    const deleteBtn = document.getElementById('delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            handleKeyPress('BACKSPACE');
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