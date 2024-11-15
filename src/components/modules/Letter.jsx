import React from 'react'
import styled from 'styled-components'

const LetterPaper = ({ text }) => {
  // 텍스트 줄 바꿈을 위해 "\n" 기준으로 나눔
  const lines = text.split('\n')

  return (
    <LetterContainer>
      {lines.map((line, index) => (
        <Line key={index}>
          <LetterText>{line}</LetterText>
        </Line>
      ))}
    </LetterContainer>
  )
}

const LetterContainer = styled.div`
  width: 500px;
  height: 300px;
  padding: 20px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`

const Line = styled.div`
  border-bottom: 1px solid #ccc;
  width: 100%;
  padding: 10px 10px; /* 텍스트와 줄 사이 간격 조정 */
  position: relative;
`

const LetterText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  word-wrap: break-word;
  white-space: pre-wrap;
`
export default LetterPaper
