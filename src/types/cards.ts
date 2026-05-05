export type StatName = 'fight' | 'search' | 'sneak' | 'talk' | 'think' | 'health' | 'focus'

export type Difficulty = 'auto' | 'easy' | 'medium' | 'hard' | 'impossible'

export type Modifier = "+2" | "+1" | "-1"

export type EntityCardType = 'ally' | 'beast' | 'enemy' | 'location' | 'race' | 'class' | 'treasure' | 'villain'

export type QuestCardType = 'quest' | 'objective'

export type CardStat = {
  stat: StatName
  difficulty?: Difficulty
  modifier?: Modifier
}

export type CardSection = {
  header?: string
  details?: string
  name?: string
  description?: string
}

export type EntityCardData = {
  card_type: string
  name: string
  image: string
  offset?: string
  categories?: string[]
  slot?: CardSection
  ability?: CardSection
  stats: CardStat[]
}

export type QuestCardData = {
  card_type: string
  name: string
  public_description: string
  gm_notes: string
  flow: CardSection[]
}

export type CategoryCardData = {
  card_type: string
  text: string
}