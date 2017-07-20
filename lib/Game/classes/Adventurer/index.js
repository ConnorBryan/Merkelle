'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

var _Entity2 = require('../Entity');

var _Entity3 = _interopRequireDefault(_Entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    FOLK_HERO: 'FOLK HERO',
    GUILD_ARTISAN: 'GUILD ARTISAN',
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
  ERRORS: {
    INVALID_MONSTER_NAME: 'A monster does not exist with the provided name'
  }
};
var ADVENTURER = CONSTANTS.ENTITY_TYPES.ADVENTURER,
    ABILITY_SCORES = CONSTANTS.ABILITY_SCORES,
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
    CLASS_LIST = CONSTANTS.CLASS_LIST,
    _CONSTANTS$RACES = CONSTANTS.RACES,
    DRAGONBORN = _CONSTANTS$RACES.DRAGONBORN,
    HILL_DWARF = _CONSTANTS$RACES.HILL_DWARF,
    MOUNTAIN_DWARF = _CONSTANTS$RACES.MOUNTAIN_DWARF,
    HIGH_ELF = _CONSTANTS$RACES.HIGH_ELF,
    WOOD_ELF = _CONSTANTS$RACES.WOOD_ELF,
    DROW = _CONSTANTS$RACES.DROW,
    FOREST_GNOME = _CONSTANTS$RACES.FOREST_GNOME,
    ROCK_GNOME = _CONSTANTS$RACES.ROCK_GNOME,
    DEEP_GNOME = _CONSTANTS$RACES.DEEP_GNOME,
    HALF_ELF = _CONSTANTS$RACES.HALF_ELF,
    HALF_ORC = _CONSTANTS$RACES.HALF_ORC,
    HALFLING = _CONSTANTS$RACES.HALFLING,
    HUMAN = _CONSTANTS$RACES.HUMAN,
    TIEFLING = _CONSTANTS$RACES.TIEFLING,
    GENASI = _CONSTANTS$RACES.GENASI,
    GOLIATH = _CONSTANTS$RACES.GOLIATH,
    RACE_LIST = CONSTANTS.RACE_LIST,
    ALIGNMENTS = CONSTANTS.ALIGNMENTS,
    ALIGNMENT_LIST = CONSTANTS.ALIGNMENT_LIST,
    _CONSTANTS$BACKGROUND = CONSTANTS.BACKGROUNDS,
    ACOLYTE = _CONSTANTS$BACKGROUND.ACOLYTE,
    CHARLATAN = _CONSTANTS$BACKGROUND.CHARLATAN,
    CRIMINAL = _CONSTANTS$BACKGROUND.CRIMINAL,
    ENTERTAINER = _CONSTANTS$BACKGROUND.ENTERTAINER,
    FOLK_HERO = _CONSTANTS$BACKGROUND.FOLK_HERO,
    GUILD_ARTISAN = _CONSTANTS$BACKGROUND.GUILD_ARTISAN,
    HERMIT = _CONSTANTS$BACKGROUND.HERMIT,
    NOBLE = _CONSTANTS$BACKGROUND.NOBLE,
    OUTLANDER = _CONSTANTS$BACKGROUND.OUTLANDER,
    SAGE = _CONSTANTS$BACKGROUND.SAGE,
    SAILOR = _CONSTANTS$BACKGROUND.SAILOR,
    SOLDIER = _CONSTANTS$BACKGROUND.SOLDIER,
    URCHIN = _CONSTANTS$BACKGROUND.URCHIN,
    BACKGROUND_LIST = CONSTANTS.BACKGROUND_LIST,
    SKILLS = CONSTANTS.SKILLS,
    _CONSTANTS$SKILLS = CONSTANTS.SKILLS,
    ACROBATICS = _CONSTANTS$SKILLS.ACROBATICS,
    ANIMAL_HANDLING = _CONSTANTS$SKILLS.ANIMAL_HANDLING,
    ARCANA = _CONSTANTS$SKILLS.ARCANA,
    ATHLETICS = _CONSTANTS$SKILLS.ATHLETICS,
    DECEPTION = _CONSTANTS$SKILLS.DECEPTION,
    HISTORY = _CONSTANTS$SKILLS.HISTORY,
    INSIGHT = _CONSTANTS$SKILLS.INSIGHT,
    INTIMIDATION = _CONSTANTS$SKILLS.INTIMIDATION,
    INVESTIGATION = _CONSTANTS$SKILLS.INVESTIGATION,
    MEDICINE = _CONSTANTS$SKILLS.MEDICINE,
    NATURE = _CONSTANTS$SKILLS.NATURE,
    PERCEPTION = _CONSTANTS$SKILLS.PERCEPTION,
    PERFORMANCE = _CONSTANTS$SKILLS.PERFORMANCE,
    PERSUASION = _CONSTANTS$SKILLS.PERSUASION,
    RELIGION = _CONSTANTS$SKILLS.RELIGION,
    SLEIGHT_OF_HAND = _CONSTANTS$SKILLS.SLEIGHT_OF_HAND,
    STEALTH = _CONSTANTS$SKILLS.STEALTH,
    SURVIVAL = _CONSTANTS$SKILLS.SURVIVAL,
    SKILL_LIST = CONSTANTS.SKILL_LIST;

var CHANCE = new _chance2.default();

