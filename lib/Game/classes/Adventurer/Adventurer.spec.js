'use strict';

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var CONSTANTS = {
  ABILITY_SCORES: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'],
  CLASSES: {
    BARBARIAN: 'BARBARIAN',
    BARD: 'BARD',
    CLERIC: 'CLERIC',
    DRUID: 'DRUID',
    FIGHTER: 'FIGHTER',
    MONK: 'MONK',
    PALADIN: 'PALADIN',
    RANGER: 'RANGER',
    ROGUE: 'ROGUE',
    SORCERER: 'SORCERER',
    WARLOCK: 'WARLOCK',
    WIZARD: 'WIZARD'
  },
  CLASS_LIST: ['BARBARIAN', 'BARD', 'CLERIC', 'DRUID', 'FIGHTER', 'MONK', 'PALADIN', 'RANGER', 'ROGUE', 'SORCERER', 'WARLOCK', 'WIZARD'],
  RACES: {
    DRAGONBORN: 'DRAGONBORN',
    HILL_DWARF: 'HILL DWARF',
    MOUNTAIN_DWARF: 'MOUNTAIN DWARF',
    HIGH_ELF: 'HIGH ELF',
    WOOD_ELF: 'WOOD ELF',
    DROW: 'DROW',
    FOREST_GNOME: 'FOREST GNOME',
    ROCK_GNOME: 'ROCK GNOME',
    DEEP_GNOME: 'DEEP GNOME',
    HALF_ELF: 'HALF-ELF',
    HALF_ORC: 'HALF-ORC',
    HALFLING: 'HALFLING',
    HUMAN: 'HUMAN',
    TIEFLING: 'TIEFLING',
    GENASI: 'GENASI',
    GOLIATH: 'GOLIATH'
  },
  RACE_LIST: ['DRAGONBORN', 'HILL_DWARF', 'MOUNTAIN_DWARF', 'HIGH_ELF', 'WOOD_ELF', 'DROW', 'FOREST_GNOME', 'ROCK_GNOME', 'DEEP_GNOME', 'HALF_ELF', 'HALF_ORC', 'HALFLING', 'HUMAN', 'TIEFLING', 'GENASI', 'GOLIATH'],
  ALIGNMENTS: {
    LAWFUL_GOOD: 'LAWFUL GOOD',
    NEUTRAL_GOOD: 'NEUTRAL GOOD',
    CHAOTIC_GOOD: 'CHAOTIC GOOD',
    LAWFUL_NEUTRAL: 'LAWFUL NEUTRAL',
    TRUE_NEUTRAL: 'TRUE NEUTRAL',
    CHAOTIC_NEUTRAL: 'CHAOTIC NEUTRAL',
    LAWFUL_EVIL: 'LAWFUL EVIL',
    NEUTRAL_EVIL: 'NEUTRAL EVIL',
    CHAOTIC_EVIL: 'CHAOTIC EVIL'
  },
  ALIGNMENT_LIST: ['LAWFUL_GOOD', 'NEUTRAL_GOOD', 'CHAOTIC_GOOD', 'LAWFUL_NEUTRAL', 'TRUE_NEUTRAL', 'CHAOTIC_NEUTRAL', 'LAWFUL_EVIL', 'NEUTRAL_EVIL', 'CHAOTIC_EVIL'],
  BACKGROUNDS: {
    ACOLYTE: 'ACOLYTE',
    CHARLATAN: 'CHARLATAN',
    CRIMINAL: 'CRIMINAL',
    ENTERTAINER: 'ENTERTAINER',
    FOLK_HERO: 'FOLK_HERO',
    GUILD_ARTISAN: 'GUILD_ARTISAN',
    HERMIT: 'HERMIT',
    NOBLE: 'NOBLE',
    OUTLANDER: 'OUTLANDER',
    SAGE: 'SAGE',
    SAILOR: 'SAILOR',
    SOLDIER: 'SOLDIER',
    URCHIN: 'URCHIN'
  },
  BACKGROUND_LIST: ['ACOLYTE', 'CHARLATAN', 'CRIMINAL', 'ENTERTAINER', 'FOLK_HERO', 'GUILD_ARTISAN', 'HERMIT', 'NOBLE', 'OUTLANDER', 'SAGE', 'SAILOR', 'SOLDIER', 'URCHIN'],
  SKILLS: {
    ACROBATICS: 'acrobatics',
    ANIMAL_HANDLING: 'animalHandling',
    ARCANA: 'arcana',
    ATHLETICS: 'athletics',
    DECEPTION: 'deception',
    HISTORY: 'history',
    INSIGHT: 'insight',
    INTIMIDATION: 'intimidation',
    INVESTIGATION: 'investigation',
    MEDICINE: 'medicine',
    NATURE: 'nature',
    PERCEPTION: 'perception',
    PERFORMANCE: 'performance',
    PERSUASION: 'persuasion',
    RELIGION: 'religion',
    SLEIGHT_OF_HAND: 'sleightOfHand',
    STEALTH: 'stealth',
    SURVIVAL: 'survival'
  },
  SKILL_LIST: ['ACROBATICS', 'ANIMAL_HANDLING', 'ARCANA', 'ATHLETICS', 'DECEPTION', 'HISTORY', 'INSIGHT', 'INTIMIDATION', 'INVESTIGATION', 'MEDICINE', 'NATURE', 'PERCEPTION', 'PERFORMANCE', 'PERSUASION', 'RELIGION', 'SLEIGHT_OF_HAND', 'STEALTH', 'SURVIVAL'],
  WEAPONS: {
    RAPIER: 'RAPIER',
    GREATAXE: 'GREATAXE',
    HANDAXE: 'HANDAXE',
    DAGGER: 'DAGGER',
    MACE: 'MACE',
    LIGHT_CROSSBOW: 'LIGHT CROSSBOW',
    SCIMITAR: 'SCIMITAR',
    GREATSWORD: 'GREATSWORD',
    SHORTSWORD: 'SHORTSWORD',
    LANCE: 'LANCE',
    JAVELIN: 'JAVELIN',
    LONGBOW: 'LONGBOW',
    SHORTBOW: 'SHORTBOW',
    QUARTERSTAFF: 'QUARTERSTAFF'
  },
  EQUIPMENT: {
    SHIELD: 'SHIELD',
    LEATHER_ARMOR: 'LEATHER_ARMOR',
    SCALE_MAIL: 'SCALE_MAIL',
    CHAIN_MAIL: 'CHAIN_MAIL'
  },
  CHALLENGE_RATING_TYPES: {
    ONE_EIGHTH: 'ONE EIGHTH',
    ONE_FOURTH: 'ONE FOURTH',
    ONE_HALF: 'ONE HALF',
    ONE: 'ONE',
    TWO: 'TWO',
    THREE: 'THREE',
    FOUR: 'FOUR',
    FIVE: 'FIVE',
    SIX: 'SIX',
    SEVEN: 'SEVEN',
    EIGHT: 'EIGHT',
    NINE: 'NINE',
    TEN: 'TEN',
    ELEVEN: 'ELEVEN',
    TWELVE: 'TWELVE',
    THIREEN: 'THIRTEEN',
    FOURTEEN: 'FOURTEEN',
    FIFTEEN: 'FIFTEEN',
    SIXTEEN: 'SIXTEEN',
    SEVENTEEN: 'SEVENTEEN',
    EIGHTEEN: 'EIGHTEEN',
    NINETEEN: 'NINETEEN',
    TWENTY: 'TWENTY',
    TWENTY_ONE: 'TWENTY_ONE',
    TWENTY_TWO: 'TWENTY_TWO',
    TWENTY_THREEE: 'TWENTY_THREE',
    TWENTY_FOUR: 'TWENTY_FOUR',
    THIRTY: 'THIRTY'
  },
  ENTITY_TYPES: {
    ADVENTURER: 'ADVENTURER',
    MONSTER: 'MONSTER'
  },
  WEAPON_TYPES: {
    SIMPLE: 'SIMPLE',
    MARTIAL: 'MARTIAL'
  },
  ATTACK_TYPES: {
    MELEE: 'MELEE',
    RANGED: 'RANGED'
  },
  DAMAGE_TYPES: {
    ACID: 'ACID',
    BLUDGEONING: 'BLUDGEONING',
    COLD: 'COLD',
    FIRE: 'FIRE',
    FORCE: 'FORCE',
    LIGHTNING: 'LIGHTNING',
    NECROTIC: 'NECROTIC',
    PIERCING: 'PIERCING',
    POISON: 'POISON',
    PSYCHIC: 'PSYCHIC',
    RADIANT: 'RADIANT',
    SLASHING: 'SLASHING',
    THUNDER: 'THUNDER'
  },
  ARMOR_TYPES: {
    SHIELD: 'SHIELD',
    LIGHT: 'LIGHT',
    MEDIUM: 'MEDIUM',
    HEAVY: 'HEAVY'
  },
  TERRAIN_TYPES: {
    GRASSLAND: 'GRASSLAND',
    ARCTIC: 'ARCTIC',
    COAST: 'COAST',
    DESERT: 'DESERT',
    FOREST: 'FOREST',
    MOUNTAIN: 'MOUNTAIN',
    SWAMP: 'SWAMP',
    UNDERDARK: 'UNDERDARK'
  },
  ERRORS: {
    INVALID_MONSTER_NAME: 'A monster does not exist with the provided name'
  }
};
var ABILITY_SCORES = CONSTANTS.ABILITY_SCORES,
    CLASSES = CONSTANTS.CLASSES,
    _CONSTANTS$CLASSES = CONSTANTS.CLASSES,
    BARBARIAN = _CONSTANTS$CLASSES.BARBARIAN,
    BARD = _CONSTANTS$CLASSES.BARD,
    CLERIC = _CONSTANTS$CLASSES.CLERIC,
    DRUID = _CONSTANTS$CLASSES.DRUID,
    FIGHTER = _CONSTANTS$CLASSES.FIGHTER,
    MONK = _CONSTANTS$CLASSES.MONK,
    PALADIN = _CONSTANTS$CLASSES.PALADIN,
    RANGER = _CONSTANTS$CLASSES.RANGER,
    ROGUE = _CONSTANTS$CLASSES.ROGUE,
    SORCERER = _CONSTANTS$CLASSES.SORCERER,
    WARLOCK = _CONSTANTS$CLASSES.WARLOCK,
    WIZARD = _CONSTANTS$CLASSES.WIZARD,
    RACES = CONSTANTS.RACES,
    ALIGNMENTS = CONSTANTS.ALIGNMENTS,
    BACKGROUNDS = CONSTANTS.BACKGROUNDS;


