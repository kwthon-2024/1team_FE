import * as S from './ToggleFilter.styled'

export const ToggleFilter = ({ filter, setFilter }) => {
  const toggleFilter = () => setFilter((prev) => !prev)

  return (
    <S.Container>
      <S.Button className={filter ? 'selected' : ''} onClick={toggleFilter}>
        receive
      </S.Button>
      <S.Button className={!filter ? 'selected' : ''} onClick={toggleFilter}>
        send
      </S.Button>
    </S.Container>
  )
}
