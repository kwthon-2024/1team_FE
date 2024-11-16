import React from 'react'
import styled, { keyframes } from 'styled-components'

const Snowflake = ({ style }) => {
  return <SnowFlake style={style}>{'\u2745'}</SnowFlake>
}

const makeSnowFlakes = () => {
  const snowflakes = []
  for (let i = 0; i < 50; i++) {
    const style = {
      animationDelay: `${Math.random() * 10}s`, // 랜덤한 애니메이션 딜레이
      animationDuration: `${Math.random() * 5 + 5}s`, // 5~10초 사이의 애니메이션 지속시간
      fontSize: `${Math.random() * 20 + 10}px`, // 10~30px 크기의 눈송이
      left: `${Math.random() * 100}vw`, // 화면 가로 랜덤 위치
      top: `${Math.random() * -100}px`, // 화면 위에서 랜덤 시작
    }
    snowflakes.push(<Snowflake key={i} style={style} />)
  }
  return snowflakes
}

export const FallingSnow = () => <SnowContainer>{makeSnowFlakes()}</SnowContainer>

const SnowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
  overflow: hidden; /* 화면 밖으로 눈이 넘치지 않도록 */
`

const fall = keyframes`
  0% {
    transform: translateY(-10px); /* 화면 위에서 시작 */
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh); /* 화면 아래까지 떨어지도록 */
    opacity: 0;
  }
`

const SnowFlake = styled.div`
  position: absolute;
  color: ${(props) => props.theme.colors.white};
  animation: ${fall} linear infinite;
`