describe('(Adventurer)', function () {
  var adventurer = void 0;

  beforeEach(function () {
    return adventurer = new _index2.default();
  });

  it('should have a valid name on generation', function () {
    (0, _chai.expect)(adventurer.name).to.be.a('string');
  });

  it('should have a valid class on generation', function () {
    (0, _chai.expect)(CLASSES[adventurer.class]).to.exist;
  });

  it('should have a valid background on generation', function () {
    (0, _chai.expect)(BACKGROUNDS[adventurer.background]).to.exist;
  });

  it('should have a valid race on generation', function () {
    (0, _chai.expect)(RACES[adventurer.race]).to.exist;
  });

  it('should be a fresh level one', function () {
    (0, _chai.expect)(adventurer.level).to.equal(1);
    (0, _chai.expect)(adventurer.experiencePoints).to.equal(0);
  });

  it('should have valid ability scores on generation', function () {
    var _expect$to$have$all;

    (_expect$to$have$all = (0, _chai.expect)(adventurer.abilityScores).to.have.all).keys.apply(_expect$to$have$all, _toConsumableArray(ABILITY_SCORES));
    Object.keys(adventurer.abilityScores).forEach(function (key) {
      (0, _chai.expect)(adventurer.abilityScores[key]).to.be.gt(2);
      (0, _chai.expect)(adventurer.abilityScores[key]).to.be.lt(19);
    });
  });

  it('should have no inspiration on generation', function () {
    (0, _chai.expect)(adventurer.inspiration).to.be.false;
  });

  it('should have a base proficiency bonus of two on generation', function () {
    (0, _chai.expect)(adventurer.proficiencyBonus).to.equal(2);
  });

  it('should have valid saving throws on generation', function () {
    var _expect$to$have$all2;

    (_expect$to$have$all2 = (0, _chai.expect)(adventurer.savingThrows).to.have.all).keys.apply(_expect$to$have$all2, _toConsumableArray(ABILITY_SCORES));
    Object.keys(adventurer.savingThrows).forEach(function (key) {
      (0, _chai.expect)(adventurer.savingThrows[key]).to.be.gt(-5);
      (0, _chai.expect)(adventurer.savingThrows[key]).to.be.lt(5);
    });
  });

  it('should get the correct base skills', function () {
    adventurer.abilityScores.STR = 10;
    adventurer.abilityScores.DEX = 6;
    adventurer.abilityScores.WIS = 14;
    adventurer.skills = adventurer.getBaseSkills();
    (0, _chai.expect)(adventurer.skills.athletics).to.equal(0);
    (0, _chai.expect)(adventurer.skills.acrobatics).to.equal(-2);
    (0, _chai.expect)(adventurer.skills.animalHandling).to.equal(2);
  });

  it('should have the correct base hitpoints', function () {
    adventurer.class = ROGUE;
    adventurer.abilityScores.CON = 10;
    (0, _chai.expect)(adventurer.getBaseHitpoints()).to.equal(8);

    adventurer.class = BARBARIAN;
    adventurer.abilityScores.CON = 14;
    (0, _chai.expect)(adventurer.getBaseHitpoints()).to.equal(14);
  });

  it('should have the correct initial attacks', function () {
    adventurer.class = BARBARIAN;
    adventurer.attacks = adventurer.getAttacks();
    (0, _chai.expect)(adventurer.attacks[0].name).to.equal('swing greataxe');

    adventurer.class = WIZARD;
    adventurer.attacks = adventurer.getAttacks();
    (0, _chai.expect)(adventurer.attacks[0].name).to.equal('swing quarterstaff');
  });

  it('should have the correct starting equipment', function () {
    adventurer.class = BARBARIAN;
    adventurer.equipment = adventurer.getStartingEquipment();
    (0, _chai.expect)(adventurer.equipment.length).to.equal(0);

    adventurer.class = CLERIC;
    adventurer.equipment = adventurer.getStartingEquipment();
    (0, _chai.expect)(adventurer.equipment.length).to.equal(2);

    adventurer.class = WARLOCK;
    adventurer.equipment = adventurer.getStartingEquipment();
    (0, _chai.expect)(adventurer.equipment.length).to.equal(1);
  });
});