import React from 'react'
import styled from 'styled-components'
import { categories } from '../data/data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between
`

const Category = () => {
  return (
    <Container>
        {
            categories.map((_category)=>(
                <CategoryItem category={_category}/>
            ))
        }
    </Container>
  )
}

export default Category