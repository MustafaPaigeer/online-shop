import React from 'react'

 const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div>
        {['product 1', 'product 2'].map(
          (product) => product)}
      </div>

      Footer
    </>
  )
}
export default Home;