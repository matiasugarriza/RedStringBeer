import React, { useState, useEffect } from 'react'
import { getFirestore, collection , getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [data, setData] = useState([])
  const { categoryId } = useParams()
  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'Items')
    if (categoryId){
      const queryFilter = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({ id:product.id, ...product.data() }))))
    } else {
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(product => ({ id:product.id, ...product.data() }))))
      }
    }, [categoryId])
  return (
    <div className='row' style={{
      textAlign:'center',
      margin:'2vw'
    }}>
      <ItemList data={data}/>
    </div>
  )
}
export default ItemListContainer