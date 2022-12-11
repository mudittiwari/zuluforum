import { useEffect } from 'react';
import './Css/homepage.css';
import app from './Firebase';
import { useState } from 'react';
import { getStorage,ref,getDownloadURL, uploadBytesResumable  } from "firebase/storage";
import { getFirestore,collection,addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPhoneNumber,RecaptchaVerifier } from "firebase/auth";


const Form = () => {
    const navigate=useNavigate();
    const storage = getStorage(app);
    const db = getFirestore(app);
    const [imageurl, setImageurl] = useState(null);
    const [imagearray, changeimagearray] = useState([]);
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [department, setDepartment] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
   
    return (
        
        <div className="w-full px-10 py-5 md:mt-10 mt-4">
            
            <h1 style={{ 'borderLeft': '8px solid black' }} className='text-2xl font-bold text-black px-3 mb-5'>Complaint Registration Form</h1>
            <input value={name} onChange={(e)=>{
                setName(e.target.value);
            }} type="text" placeholder="Full Name*" className="w-full px-2 py-2 mt-6" style={{ 'border': '2px solid black' }} />
            <input value={phone} onChange={(e)=>{
                setPhone(e.target.value);
            }} type="tel" placeholder="Phone Number*" className="w-full px-2 py-2 mt-6" style={{ 'border': '2px solid black' }} />
            <input value={address} onChange={(e)=>{
                setAddress(e.target.value);
            }} type="text" placeholder="Address*" className="w-full px-2 py-2 mt-6" style={{ 'border': '2px solid black' }} />
            <input value={department} onChange={(e)=>{
                setDepartment(e.target.value);
            }} type="text" placeholder="Department*" className="w-full px-2 py-2 mt-6" style={{ 'border': '2px solid black' }} />
            <input value={title} onChange={(e)=>{
                setTitle(e.target.value);
            }} type="text" placeholder="Title*" className="w-full px-2 py-2 mt-6" style={{ 'border': '2px solid black' }} />
            <textarea value={description} onChange={(e)=>{
                setDescription(e.target.value);
            }} name="" id="" cols="30" rows="10" style={{ 'border': '2px solid black' }} className="w-full mt-6 px-2 py-2">Description</textarea>
            <label for="inputTag" className='w-full block px-2 py-4 cursor-pointer font-semibold mt-6 text-center' style={{ 'border': '1px dashed black' }}>
                Attach File Here
                <input id="inputTag" className='hidden' type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
            </label>
            <div className='w-full flex justify-center'>
            <button className='w-28 rounded-3xl px-6 py-1 mt-6 text-black font-semibold' style={{ 'border': '1px solid black' }} onClick={(e)=>{
                e.preventDefault();
                navigate('/verification',{'state':{name:name,phone:phone,address:address,department:department,title:title,description:description,image:image}});
                    }}>Submit</button>
            </div>
        </div>
    );
};

export default Form;
