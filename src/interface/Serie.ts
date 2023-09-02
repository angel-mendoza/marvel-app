export interface Serie {
  id: number,
  title: string,
  description: string | null,
  resourceURI: string,
  urls: Url[],
  startYear: number,
  endYear: number,
  rating: string,
  type: string,
  modified: string,
  thumbnail: Thumbnail,
  creators: Creator[],
  characters: Character,
  stories: Story,
  comics: Comic,
  next: RelatedSeries | null
  previous: RelatedSeries | null
}

export interface RelatedSeries {
  name: string,
  resourceURI: string
}

export interface Item {
  available: number,
  collectionURI: string,
  returned: number
}

export interface Comic extends Item{
  items: ItemComic[]
}

export interface ItemComic {
  resourceURI: string,
  name: string,
}

export interface Story extends Item{
  items: ItemStory[]
}

export interface ItemStory {
  resourceURI: string,
  name: string,
  type: string
}
export interface Url {
  type: string,
  url: string
}

export interface Thumbnail {
  path: string,
  extension: string,
}

export interface Creator extends Item {
  items: ItemCreator[],
}

export interface ItemCreator {
  resourceURI: string,
  name: string,
  role: string
}

export interface Character extends Item {
  items: ItemCharacter[]
}
export interface ItemCharacter {
  name: string,
  resourceURI: string,
}







