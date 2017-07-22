'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GREATAXE$HANDAXE$RAP;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  STAGE_TYPES: {
    EASY: 'EASY',
    MEDIUM: 'MEDIUM',
    HARD: 'HARD'
  },
  ERRORS: {
    INVALID_MONSTER_NAME: 'A monster does not exist with the provided name'
  }
};
var _CONSTANTS$WEAPONS = CONSTANTS.WEAPONS,
    RAPIER = _CONSTANTS$WEAPONS.RAPIER,
    GREATAXE = _CONSTANTS$WEAPONS.GREATAXE,
    HANDAXE = _CONSTANTS$WEAPONS.HANDAXE,
    DAGGER = _CONSTANTS$WEAPONS.DAGGER,
    MACE = _CONSTANTS$WEAPONS.MACE,
    LIGHT_CROSSBOW = _CONSTANTS$WEAPONS.LIGHT_CROSSBOW,
    SCIMITAR = _CONSTANTS$WEAPONS.SCIMITAR,
    GREATSWORD = _CONSTANTS$WEAPONS.GREATSWORD,
    SHORTSWORD = _CONSTANTS$WEAPONS.SHORTSWORD,
    LANCE = _CONSTANTS$WEAPONS.LANCE,
    JAVELIN = _CONSTANTS$WEAPONS.JAVELIN,
    LONGBOW = _CONSTANTS$WEAPONS.LONGBOW,
    SHORTBOW = _CONSTANTS$WEAPONS.SHORTBOW,
    QUARTERSTAFF = _CONSTANTS$WEAPONS.QUARTERSTAFF,
    _CONSTANTS$WEAPON_TYP = CONSTANTS.WEAPON_TYPES,
    SIMPLE = _CONSTANTS$WEAPON_TYP.SIMPLE,
    MARTIAL = _CONSTANTS$WEAPON_TYP.MARTIAL,
    _CONSTANTS$DAMAGE_TYP = CONSTANTS.DAMAGE_TYPES,
    ACID = _CONSTANTS$DAMAGE_TYP.ACID,
    BLUDGEONING = _CONSTANTS$DAMAGE_TYP.BLUDGEONING,
    COLD = _CONSTANTS$DAMAGE_TYP.COLD,
    FIRE = _CONSTANTS$DAMAGE_TYP.FIRE,
    FORCE = _CONSTANTS$DAMAGE_TYP.FORCE,
    LIGHTNING = _CONSTANTS$DAMAGE_TYP.LIGHTNING,
    NECROTIC = _CONSTANTS$DAMAGE_TYP.NECROTIC,
    PIERCING = _CONSTANTS$DAMAGE_TYP.PIERCING,
    POISON = _CONSTANTS$DAMAGE_TYP.POISON,
    PSYCHIC = _CONSTANTS$DAMAGE_TYP.PSYCHIC,
    RADIANT = _CONSTANTS$DAMAGE_TYP.RADIANT,
    SLASHING = _CONSTANTS$DAMAGE_TYP.SLASHING,
    THUNDER = _CONSTANTS$DAMAGE_TYP.THUNDER,
    _CONSTANTS$ATTACK_TYP = CONSTANTS.ATTACK_TYPES,
    MELEE = _CONSTANTS$ATTACK_TYP.MELEE,
    RANGED = _CONSTANTS$ATTACK_TYP.RANGED;
exports.default = (_GREATAXE$HANDAXE$RAP = {}, _defineProperty(_GREATAXE$HANDAXE$RAP, GREATAXE, {
  name: "swing greataxe",
  weaponType: MARTIAL,
  attackType: MELEE,
  targetCount: 1,
  damage: 12,
  damageType: SLASHING
}), _defineProperty(_GREATAXE$HANDAXE$RAP, HANDAXE, {
  name: "swing handaxe",
  weaponType: SIMPLE,
  attackType: MELEE,
  targetCount: 1,
  damage: 6,
  damageType: SLASHING
}), _defineProperty(_GREATAXE$HANDAXE$RAP, RAPIER, {
  name: "stab with rapier",
  weaponType: MARTIAL,
  attackType: MELEE,
  targetCount: 1,
  damage: 8,
  damageType: PIERCING,
  finesse: true
}), _defineProperty(_GREATAXE$HANDAXE$RAP, DAGGER, {
  name: "stab with dagger",
  weaponType: SIMPLE,
  attackType: MELEE,
  targetCount: 1,
  damage: 4,
  damageType: PIERCING,
  finesse: true
}), _defineProperty(_GREATAXE$HANDAXE$RAP, MACE, {
  name: "swing mace",
  weaponType: SIMPLE,
  attackType: MELEE,
  targetCount: 1,
  damage: 6,
  damageType: BLUDGEONING
}), _defineProperty(_GREATAXE$HANDAXE$RAP, LIGHT_CROSSBOW, {
  name: "shoot light crossbow",
  weaponType: SIMPLE,
  attackType: RANGED,
  targetCount: 1,
  damage: 8,
  damageType: PIERCING
}), _defineProperty(_GREATAXE$HANDAXE$RAP, SCIMITAR, {
  name: "swing scimitar",
  weaponType: SIMPLE,
  attackType: MELEE,
  targetCount: 1,
  damage: 6,
  damageType: SLASHING
}), _defineProperty(_GREATAXE$HANDAXE$RAP, GREATSWORD, {
  name: "swing greatsword",
  weaponType: MARTIAL,
  attackType: MELEE,
  targetCount: 1,
  damage: 12,
  damageType: SLASHING
}), _defineProperty(_GREATAXE$HANDAXE$RAP, SHORTSWORD, {
  name: "swing shortsword",
  weaponType: SIMPLE,
  attackType: MELEE,
  targetCount: 1,
  damage: 6,
  damageType: PIERCING,
  finesse: true
}), _defineProperty(_GREATAXE$HANDAXE$RAP, LANCE, {
  name: "pierce with lance",
  weaponType: MARTIAL,
  attackType: MELEE,
  targetCount: 1,
  damage: 12,
  damageType: PIERCING
}), _defineProperty(_GREATAXE$HANDAXE$RAP, JAVELIN, {
  name: "throws a javelin",
  weaponType: SIMPLE,
  attackType: RANGED,
  targetCount: 1,
  damage: 6,
  damageType: PIERCING
}), _defineProperty(_GREATAXE$HANDAXE$RAP, LONGBOW, {
  name: "shoot longbow",
  weaponType: MARTIAL,
  attackType: RANGED,
  targetCount: 1,
  damage: 8,
  damageType: PIERCING
}), _defineProperty(_GREATAXE$HANDAXE$RAP, SHORTBOW, {
  name: "shoot shortbow",
  weaponType: SIMPLE,
  attackType: RANGED,
  targetCount: 1,
  damage: 6,
  damageType: PIERCING
}), _defineProperty(_GREATAXE$HANDAXE$RAP, QUARTERSTAFF, {
  name: "swing quarterstaff",
  weaponType: SIMPLE,
  attackType: MELEE,
  targetCount: 1,
  damage: 6,
  damageType: BLUDGEONING
}), _GREATAXE$HANDAXE$RAP);