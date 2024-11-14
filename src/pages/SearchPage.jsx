import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

export const SearchPage = () => {
  return (
    <StyledDiv>
      <StyledForm>
        <SearchIcon />
        <StyledInput type='text' placeholder='학번, 학과, 이름을 통해 친구의 트리를 찾아보세요!' />
        <StyledButton>Search</StyledButton>
      </StyledForm>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
`

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 50px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 2px;
  gap: 3px;
`
const SearchIcon = styled(FaSearch)`
  color: ${(props) => props.theme.colors.black};
  margin: 0 15px;
  border-radius: 15px;
`
const StyledInput = styled.input`
  width: 80%;
  height: 90%;
  border: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray1};
  }
  &:focus {
    outline: none;
  }
`

const StyledButton = styled.button`
  width: 20%;
  height: 90%;
  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.red2};
  color: ${(props) => props.theme.colors.white};
`
const SearchBar = styled.div``
