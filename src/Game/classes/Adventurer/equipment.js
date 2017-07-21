/* @flow */
import CONSTANTS from '../../data/constants.json';

const {
  EQUIPMENT: {
    SHIELD,
    LEATHER_ARMOR,
    SCALE_MAIL,
    CHAIN_MAIL,
  },
  ARMOR_TYPES,
  ARMOR_TYPES: {
    LIGHT,
    MEDIUM,
    HEAVY,
  },
} = CONSTANTS;

export default {
  [SHIELD]: {
    name: 'shield',
    type: ARMOR_TYPES.SHIELD,
    armorClass: 2,
  },
  [LEATHER_ARMOR]: {
    name: 'leather armor',
    type: LIGHT,
    armorClass: 11,
  },
  [SCALE_MAIL]: {
    name: 'scale mail',
    type: MEDIUM,
    armorClass: 14,
  },
  [CHAIN_MAIL]: {
    name: 'chain mail',
    type: HEAVY,
    armorClass: 16,
  },
};