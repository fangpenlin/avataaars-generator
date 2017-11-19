import Option from './Option'

export { default as Option } from './Option'
export { default as OptionContext, OptionContextState } from './OptionContext'
export { default as Selector } from './Selector'
export { default as withOptions } from './withOptions'

export const TopOption = new Option({
  key: 'topType',
  label: 'Top'
})

export const AccessoriesOption = new Option({
  key: 'accessoriesType',
  label: '👓 Accessories'
})

export const ClotheOption = new Option({
  key: 'clotheType',
  label: '👔 Clothes'
})

export const ClotheColorOption = new Option({
  key: 'clotheColor',
  label: '↳ Color Fabric'
})

export const GraphicOption = new Option({
  key: 'graphicType',
  label: '↳ Graphic'
})

export const EyesOption = new Option({
  key: 'eyeType',
  label: '👁 Eyes'
})

export const EyebrowOption = new Option({
  key: 'eyebrowType',
  label: '✏️ Eyebrow'
})

export const mouthOption = new Option({
  key: 'mouthType',
  label: '👄 Mouth'
})

export const allOptions = [
  TopOption,
  AccessoriesOption,
  ClotheOption,
  ClotheColorOption,
  GraphicOption,
  EyesOption,
  EyebrowOption,
  mouthOption
]
