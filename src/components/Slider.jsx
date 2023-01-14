import React,{useState} from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems} from '../data/data'
const Container = styled.div`
  width:95vw;
  height:100vh;  
  position:relative;
  overflow:hidden
`
const Arrow = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:lightgray;
  display:flex;
  justify-content:center;
  align-items:center;
  opacity:0.5;
  position:absolute;
  top:0;
  bottom:0;
  left:${props=>props.direction==="left" && '10px'};
  right:${props=>props.direction==="right" && '10px'};
  margin:auto;
  cursor:pointer;
  z-index:2
`

const Wrapper = styled.div`
  width:100%;
  flex:1;
  display:flex;
  transform:translateX(${props=>props.slideIndex * -95}vw);
  transition:all 1.5s ease;
`
const Slide = styled.div`
  height:100vh;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#${props=>props.bg}
`
const ImgContainer=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  width:100vw;
  flex:1
`
const Image=styled.img`
  height:90%
`
const InfoContainer = styled.div`
  flex:1;
  padding:50px
`
const Title = styled.h1`
  font-size:70px
`
const Description = styled.p`
  margin:50px 0px;
  font-size:20px;
  font-weight:bold;
  letter-spacing:3px
`

const Button = styled.button`
  background-color:transparent;
  padding:10px;
  font-size:20px;
  cursor:pointer
`

const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0)

  const handleArrowClick=(direction)=>{
    if(direction === 'left'){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleArrowClick('left')}>
          <ArrowLeftOutlinedIcon/> 
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {
            sliderItems.map((_item)=>(
          <Slide key={_item.id} bg={_item.bg}>
            <ImgContainer>
              <Image src={_item.img}/>
            </ImgContainer>
            <InfoContainer> 
              <Title>{_item.title}</Title>
              <Description>{_item.desc}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
            ))
          }
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleArrowClick('right')}>
          <ArrowRightOutlinedIcon/> 
        </Arrow>
    </Container>
  )
}

export default Slider