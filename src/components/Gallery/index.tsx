import { useState } from 'react'

import { GalleryItem } from '../../pages/Home'

import { Section } from '../Section'
import { ItemsList, Item, Action, Modal, ModalContent } from './styles'

import zelda from '../../assets/images/zelda.png'
import hogwarts_zoom from '../../assets/images/hogwarts_zoom.png'

import close from '../../assets/icons/close.png'
import playIcon from '../../assets/icons/play.png'
import zoomIcon from '../../assets/icons/zoom.png'

type GalleryProps = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwarts_zoom
  },
  {
    type: 'image',
    url: hogwarts_zoom
  },
  {
    type: 'video',
    url: hogwarts_zoom
  }
]

export const Gallery = ({ defaultCover, name }: GalleryProps) => {
  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

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

  return (
    <>
      <Section title="Galeria de Fotos" background="black">
        <ItemsList>
          {mock.map((media, index) => (
            <Item
              key={index + 1}
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
              <Action>
                <img src={getMediaIcon(media)} alt="Maximizar a mídia" />
              </Action>
            </Item>
          ))}
        </ItemsList>
      </Section>
      <Modal className={modal.isVisible === true ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Fechar" onClick={() => closeModal()} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="Hogwarts Legacy" />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}
