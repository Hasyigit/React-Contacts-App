import Form from './Form'
import List from './Liste'
import { useState, useEffect } from 'react'
import {} from './style.css'
function Contacts() {
    const [contact, setContact] = useState([
      {
        fullname: "Yigit",
        phoneNumber: "52323232",
      },
      {
        fullname: "Celal",
        phoneNumber: "52323221231",
      },
      {
        fullname: "Simge",
        phoneNumber: "5322334455",
      },
      {
        fullname: "Mehmet",
        phoneNumber: "2213213213",
      },
      {
        fullname: "hasan",
        phoneNumber: "2323232454",
      },
      {
        fullname: "Ali",
        phoneNumber: "5123234555",
      },
    ]);
    useEffect(() => {
      console.log(contact);
    }, [contact]);
    return (
      <div id="container">
        
        <List contacts={contact} />
        <Form addForm={setContact} contact={contact} />
      </div>
    );
  }
  
  export default Contacts;
