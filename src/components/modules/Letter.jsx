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
  width: 80%;
  max-width: 700px;
  padding: 20px;
  margin: 0 auto;
  background-color: #fff; /* 편지지 배경색 */
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`

const Line = styled.div`
  border-bottom: 1px solid #ccc;
  width: 100%;
  margin: 15px 0;
  position: relative;
`

const LetterText = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  top: 20px;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  word-wrap: break-word;
  white-space: pre-wrap;
`
export default LetterPaper
