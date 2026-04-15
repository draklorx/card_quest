export type AbilityName = 'fight' | 'search' | 'sneak' | 'talk' | 'think'

export type Difficulty = 'auto' | 'easy' | 'medium' | 'hard' | 'impossible'

export type CardAbility = {
  ability?: AbilityName
  difficulty?: Difficulty
  modifier?: string
}

export type EntityCardData = {
  id: string
  image?: string
  offset?: string
  name: string
  abilities: CardAbility[]
}

export type EncounterFlowStep = {
  type: string
  details: string
}

export type EncounterCardData = {
  id: string
  name: string
  public_description: string
  gm_notes: string
  flow: EncounterFlowStep[]
}
