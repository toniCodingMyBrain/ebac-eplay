import { Banner } from '../../components/Banner'
import { ProductList } from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

export const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingOnSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        gameList={onSaleGames}
        id="on-sale"
        title="Promoções"
        background="gray"
        isLoading={isLoadingOnSale}
      />
      <ProductList
        gameList={soonGames}
        id="coming-soon"
        title="Em Breve"
        background="black"
        isLoading={isLoadingSoon}
      />
    </>
  )
}
