import React from 'react'
import styled from 'styled-components'
import { products } from '../data'
import ShopItem from './ShopItem'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0efef;
`
const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0px;
`

const ShopText = styled.h1`
    width: fit-content;
    font-family: 'Playfair Display', sans-serif;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 20px 0px;
`
const Shop = () => {
  return (
    <Container>
        <ShopText>SHOP</ShopText>
        <ProductsContainer>
            {products.map(item=>(
            <ShopItem item={item} key={item.id}/>
            ))}
        </ProductsContainer>
    </Container>
  )
}

export default Shop