import React from 'react'

import { getFirestore, collection, addDoc } from 'firebase/firestore'

const OrderForm = ({items}) => {
    const [buyerName, setBuyerName] = useState('')
    const [buyerPhone, setBuyerPhone] = useState('')
    const [buyerEmail, setBuyerEmail] = useState('')
    const [selectedItems, setSelectedItems] = useState([])
    const [total, setTotal] = useState(0)

    //Instancia Firestore
    const db = getFirestore{}

    //Referencia a la colección orders para acceder a dicha colección
    const orderCollection = collection{db, 'orders'}

    //Función para manejar el submit del form
    const handleSubmit = () => {
        
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={buyerName} onChange={(e) => setBuyerName{e.target.value}}/>
        </form>
    </div>
  )
}

export default OrderForm