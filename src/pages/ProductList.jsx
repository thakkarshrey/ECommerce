import React,{useState} from 'react'
import Anouncement from '../components/Anouncement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Container = styled.div``

const Title = styled.h1`
    margin:20px
`

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 0px 20px 
`
const Filter = styled.div`
font-size:20px;
margin-right:20px
`
const ProductFilter = styled.div`
    display:flex;
    align-items:center;
`
const ProductSort = styled.div`
    display:flex;
    align-items:center;
`


const ProductList = () => {
  /* Dependencies for searchable select */
  const [colors,setColors] = useState([
    { text: 'White', id: 1 },
    { text: 'Black', id: 2 },
    { text: 'Red', id: 3 }, 
    { text: 'Blue', id: 4 },
    { text: 'Yellow', id: 5 },
    { text: 'Green', id: 6 },
  ])
  const [selectedColorObj,setSelectedColorObj] = useState(null)

  const [sizes,setSizes] = useState([
    { text: 'XS', id: 1 },
    { text: 'S', id: 2 },
    { text: 'M', id: 3 }, 
    { text: 'L', id: 4 },
    { text: 'XL', id: 5 }
  ])
  const [selectedSizeObj,setSelectedSizeObj] = useState(null)

  const [sort,setSort] = useState([
    'Price(asc)', 'Price(desc)'
  ])
  const [selectedSort,setSelectedSort] = useState(null)
  /* Dependencies for searchable select */
  
  /* On size change setSelectedSizeObj   */
  const onSizeChanged = (newValue) => {
    if(newValue){
      setSelectedSizeObj(newValue)
      console.log(newValue)
    }
    else{
      setSelectedSizeObj(null)
    }
  }
  /* On size change setSelectedSizeObj */

  /* On colors change setSelectedColorObj */
  const onColorChanged = (newValue) => {
    if(newValue){
      setSelectedColorObj(newValue)
    }
    else{
      setSelectedColorObj(null)
    }
  }
  /* On colors change setSelectedColorObj */

  /* On sort change setSelectedSortObj */
  const onSortChanged = (newValue) => {
    if(newValue){
      setSelectedSort(newValue)
    }
    else{
      setSelectedSort(null)
    }
  }
  /* On sort change setSelectedSortObj */

  return (
    <Container>
      <Anouncement />
      <Navbar />
      <Title>
        Dresses
      </Title>
      <FilterContainer>
        <ProductFilter>
          <Filter>Filter Products:</Filter>
          <Autocomplete
            options={colors}
            value={selectedColorObj}
            getOptionLabel={(option)=>option.text}
            sx={{ width: 200, marginRight: '20px' }}
            disableClearable
            renderInput={
              (params) => <TextField
                {...params}
                text="Color"
                label="Color"
                size='small'
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'off',
                }}
              />}
              onChange={(event,newValue)=>{
                onColorChanged(newValue)
              }}  
          />
          <Autocomplete
            options={sizes}
            value={selectedSizeObj}
            getOptionLabel={(option)=>option.text}
            sx={{ width: 200, marginRight: '20px' }}
            disableClearable
            renderInput={
              (params) => <TextField
                {...params}
                label="Size"
                size='small'
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'off',
                }}
              />}
              onChange={(event,newValue)=>{
                onSizeChanged(newValue)
              }}
          />
        </ProductFilter>
        <ProductSort>
          <Filter>Sort Products:</Filter>
          <Autocomplete
            options={sort}
            value={selectedSort}
            sx={{ width: 200, marginRight: '20px' }}
            disableClearable
            renderInput={
              (params) => <TextField
                {...params}
                label="Sort"
                size='small'
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'off',
                }}
              />}
              onChange={(event,newValue)=>{
                onSortChanged(newValue)
              }}
          />
        </ProductSort>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ProductList