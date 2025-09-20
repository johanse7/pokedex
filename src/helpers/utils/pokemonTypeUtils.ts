import styles from "@/shared/styles/PokemonType.module.css";

export const typeClassMap = {
  bug: styles.typeBug,
  dark: styles.typeDark,
  dragon: styles.typeDragon,
  electric: styles.typeElectric,
  fairy: styles.typeFairy,
  fighting: styles.typeFighting,
  fire: styles.typeFire,
  flying: styles.typeFlying,
  ghost: styles.typeGhost,
  normal: styles.typeNormal,
  grass: styles.typeGrass,
  ground: styles.typeGround,
  ice: styles.typeIce,
  poison: styles.typePoison,
  psychic: styles.typePsychic,
  rock: styles.typeRock,
  steel: styles.typeSteel,
  water: styles.typeWater,
} as const;

export const textClassMap = {
  bug: styles.textBug,
  dark: styles.textDark,
  dragon: styles.textDragon,
  electric: styles.textElectric,
  fairy: styles.textFairy,
  fighting: styles.textFighting,
  fire: styles.textFire,
  flying: styles.textFlying,
  ghost: styles.textGhost,
  normal: styles.textNormal,
  grass: styles.textGrass,
  ground: styles.textGround,
  ice: styles.textIce,
  poison: styles.textPoison,
  psychic: styles.textPsychic,
  rock: styles.textRock,
  steel: styles.textSteel,
  water: styles.textWater,
} as const;

export type PokemonTypeKey = keyof typeof typeClassMap;

export function getTypeClass(type: PokemonTypeKey): string {
  return typeClassMap[type];
}

export function getTextTypeClass(type: PokemonTypeKey): string {
  return textClassMap[type];
}
