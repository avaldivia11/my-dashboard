export function getPokemonTypeColor(
  types: { type: { name: string } }[]
): string {
  const type = types?.[0]?.type?.name

  const typeColorMap: Record<string, string> = {
    normal: 'border-gray-400',
    fire: 'border-red-500',
    water: 'border-blue-500',
    electric: 'border-yellow-400',
    grass: 'border-green-500',
    ice: 'border-cyan-300',
    fighting: 'border-red-700',
    poison: 'border-purple-500',
    ground: 'border-yellow-700',
    flying: 'border-sky-300',
    psychic: 'border-pink-500',
    bug: 'border-lime-500',
    rock: 'border-yellow-800',
    ghost: 'border-indigo-700',
    dragon: 'border-indigo-500',
    dark: 'border-gray-700',
    steel: 'border-gray-500',
    fairy: 'border-pink-300'
  }

  return typeColorMap[type] || 'border-gray-300' // color por defecto si no hay tipo válido
}
