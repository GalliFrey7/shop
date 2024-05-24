import React from 'react'
import POPULAR from '../assets/popular'
import Item from './Item'

const Popular = () => {
  return (
    <section>
        <div>
            <h3>Popular Products</h3>
            <hr />
            <div>
                {POPULAR.map((item) => (
                    <Item />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Popular