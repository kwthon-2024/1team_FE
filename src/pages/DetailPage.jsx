import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'
import { HiArrowLongRight } from 'react-icons/hi2'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import axios from 'axios'
import LetterPaper from '@/components/modules/Letter' // Import LetterPaper

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

export const DetailPage = () => {
  const [photoList, setPhotoList] = useState([])
  const [letterText, setLetterText] = useState('')
  const [letterTitle, setLetterTitle] = useState('')
  const [receiver, setReceiver] = useState('')
  const [sender, setSender] = useState('')

  useEffect(() => {
    const fetchMail = async () => {
      try {
        const response = await axios.get(`/kwTree/mailBox/${1}`)
        setPhotoList(response.data.data.photos)
        setLetterText(response.data.data.mailText)
        setLetterTitle(response.data.data.mailName)
        setReceiver(response.data.data.receiverName)
        setSender(response.data.data.senderName)
      } catch (error) {
        console.error('Error fetching recommendations:', error)
      }
    }
    fetchMail()
  }, [])

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
    customPaging: (i) => (
      <span className='customPaging'>
        <span className='currentPage'>{i === 0 ? '편지' : i.toString().padStart(2, '0')}</span>/
        <span className='totalPage'>{photoList.length.toString().padStart(2, '0')}</span>
      </span>
    ),
  }

  return (
    <>
      <Container>
        <Title>{letterTitle}</Title>
        <Separator>|</Separator>
        <NameContainer>
          <Name>{sender}</Name>
          <ArrowIcon />
          <Name>{receiver}</Name>
        </NameContainer>
      </Container>
      <BodyContainer>
        <SliderContainer>
          <Slider {...settings}>
            {/* Add LetterPaper as the first slide */}
            <SlideItem key='letter'>
              <LetterPaper text={letterText} />
            </SlideItem>
            {photoList.map((item, index) => (
              <SlideItem key={index}>
                <ImageWrapper>
                  <Image src={item.photoUrl} alt={`Photo ${item.photoId}`} />
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
  margin-right: 10px;
`

const Separator = styled.span`
  font-size: 24px;
  margin: 0 10px;
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
    left: 47%;
    li {
      display: none;
    }
    .slick-active {
      display: block;
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
