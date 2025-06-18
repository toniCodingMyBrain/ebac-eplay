import { Banner } from '../../components/Banner'
import { ProductList } from '../../components/ProductList'

import { useEffect, useState } from 'react'
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
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  /* const [promotions, setPromotions] = useState<Game[]>([])
  const [soon, setSoon] = useState<Game[]>([])

   useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromotions(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setSoon(res))
  }, []) */

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList
          gameList={onSaleGames}
          id="on-sale"
          title="Promoções"
          background="gray"
        />
        <ProductList
          gameList={soonGames}
          id="coming-soon"
          title="Em Breve"
          background="black"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
