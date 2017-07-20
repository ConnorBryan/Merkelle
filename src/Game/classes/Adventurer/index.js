/* @flow */
import Chance from 'chance';
import CONSTANTS from '../../data/constants.json';
import Entity from '../Entity';
import type { AbilityScores } from '../Entity/types';
import type {
  Skills,
  DeathSaves,
  Attack,
  Spell,
  Item
} from './types';

const {
  ENTITY_TYPES: { ADVENTURER },
  ABILITY_SCORES,
  CLASSES: {
    BARBARIAN,
    BARD,
    CLERIC,
    DRUID,
    FIGHTER,
    MONK,
    PALADIN,
    RANGER,
    ROGUE,
    SORCERER,
    WARLOCK,
    WIZARD
  },
  CLASS_LIST,
  RACES: {
    DRAGONBORN,
    HILL_DWARF,
    MOUNTAIN_DWARF,
    HIGH_ELF,
    WOOD_ELF,
    DROW,
    FOREST_GNOME,
    ROCK_GNOME,
    DEEP_GNOME,
    HALF_ELF,
    HALF_ORC,
    HALFLING,
    HUMAN,
    TIEFLING,
    GENASI,
    GOLIATH,
  },
  RACE_LIST,
  ALIGNMENTS,
  ALIGNMENT_LIST,
  BACKGROUNDS: {
    ACOLYTE,
    CHARLATAN,
    CRIMINAL,
    ENTERTAINER,
    FOLK_HERO,
    GUILD_ARTISAN,
    HERMIT,
    NOBLE,
    OUTLANDER,
    SAGE,
    SAILOR,
    SOLDIER,
    URCHIN,
  },
  BACKGROUND_LIST,
  SKILLS,
  SKILLS: {
    ACROBATICS,
    ANIMAL_HANDLING,
    ARCANA,
    ATHLETICS,
    DECEPTION,
    HISTORY,
    INSIGHT,
    INTIMIDATION,
    INVESTIGATION,
    MEDICINE,
    NATURE,
    PERCEPTION,
    PERFORMANCE,
    PERSUASION,
    RELIGION,
    SLEIGHT_OF_HAND,
    STEALTH,
    SURVIVAL,
  },
  SKILL_LIST,
} = CONSTANTS;
const CHANCE = new Chance();

export default class Adventurer extends Entity {
  name: string;
  class: string;
  level: number;
  background: string;
  race: string;
  alignment: string;
  experiencePoints: number;
  abilityScores: AbilityScores;
  inspiration: boolean;
  proficiencyBonus: number;
  savingThrows: AbilityScores;
  skills: Skills;
  hitpointMaximum: number;
  currentHitpoints: number;
  temporaryHitpoints: number;
  hitDiceValue: number;
  hitDiceCount: number;
  deathSaves: DeathSaves;
  attacks: Array<Attack>;
  spells: Array<Spell>;
  equipment: Array<Item>;

  constructor() {
    super(ADVENTURER);
    this.randomize();
  }

  randomize(): void {
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

  rollDie(max: number): number {
    return CHANCE.integer({ min: 1, max });
  }

  getModifier(value: number): number {
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

  getSavingThrows(): AbilityScores {
    return ABILITY_SCORES.reduce((acc, cur) => {
      acc[cur] = this.getModifier(this.abilityScores[cur]);
      return acc;
    }, {});
  }

  getBaseSkills(): Skills {
    const strSkills = [
      ATHLETICS,
    ];
    const dexSkills = [
      ACROBATICS,
      SLEIGHT_OF_HAND,
      STEALTH,
    ];
    const intSkills = [
      ARCANA,
      HISTORY,
      INVESTIGATION,
      NATURE,
      RELIGION,
    ];
    const wisSkills = [
      ANIMAL_HANDLING,
      INSIGHT,
      MEDICINE,
      PERCEPTION,
      SURVIVAL,
    ];
    const chaSkills = [
      DECEPTION,
      INTIMIDATION,
      PERFORMANCE,
      PERSUASION,
    ];

    return SKILL_LIST.reduce((acc, cur) => {
      const skill = SKILLS[cur];

      let value;

      if (~strSkills.indexOf(skill)) value = this.getModifier(this.abilityScores.STR);
      if (~dexSkills.indexOf(skill)) value = this.getModifier(this.abilityScores.DEX);
      if (~intSkills.indexOf(skill)) value = this.getModifier(this.abilityScores.INT);
      if (~wisSkills.indexOf(skill)) value = this.getModifier(this.abilityScores.WIS);
      if (~chaSkills.indexOf(skill)) value = this.getModifier(this.abilityScores.CHA);

      acc[skill] = value;

      return acc;
    }, {});
  }

  getBaseHitpoints(): number {
    const six = [SORCERER, WIZARD];
    const eight = [ROGUE, WARLOCK, BARD, DRUID, MONK, CLERIC];
    const ten = [PALADIN, FIGHTER, RANGER];
    const twelve = [BARBARIAN];
    const _class = this.class;
    const modifier = this.getModifier(this.abilityScores.CON);

    let base;

    if (~six.indexOf(_class)) base = 6;
    if (~eight.indexOf(_class)) base = 8;
    if (~ten.indexOf(_class)) base = 10;
    if (~twelve.indexOf(_class)) base = 12;

    return base + modifier;
  }

  generateClass(): string {
    return CLASS_LIST[CHANCE.integer({ min: 0, max: CLASS_LIST.length - 1 })];
  }

  generateBackground(): string {
    return BACKGROUND_LIST[CHANCE.integer({ min: 0, max: BACKGROUND_LIST.length - 1 })];
  }

  generateRace(): string {
    return RACE_LIST[CHANCE.integer({ min: 0, max: RACE_LIST.length - 1 })];
  }

  generateAlignment(): string {
    return ALIGNMENT_LIST[CHANCE.integer({ min: 0, max: ALIGNMENT_LIST.length - 1 })];
  }

  generateStat(): number {
    const rolls = [];

    for (let i = 0; i < 4; i++) {
      rolls.push(this.rollDie(6));
    }

    let lowest = 6;

    rolls.forEach(roll => roll < lowest && (lowest = roll));

    rolls.splice(rolls.indexOf(lowest), 1);

    return rolls.reduce((acc, cur) => (acc += cur), 0);
  }

  generateAbilityScores(): AbilityScores {
    return ABILITY_SCORES.reduce((acc, cur) => {
      acc[cur] = this.generateStat();
      return acc;
    }, {});
  }
}