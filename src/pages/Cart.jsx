import React from 'react'
import styled from 'styled-components'
import Anouncement from '../components/Anouncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Add, Remove } from '@mui/icons-material'
const Container = styled.div``
const Wrapper = styled.div`
    padding:10px;
    align-items:center;
    text-align:center
`
const Title = styled.h1``
const Top  = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px
`

const TopButton = styled.button`
    padding:20px;
    cursor:pointer;
    border:${props=>props.type === "filled" && "none"};
    background-color:${props=>props.type === "filled" ? "black" : "transparent"};
    color:${props=>props.type === "filled" ? "white" : "black"};
`
const TopTexts = styled.div`
`

const TopText = styled.span`
    text-decoration:underline;
    margin:0 10px;
    cursor:pointer
`

const Bottom = styled.div`
    display:flex;
`
const Info = styled.div`
    flex:3
`

const Product = styled.div`
    display:flex;
    justify-content:space-between;
`

const ProductDetails = styled.div`
    flex:2;
    display:flex
`

const Image = styled.img`
    width:200px;
    height:200px
`


const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:flex-start
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color}
`

const ProductSize = styled.span``

const PriceDetails = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column

`
const ProductQuantityContainer = styled.div`
    display:flex;
    align-items:center;
    font-size:25px;
    margin:20px;
    font-weight:bold
`
const ProductQuantity = styled.span`
    margin:0 3px
`

const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200
`

const Hr = styled.hr`
    height:1px;
    border:none;
    background-color:#eee
`

const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:6px;
    height:60vh;
    padding:20px
`
const SummaryTitle = styled.h1`
    font-weight:400
`
const SummaryContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin:30px 0px;
    font-weight:${props=>props.type === 'total' && "400"};
    font-size: ${props=>props.type === 'total' && "24px"}
`

const SummaryText = styled.span``
const SummaryPrice = styled.span``

const SummaryButton = styled.button`
    padding:20px;
    background-color:black;
    color:white;
    width:100%;
    border:none;
    cursor:pointer
`




const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Anouncement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>
                    CONTINUE SHOPPING
                </TopButton>
                <TopTexts>
                    <TopText>
                    Shopping Cart(2)
                    </TopText>
                    <TopText>
                    Your wishlist(0)
                    </TopText>
                </TopTexts>
                <TopButton type = "filled">
                    CHECKOUT NOW
                </TopButton>
            </Top>
            <Bottom>

                <Info>
                <Product>
                    <ProductDetails>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                        <Details>
                            <ProductName><b>PRODUCT: </b> ADIDAS SHOES</ProductName>
                            <ProductId><b>ID: </b> 6546456</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size: </b> 24</ProductSize>

                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                    <ProductQuantityContainer>
                        <Add/>
                        <ProductQuantity>2</ProductQuantity>
                        <Remove/>
                    </ProductQuantityContainer>
                    <ProductPrice>1499/-</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                        <Details>
                            <ProductName><b>PRODUCT: </b> ADIDAS SHOES</ProductName>
                            <ProductId><b>ID: </b> 6546456</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size: </b> 24</ProductSize>

                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                    <ProductQuantityContainer>
                        <Add/>
                        <ProductQuantity>2</ProductQuantity>
                        <Remove/>
                    </ProductQuantityContainer>
                    <ProductPrice>1499/-</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                        <Details>
                            <ProductName><b>PRODUCT: </b> ADIDAS SHOES</ProductName>
                            <ProductId><b>ID: </b> 6546456</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size: </b> 24</ProductSize>

                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                    <ProductQuantityContainer>
                        <Add/>
                        <ProductQuantity>2</ProductQuantity>
                        <Remove/>
                    </ProductQuantityContainer>
                    <ProductPrice>1499/-</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                        <Details>
                            <ProductName><b>PRODUCT: </b> ADIDAS SHOES</ProductName>
                            <ProductId><b>ID: </b> 6546456</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size: </b> 24</ProductSize>

                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                    <ProductQuantityContainer>
                        <Add/>
                        <ProductQuantity>2</ProductQuantity>
                        <Remove/>
                    </ProductQuantityContainer>
                    <ProductPrice>1499/-</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                        <Details>
                            <ProductName><b>PRODUCT: </b> ADIDAS SHOES</ProductName>
                            <ProductId><b>ID: </b> 6546456</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size: </b> 24</ProductSize>

                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                    <ProductQuantityContainer>
                        <Add/>
                        <ProductQuantity>2</ProductQuantity>
                        <Remove/>
                    </ProductQuantityContainer>
                    <ProductPrice>1499/-</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                        <Details>
                            <ProductName><b>PRODUCT: </b> ADIDAS SHOES</ProductName>
                            <ProductId><b>ID: </b> 6546456</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size: </b> 24</ProductSize>

                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                    <ProductQuantityContainer>
                        <Add/>
                        <ProductQuantity>2</ProductQuantity>
                        <Remove/>
                    </ProductQuantityContainer>
                    <ProductPrice>1499/-</ProductPrice>
                    </PriceDetails>
                </Product>
                </Info>

                <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                <SummaryContainer>
                    <SummaryText>Subtotal</SummaryText>
                    <SummaryPrice>1499</SummaryPrice>
                </SummaryContainer>

                <SummaryContainer>
                    <SummaryText>Shippng Charges</SummaryText>
                    <SummaryPrice>200</SummaryPrice>
                </SummaryContainer>

                <SummaryContainer>
                    <SummaryText>Discount</SummaryText>
                    <SummaryPrice>-200</SummaryPrice>
                </SummaryContainer>

                <Hr/>

                <SummaryContainer type = 'total'>
                    <SummaryText>Total</SummaryText>
                    <SummaryPrice>1499/-</SummaryPrice>
                </SummaryContainer>

                <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>

    </Container>
  )
}

export default Cart