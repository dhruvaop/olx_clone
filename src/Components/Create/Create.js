import React, { Fragment, useContext, useEffect, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState();
  const date = new Date();
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      console.log("hey")
       ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        }).then(()=>{
          navigate('/')
        })
      })
    })
  }
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [])
  
  return (
    <>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="cname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input onChange={(e)=> setPrice(e.target.value)}  className="input" type="number" value={price} id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):null}></img>
          <form>
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </>
  );
};

export default Create;
