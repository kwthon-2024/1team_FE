import { Caption, H4, Text } from '../atoms'
import * as S from './CardItem.styled'

export const CardItem = ({ item, cardId }) => {
  const {
    mailDate,
    mailName,
    senderId,
    name,
    photo: { photoUrl },
  } = item
  const isOdd = cardId % 2 === 1

  return (
    <S.Wrapper isOdd={isOdd}>
      <S.Image src={photoUrl}></S.Image>
      <Caption>{mailDate}</Caption>
      <H4 style={{ margin: '5px 0' }}>{mailName}</H4>
      <Text>
        {senderId} {name}
      </Text>
    </S.Wrapper>
  )
}