var Adventurer = function (_Entity) {
  _inherits(Adventurer, _Entity);

  function Adventurer() {
    _classCallCheck(this, Adventurer);

    var _this = _possibleConstructorReturn(this, (Adventurer.__proto__ || Object.getPrototypeOf(Adventurer)).call(this, ADVENTURER));

    _this.randomize();
    return _this;
  }

  _createClass(Adventurer, [{
    key: 'randomize',
    value: function randomize() {
      this.name = CHANCE.name();
      this.class = this.generateClass();
      this.level = 1;
      this.background = this.generateBackground();
      this.race = this.generateRace();
      this.alignment = this.generateAlignment();
      this.experiencePoints = 0;
      this.abilityScores = this.generateAbilityScores();
      this.inspiration = false;
      this.proficiencyBonus = 2;
      this.savingThrows = this.getSavingThrows();
      this.skills = this.getBaseSkills();
      this.currentHitpoints = this.getBaseHitpoints();
      this.hitpointMaximum = this.getBaseHitpoints();
      this.temporaryHitpoints = 0;
      // this.hitDiceValue = this.getHitDiceValue();
      // this.hitDiceCount = 1;
      // this.deathSaves = {
      //   successes: 0,
      //   failures: 0,
      // };
      // this.attacks = this.getAttacks();
      // this.spells = this.getSpells();
      // this.equipment = this.getEquipment();
    }
  }, {
    key: 'rollDie',
    value: function rollDie(max) {
      return CHANCE.integer({ min: 1, max: max });
    }
  }, {
    key: 'getModifier',
    value: function getModifier(value) {
      if (value <= 1) return -5;
      if (value <= 3) return -4;
      if (value <= 5) return -3;
      if (value <= 7) return -2;
      if (value <= 9) return -1;
      if (value <= 11) return 0;
      if (value <= 13) return 1;
      if (value <= 15) return 2;
      if (value <= 17) return 3;
      if (value <= 19) return 4;
      if (value <= 21) return 5;
      if (value <= 23) return 6;
      if (value <= 25) return 7;
      if (value <= 27) return 8;
      if (value <= 29) return 9;
      if (value >= 30) return 10;
      return 0;
    }
  }, {
    key: 'getSavingThrows',
    value: function getSavingThrows() {
      var _this2 = this;

      return ABILITY_SCORES.reduce(function (acc, cur) {
        acc[cur] = _this2.getModifier(_this2.abilityScores[cur]);
        return acc;
      }, {});
    }
  }, {
    key: 'getBaseSkills',
    value: function getBaseSkills() {
      var _this3 = this;

      var strSkills = [ATHLETICS];
      var dexSkills = [ACROBATICS, SLEIGHT_OF_HAND, STEALTH];
      var intSkills = [ARCANA, HISTORY, INVESTIGATION, NATURE, RELIGION];
      var wisSkills = [ANIMAL_HANDLING, INSIGHT, MEDICINE, PERCEPTION, SURVIVAL];
      var chaSkills = [DECEPTION, INTIMIDATION, PERFORMANCE, PERSUASION];

      return SKILL_LIST.reduce(function (acc, cur) {
        var skill = SKILLS[cur];

        var value = void 0;

        if (~strSkills.indexOf(skill)) value = _this3.getModifier(_this3.abilityScores.STR);
        if (~dexSkills.indexOf(skill)) value = _this3.getModifier(_this3.abilityScores.DEX);
        if (~intSkills.indexOf(skill)) value = _this3.getModifier(_this3.abilityScores.INT);
        if (~wisSkills.indexOf(skill)) value = _this3.getModifier(_this3.abilityScores.WIS);
        if (~chaSkills.indexOf(skill)) value = _this3.getModifier(_this3.abilityScores.CHA);

        acc[skill] = value;

        return acc;
      }, {});
    }
  }, {
    key: 'getBaseHitpoints',
    value: function getBaseHitpoints() {
      var six = [SORCERER, WIZARD];
      var eight = [ROGUE, WARLOCK, BARD, DRUID, MONK, CLERIC];
      var ten = [PALADIN, FIGHTER, RANGER];
      var twelve = [BARBARIAN];
      var _class = this.class;
      var modifier = this.getModifier(this.abilityScores.CON);

      var base = void 0;

      if (~six.indexOf(_class)) base = 6;
      if (~eight.indexOf(_class)) base = 8;
      if (~ten.indexOf(_class)) base = 10;
      if (~twelve.indexOf(_class)) base = 12;

      return base + modifier;
    }
  }, {
    key: 'generateClass',
    value: function generateClass() {
      return CLASS_LIST[CHANCE.integer({ min: 0, max: CLASS_LIST.length - 1 })];
    }
  }, {
    key: 'generateBackground',
    value: function generateBackground() {
      return BACKGROUND_LIST[CHANCE.integer({ min: 0, max: BACKGROUND_LIST.length - 1 })];
    }
  }, {
    key: 'generateRace',
    value: function generateRace() {
      return RACE_LIST[CHANCE.integer({ min: 0, max: RACE_LIST.length - 1 })];
    }
  }, {
    key: 'generateAlignment',
    value: function generateAlignment() {
      return ALIGNMENT_LIST[CHANCE.integer({ min: 0, max: ALIGNMENT_LIST.length - 1 })];
    }
  }, {
    key: 'generateStat',
    value: function generateStat() {
      var rolls = [];

      for (var i = 0; i < 4; i++) {
        rolls.push(this.rollDie(6));
      }

      var lowest = 6;

      rolls.forEach(function (roll) {
        return roll < lowest && (lowest = roll);
      });

      rolls.splice(rolls.indexOf(lowest), 1);

      return rolls.reduce(function (acc, cur) {
        return acc += cur;
      }, 0);
    }
  }, {
    key: 'generateAbilityScores',
    value: function generateAbilityScores() {
      var _this4 = this;

      return ABILITY_SCORES.reduce(function (acc, cur) {
        acc[cur] = _this4.generateStat();
        return acc;
      }, {});
    }
  }]);

  return Adventurer;
}(_Entity3.default);

exports.default = Adventurer;