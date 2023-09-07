import { ItemsProps } from '../types/item'
import { Item } from './item'
import { ItemsContainer } from './styles'

export const Items = ({ items }: ItemsProps) => {
  return (
    <ItemsContainer>
      {items &&
        items.map((item) => {
          const { name, description, image, id } = item
          return (
            <div key={id}>
              <Item id={id} image={image} name={name} description={description} />
            </div>
          )
        })}
    </ItemsContainer>
  )
}
