import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getFirestore, doc , getDoc } from 'firebase/firestore'


import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { productId } = useParams();

    useEffect(() => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'Items', productId);
      getDoc(queryDoc)
      .then(product => setData({id: product.id, ...product.data()}))
    }, [productId])
    
  return (
    <>
      <ItemDetail data={data}/>
      <Link to={`/products`}className='countBtn btn btnVolver'>Volver</Link>
    </>
  );
}

export default ItemDetailContainer