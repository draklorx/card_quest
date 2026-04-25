export type StatName = 'fight' | 'search' | 'sneak' | 'talk' | 'think' | 'health' | 'focus'

export type Difficulty = 'auto' | 'easy' | 'medium' | 'hard' | 'impossible'

export type Modifier = "+2" | "+1" | "-1"

export type CardStat = {
  stat: StatName
  modifier?: Modifier
  difficulty?: Difficulty
}

export type CardSection = {
  header?: string
  details?: string
  name?: string
  description?: string
}

export type EntityCardData = {
  id: string
  name: string
  image: string
  offset?: string
  categories?: string[]
  ability?: CardSection
  stats: CardStat[]
}

export type EncounterCardData = {
  id: string
  name: string
  public_description: string
  gm_notes: string
  flow: CardSection[]
}
