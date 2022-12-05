import React, { useEffect, useRef } from "react";
import { getStorage,ref,getDownloadURL, uploadBytesResumable  } from "firebase/storage";
import { getFirestore,collection,addDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import app from './Firebase';
function Addblog() {
    const navigate = useNavigate();
    const storage = getStorage(app);
    const db = getFirestore(app);
    // const ref = useRef(null);
    // const [desc,changedesc]=useState("");
    const [submit_status,changesubstatus]=useState(false);
    const [upload_status,changeupstatus]=useState(false);
    const [imagearray, changeimagearray] = useState([]);
    const [subtitle,changesubtitle]=useState("");
    const [caption,changecaption]=useState("");
    const [image, setImage] = useState('');
    const [title, changetitle] = useState('');
   
    const [desc, changedesc] = useState('');
   
    const upload = async () => {
        // e.preventDefault();
        // console.log(image);
        if (image == null)
            return;
        // changeupstatus(true);
        // changesubstatus(true);
        
        // ref.current.continuousStart(0);
        const storageRef = ref(storage, `files/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on('state_changed',
            (snapShot) => {
                //takes a snap shot of the process as it is happening
                console.log(snapShot);
            }, (err) => {
                //catches the errors
                console.log(err);
                // ref.current.complete();
                // changeupstatus(false);
                // changesubstatus(false);
            }, () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:
                // console.log(submit_status, upload_status);
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log(downloadURL);
                    changeimagearray([...imagearray,downloadURL]);
                  });
                // ref.current.complete();
                // changeupstatus(false);
                // changesubstatus(false);
            });
            
            // console.log(submit_status,upload_status);
            // changeupstatus(false);

    }
    return (
        <>
            {/* <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} /> */}
            <div className="w-3/4 mx-auto my-5">
                <h1 className="text-white text-xl font-bold my-10 mx-auto w-1/2 text-center">Add Product</h1>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" onChange={(e) => {
                        changetitle(e.target.value);
                    }} value={title} name="title" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:border-gray-300 focus:ring-0 peer" placeholder=" " required="" />
                    <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blog Title</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" onChange={(e) => {
                        changesubtitle(e.target.value);
                    }} value={subtitle} name="title" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:border-gray-300 focus:ring-0 peer" placeholder=" " required="" />
                    <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blog Subtitle</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" onChange={(e) => {
                        changecaption(e.target.value);
                    }} value={caption} name="title" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:border-gray-300 focus:ring-0 peer" placeholder=" " required="" />
                    <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blog Caption</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" onChange={(e) => {
                        changedesc(e.target.value);
                    }} value={desc} name="category" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:border-gray-300 focus:ring-0 peer" placeholder=" " required="" />
                    <label for="category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>
                
                <div className="flex flex-col w-full justify-center items-center">
                    <div className="mb-10">
                        <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
                        <button className="bg-pink-900 text-white w-24 rounded border-0 px-4 py-3 my-2 mx-8" disabled={upload_status} onClick={async (e) => {
                            e.preventDefault();
                            upload();
                            
                            // e.preventDefault();
                        }}>Upload</button>
                    </div>
                    <button type="button" className="bg-pink-900 text-white w-24 rounded border-0 px-4 py-3 my-2 mx-8" disabled={submit_status} onClick={async (e) => {
                        var today = new Date();
                        var dd = String(today.getDate()).padStart(2, '0');
                        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = today.getFullYear();
                        
                        today = mm + '-' + dd + '-' + yyyy;
                        // document.write(today);
                        addDoc(collection(db, "blogs"), {
                            'title': title,
                            'subtitle': subtitle,
                            'caption': caption,
                            'desc': desc,
                            'images': imagearray,
                            'ontop':false,
                            'trending':false,
                            'date':today
                        }).then(()=>{
                            console.log("success");
                            // navigate('/postverification');
                        }).catch((err)=>{
                            console.log(err);
                        });
                       console.log(imagearray);
                       changeimagearray([]);
                    }}>Submit</button>
                </div>
            </div>
        </>
    );
}


export default Addblog;