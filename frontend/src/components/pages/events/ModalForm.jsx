/**
 * Author: Anvar Kilybayev
 * Login: xkilyb00
 * Date: 17.12.2023
 * 
 */

import React, { useState, useCallback } from 'react';
import styles from "./ModalForm.module.css";

function ModalForm({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    logo: null
  });


  
  const handleInputChange = useCallback((e) => {
    const { name, value, files } = e.target;
    
    // If the input is a file input (logo), set the file in formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'logo' ? files[0] : value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.logo);
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
    <div className={styles.formWrapper}>

      <div className={styles.modal}>
        <span className={styles.modalClose} onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <ul className={styles.formLabel}>Create Event</ul>
          </div>
          <div className={styles.formField}>
            <label htmlFor='title'/>
              <input type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleInputChange} 
                placeholder='Enter events title' 
                className={styles.title}/>
          </div>
          <div className={styles.formField}>
          <label htmlFor='description'/>
              <input type="text" 
                name="description"
                value={formData.description} 
                onChange={handleInputChange} 
                placeholder='Description' 
                className={styles.description}/>
          </div>
          <div className={styles.formField}>
              <label htmlFor='date'></label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            {/* <div className={styles.formField}>
              <label htmlFor='logo'></label>
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleInputChange}
                className={styles.input}
              />
            </div> */}
          <div className={styles.formField}>
            <button type="submit" className={styles.button}>Submit</button>
          </div>
        </form>
      </div>

    </div>
    </div>
  );
}

export default ModalForm;
