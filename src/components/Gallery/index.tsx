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

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'video',
    url: zelda
  }
]

export const Gallery = ({ defaultCover, name }: GalleryProps) => {
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
            <Item key={index + 1}>
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
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Fechar" />
          </header>
          <img src={hogwarts_zoom} alt="Hogwarts Legacy" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
