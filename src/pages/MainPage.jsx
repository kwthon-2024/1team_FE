import React from 'react'
import styled from 'styled-components'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'
import { HiArrowLongRight } from 'react-icons/hi2'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const dummyData = {
  results: [
    {
      id: 1,
      image: 'https://cdn.pixabay.com/photo/2024/04/10/17/02/towel-8688401_1280.jpg',
      product_info: 'Product 1',
    },
    {
      id: 2,
      image: 'https://cdn.pixabay.com/photo/2024/11/02/15/31/cat-9169528_1280.jpg',
      product_info: 'Product 2',
    },
    {
      id: 3,
      image: 'https://cdn.pixabay.com/photo/2024/05/19/13/40/daisy-8772631_1280.jpg',
      product_info: 'Product 3',
    },
    {
      id: 4,
      image: 'https://cdn.pixabay.com/photo/2022/05/06/20/19/forest-7179046_1280.jpg',
      product_info: 'Product 4',
    },
  ],
}

const NextButton = (props) => {
  const { onClick } = props
  return (
    <StyledNextButton onClick={onClick}>
      <GrLinkNext />
    </StyledNextButton>
  )
}

const PrevButton = (props) => {
  const { onClick } = props
  return (
    <StyledPrevButton onClick={onClick}>
      <GrLinkPrevious />
    </StyledPrevButton>
  )
}

export const MainPage = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    arrows: true,
    infinite: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],
    customPaging: (i) => {
      return (
        <span className='customPaging'>
          <span className='currentPage'>
            {/* 숫자 앞에 0 붙이기 */}
            {(i + 1).toString().padStart(2, '0')}
          </span>
          /<span className='totalPage'>{dummyData.results.length.toString().padStart(2, '0')}</span>
        </span>
      )
    },
  }

  return (
    <>
      <Container>
        <Title>즐거운 월계축전 </Title>
        <Title>| </Title>
        <NameContainer>
          <Name>공태윤</Name>
          <ArrowIcon />
          <Name>김민지</Name>
        </NameContainer>
      </Container>
      <BodyContainer>
        <SliderContainer>
          <Slider {...settings}>
            {dummyData.results.map((item, index) => (
              <SlideItem key={index}>
                <ImageWrapper>
                  <Image src={item.image} alt={item.product_info} />
                </ImageWrapper>
              </SlideItem>
            ))}
          </Slider>
        </SliderContainer>
      </BodyContainer>
    </>
  )
}

// Styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #fff;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px auto;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  position: relative;
  margin-right: 10px;
`

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`

const Name = styled.div`
  margin: 0 10px;
`

const ArrowIcon = styled(HiArrowLongRight)`
  font-size: 24px;
  margin: 0 10px;
`

export const BodyContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

export const SliderContainer = styled.div`
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
  .slick-list {
    width: 2000px;
  }
  .slick-dots {
    position: fixed;
    top: 84%;
    left: 47%; // 화면의 중앙으로 위치
    li {
      display: none; //기본적으로 li 태그들이 안보이게 설정을 해주고
    }
    .slick-active {
      display: block; //활성화된 dot만 표시해준다.
    }
    .customPaging {
      display: flex;
      width: 100px;
      gap: 10px;
      color: ${(props) => props.theme.colors.white};
    }
  }
`

const SlideItem = styled.div`
  height: 500px;
  color: white;
  background-color: ${(props) => props.$color};
  width: 1000px;
  margin: auto;
`

const ImageWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  transition: all 0.5s ease;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

const Image = styled.img`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`

const StyledNextButton = styled.div`
  position: fixed;
  top: 85%;
  right: 100px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 24px;
  color: white;
  z-index: 1;
`

const StyledPrevButton = styled.div`
  position: fixed;
  top: 85%;
  left: 100px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 24px;
  color: white;
  z-index: 1;
`
