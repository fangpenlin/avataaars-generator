export enum HairColor {
  Auburn = 'Auburn',
  Black = 'Black'
}

export const AllHairColors = [HairColor.Auburn, HairColor.Black]

export const HairColorValues: { [index: string]: string } = {
  [HairColor.Auburn]: '#A55728',
  [HairColor.Black]: '#2C1B18'
}

export default HairColor
