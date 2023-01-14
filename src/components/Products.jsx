import React from 'react'
import { popularProducts } from '../data/data'
import ProductItem from './ProductItem'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    padding:20px;
    display:flex;
    flex-wrap:wrap
`
const Products = () => {
  return (
    <Container>
        {
            popularProducts.map((_item)=>(
                <ProductItem item={_item}/>
            ))
        }
    </Container>
  )
}

export default Products