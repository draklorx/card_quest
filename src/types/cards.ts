export type AbilityName = 'fight' | 'search' | 'sneak' | 'talk' | 'think'

export type Difficulty = 'auto' | 'easy' | 'medium' | 'hard' | 'impossible'

export type CardAbility = {
  ability?: AbilityName
  difficulty?: Difficulty
  modifier?: string
}

export type CardSection = {
  header: string
  details: string
}

export type EntityCardData = {
  id: string
  image?: string
  offset?: string
  feat?: CardSection
  name: string
  abilities: CardAbility[]
}


export type EncounterCardData = {
  id: string
  name: string
  public_description: string
  gm_notes: string
  flow: CardSection[]
}
