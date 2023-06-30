import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Admin() {
  useEffect(() => {
    response()
  }, [])

  const [Customer1, setCustomer1] = useState([])
  const [Customer2, setCustomer2] = useState([])
  const response = async () => {
    const result1 = await axios.get('http://localhost:8000/customer1')
    const result2 = await axios.get('http://localhost:8000/customer2')
    setCustomer1(result1.data)
    setCustomer2(result2.data)


  }
  const totalQuantity1 = Customer1.reduce((accumulator, currentItem) => accumulator + currentItem.Qty, 0);
  const totalWeight1 = Customer1.reduce((accumulator, currentItem) => accumulator + currentItem.Weight, 0);
  const totalQBoxcount1 = Customer1.reduce((accumulator, currentItem) => accumulator + currentItem.BoxCount, 0);
  const totalQuantity2 = Customer2.reduce((accumulator, currentItem) => accumulator + currentItem.Qty, 0);
  const totalWeight2 = Customer2.reduce((accumulator, currentItem) => accumulator + currentItem.Weight, 0);
  const totalQBoxcount2 = Customer2.reduce((accumulator, currentItem) => accumulator + currentItem.BoxCount, 0);
  return (
    <div className='container m-144' style={{ border: "3px solid black", alignItems: "center", width: "500px" }}>

      <ul className="list-group list-group-horizontal" style={{ border: "2px solid black", width: "462px" }}>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid black" }}><b>Items/Customer</b></li>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid black" }}><b>Customer1</b></li>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid black" }}><b>Customer2</b></li>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid black" }}><b>Total</b></li>
      </ul>
      <ul className="list-group list-group-horizontal-lg" style={{ border: "2px solid red", width: "462px" }}>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid red" }}><b>Qty  </b></li>

        <li className="list-group-item " style={{ width: "115px", border: "2px solid red" }}>{totalQuantity1}</li>

        <li className="list-group-item" style={{ width: "115px", border: "2px solid red" }}>{totalQuantity2}</li>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid red" }}>{totalQuantity2 + totalQuantity1}</li>
      </ul>
      <ul className="list-group list-group-horizontal-md" style={{ border: "2px solid blue", width: "462px" }}>
        <li className="list-group-item " style={{ width: "115px", border: "2px solid blue" }}><b>Weight</b></li>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid blue" }}>{totalWeight1}</li>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid blue" }}>{totalWeight2}</li>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid blue" }}>{totalWeight1 + totalWeight2}</li>
      </ul>
      <ul className="list-group list-group-horizontal-lg" style={{ border: "2px solid yellow", width: "462px" }}>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid yellow" }}><b>BoxCount</b></li>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid yellow" }}>{totalQBoxcount1}</li>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid yellow" }}>{totalQBoxcount2}</li>
        <li className="list-group-item" style={{ width: "115px", border: "2px solid yellow" }}>{totalQBoxcount1 + totalQBoxcount2}</li>
      </ul>


    </div>
  )
}
