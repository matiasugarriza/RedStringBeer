import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Item from './Item'
import data from '../data/data'

const Category = () => {
    const { categoryId } = useParams()
    const categoryProducts = data.find((product) => product.category === categoryId)
    const [products, setProducts] = useState([]);
    const datosProductos = () => {
        if (data.find((product) => product.category === categoryId)){
            return([categoryProducts])
        } else {
            return(data)
        }
    }
    
    

  
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(datosProductos);
      } else {
        reject(alert('No podemos mostrar los productos en este momento'));
      }
    }, 2000);
  });

  
  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.error(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getProductsFromDB();
  });

  return (
    <div className="product-list-container row row-cols-1 row-cols-md-4 g-4">
      {
        
        products.length ? ( 
          <>
            {

              products.map((product) => {
                return (
                  <Item
                    name={product.name}
                    thumbnail={product.thumbnail}
                    price={product.price}
                    stock={product.stock}
                    id={product.id}
                  />
                );
              })
            }
          </>
        ) : (
            <div class="d-flex justify-content-center">
              <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Cargando Productos...</span>
              </div>
              <span class="h5">Cargando Productos...</span>
            </div>
        ) 
      }
    </div>
  );
}


export default Category