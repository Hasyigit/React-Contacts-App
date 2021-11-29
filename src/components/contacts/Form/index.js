import React from 'react'
import { useState, useEffect } from 'react';

const initialFormValues = {
    fullname: "",
    phoneNumber: "",
  };
  function Form({ addForm, contact }) {
    useEffect(() => {
      setForm(initialFormValues);
    }, [contact]);

    const [form, setForm] = useState(initialFormValues)

    const OnChangeInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })}; // ...form ile daha önce girilen verileri tutarız.

    const onSubmit = (event) => {
        
        event.preventDefault(); 

        if (form.fullname === "" || form.phone_number === "") { // eğer fullname ve phone number boş ise false yap
            return false;
        }
        
        addForm([...contact, form]);
        
    }
    return (
        <form onClick={onSubmit}>
            <div>
                <input 
                name="fullname" 
                placeholder="Name" 
                onChange={OnChangeInput} 
                value={form.fullname}  
                required
                />
            </div>

            <div>
                <input name="phone_number" 
                placeholder="Phone Number" 
                onChange={OnChangeInput} 
                value={form.phone_number} 
                required
                />

            </div>

            <div>
                <button> ADD </button>
            </div>
        </form>
    )
}

export default Form;
