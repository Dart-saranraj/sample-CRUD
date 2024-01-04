import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* import { v4 as uuid } from "uuid";  */
import Detail from "./Detail";
import Delete from "./Delete";
import  axios  from "axios"
import Edit from "./Edit";

function App() {

  const baseURL= 'http://localhost:3500';


 /*  const LOCAL_STORAGE_KEY = "contacts"; */

  const [contacts, setContacts] = useState([]);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState('')

  useEffect(()=>{
    const fetchData = async()=>{
    
      try{
        const response = await axios.get(`${baseURL}/contact`);
        setContacts(response.data)
      }catch(err){
        console.log(`Error:${err.message}`);
      }
    }
    fetchData()
  },[])
  

  const addContactHandler = async (contact) => {

    const id = contacts.length? contacts[contacts.length -1].id +1: 1;
    const newData = {id , ...contact}
    try{
      const response = await axios.post(`${baseURL}/contact`,newData);
      const allData = [...contacts,response.data]
      setContacts(allData)
    }catch(err){
      console.log(`Error:${err.message}`);
    }

    /* setContacts((prevContacts) => [...prevContacts, { id: uuid(), ...contact }]); */
     
  };

  const handleEdit = async (id) =>{

    const updateData = {id, name:editName,email:editEmail }
    try{
      const response = await axios.put(`${baseURL}/contact/${id}`,updateData);
      setContacts(contacts.map(contact => contact.id === id ?{...response.data}:contact))
      setEditName('')
      setEditEmail('')
    }catch(err){
      console.log(`Error:${err.message}`);
    }
    handleNavigation();

  }

  const removeContact = async(id) => {
    await axios.delete(`${baseURL}/contact/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    handleNavigation();
  };

  const handleNavigation = () => {
    // Navigate to the root path ("/") after adding a contact
    window.location.href = "/";
  };

  const searchHandler = (searchTerm)=>{
    setSearch(searchTerm)
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact)=>{
        return Object.values(contact)
        .join("")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList)
    }else{
      setSearchResult(contacts);
    }
  }
  

  /* useEffect(() => {
    const retrieveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveData) {
      setContacts(retrieveData);
    }
  }, []);  */

  /* useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);  */

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ContactList contacts={search.length < 1? contacts: searchResult} search={search} searchHandler={searchHandler} removeContact={removeContact} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} handleNavigation={handleNavigation} />} />
          <Route path="/detail/:id" element={<Detail handleNavigation={handleNavigation} />} />
          <Route path="/delete/:id" element={<Delete  removeContact={removeContact} handleNavigation={handleNavigation} />} />
          <Route path="/edit/:id" element={<Edit contacts={contacts} handleEdit={handleEdit} editEmail={editEmail} editName={editName} setEditEmail={setEditEmail} setEditName={setEditName}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
