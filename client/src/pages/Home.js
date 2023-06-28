import React from 'react'
import Pagination from '../components/Pagination';
import Products from '../components/Products';
import Slider from '../components/Slider';
import images from '../data/slider_data'

function Home() {
  console.log(images)
  return (
    <>
    <Slider />
    <Products />
    <Pagination />
    </>
  );
}

export default Home