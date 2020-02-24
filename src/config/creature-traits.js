import sougy from '@/config/sougy-colors'
const traits = ['speed', 'sense_range', 'size', 'life_span', 'age']
const traitColors = {
  'speed': sougy.red
  , 'sense_range': sougy.cyan
  , 'size': sougy.turquoise
  , 'life_span': sougy.violet
  , 'age': sougy.yellow
}
const colors = traits.map(k => traitColors[k])
export default Object.freeze({
  traits
  , colors
  , populationColor: sougy.cream
  , hashed: traitColors
})
