import { Form } from './form'
import { Items } from './items'
import { useItems } from './hooks/useItems'
import { useSwitchLanguage } from './hooks/useSwitchLanguage'
import { SectionContainer } from '../styles'
export const Index = () => {

  const { items, handleSubmitItem } = useItems()
  useSwitchLanguage()

  return (
    <SectionContainer>
      <Form handleSubmit={handleSubmitItem} />
      <Items items={items} />
    </SectionContainer>
  )
}
