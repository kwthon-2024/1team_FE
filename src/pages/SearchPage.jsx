import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import useDebounce from '@/Hooks/useDebounce'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [recommendList, setRecommendList] = useState([])
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!debouncedSearchTerm.trim()) return // 빈 문자열일 때 호출 방지
      try {
        const response = await axios.get(`/search?query=${debouncedSearchTerm}`)
        setRecommendList(response.data.data.results) // response.data.results -> response.data.data.results
        console.log('Recommendations fetched:', response.data.data.results)
      } catch (error) {
        console.error('Error fetching recommendations:', error)
      }
    }

    fetchRecommendations()
  }, [debouncedSearchTerm])

  return (
    <>
      <StyledDiv justifyContent='end' height='10%'>
        <StyledForm>
          <SearchIcon />
          <StyledInput
            type='text'
            placeholder='학번, 학과, 이름을 통해 친구의 트리를 찾아보세요!'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <StyledButton>Search</StyledButton>
        </StyledForm>
      </StyledDiv>
      <StyledDiv justifyContent='start' marginTop='15px'>
        {debouncedSearchTerm && recommendList.length > 0 && (
          <SearchItemList>
            {recommendList.map((item, index) => (
              <SearchItem key={index} onClick={() => console.log(item)}>
                <SearchIcon />
                {`${item.studentId}, ${item.name}, ${item.department}`}
              </SearchItem>
            ))}
          </SearchItemList>
        )}
      </StyledDiv>
    </>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: center;
  height: ${(props) => props.height || '100%'};
  margin-top: ${(props) => props.marginTop || '0'};
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
  position: relative;
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

const SearchItemList = styled.div`
  width: 45%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  margin-top: 5px;
  max-height: 200px;
  overflow-y: auto;
  border: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const SearchItem = styled.button`
  padding: 20px 10px;
  cursor: pointer;
  display: flex;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`
