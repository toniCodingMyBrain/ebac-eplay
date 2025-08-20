import { useState } from 'react'

import { GalleryItem } from '../../pages/Home'

import { Section } from '../Section'
import * as S from './styles'

import closeIcon from '../../assets/icons/close.png'
import playIcon from '../../assets/icons/play.png'
import zoomIcon from '../../assets/icons/zoom.png'

interface ModalState extends GalleryItem {
  isVisible: boolean
}

type GalleryProps = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

export const Gallery = ({ defaultCover, name, items }: GalleryProps) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoomIcon
    return playIcon
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.ItemsList>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img src={getMediaIcon(media)} alt="Maximizar a mídia" />
              </S.Action>
            </S.Item>
          ))}
        </S.ItemsList>
      </Section>
      <S.Modal className={modal.isVisible === true ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIcon} alt="Fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </>
  )
}
