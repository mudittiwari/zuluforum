import './Css/homepage.css'; 
import { useLocation } from 'react-router-dom';
import { getStorage,ref,getDownloadURL, uploadBytesResumable  } from "firebase/storage";
import { getFirestore,collection,addDoc } from "firebase/firestore";
import app from './Firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Verification()
{
    const navigate=useNavigate();
    const location=useLocation();
    const storage = getStorage(app);
    const [imageurl, setImageurl] = useState(null);
    const db = getFirestore(app);
    const upload = async () => {
        // e.preventDefault();
        // console.log(image);
        if (location.state.image == null)
            return;
        // changeupstatus(true);
        // changesubstatus(true);
        
        // ref.current.continuousStart(0);
        const storageRef = ref(storage, `files/${location.state.image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, location.state.image);
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
                    setImageurl(downloadURL);
                    addDoc(collection(db, "complaints"), {
                                name: location.state.name,
                                phone: location.state.phone,
                                address: location.state.address,
                                department: location.state.department,
                                title: location.state.title,
                                description: location.state.description,
                                imageurl: downloadURL,
                            }).then(()=>{
                                navigate('/postverification');
                            }).catch((err)=>{
                                console.log(err);
                            });
                  });
                // ref.current.complete();
                // changeupstatus(false);
                // changesubstatus(false);
            });
            return Promise.resolve();
            // console.log(submit_status,upload_status);
            // changeupstatus(false);

    }


    async function addcomplaint()
    {
        await upload();
        // console.log(imageurl);
        // upload().then(async() => {
        //     console.log(imageurl);
        //     await addDoc(collection(db, "complaints"), {
        //         name: location.state.name,
        //         phone: location.state.phone,
        //         address: location.state.address,
        //         department: location.state.department,
        //         title: location.state.title,
        //         description: location.state.description,
        //         imageurl: imageurl,
        //     }).then(()=>{
        //         // navigate('/postverification');
        //     }).catch((err)=>{
        //         console.log(err);
        //     });
        // }).catch((err)=>{
        //     console.log(err);
        // });
        // console.log(imageurl);
        
        // console.log(imageurl);
        // console.log(imagearray);
        
    }
    return (
        <>
            <div className="w-full mt-20 flex items-center justify-center">
                <div className="w-4/5 h-max px-5 related py-5 flex justify-center flex-col items-center" >
                <h1 className="text-2xl font-bold">
                    Phone Verification
                </h1>
                <h1 className="text-base font-semibold mt-4">
                    Code is sent to +91 9413565505
                </h1>
                <div className='mt-10 flex'>
                    <div className='w-14 h-14 mx-4 related flex items-center'>
                        <input type="text" className='outline-none w-full text-center h-full ' />
                    </div>
                    <div className='w-14 h-14 mx-4 related flex items-center'>
                        <input type="text" className='outline-none w-full text-center h-full ' />
                    </div>
                    <div className='w-14 h-14 mx-4 related flex items-center'>
                        <input type="text" className='outline-none w-full text-center h-full ' />
                    </div>
                    <div className='w-14 h-14 mx-4 related flex items-center'>
                        <input type="text" className='outline-none w-full text-center h-full ' />
                    </div>
                </div>
                <h1 className="text-base font-semibold mt-10">
                    Didn't receive code? <span className='text-blue-500 cursor-pointer'>Resend</span>
                </h1>
                <div className='w-full flex justify-center'>
            <button className='w-28 rounded-3xl px-6 py-1 mt-6 text-black font-semibold' style={{ 'border': '1px solid black' }} onClick={(e)=>{
                e.preventDefault();
                addcomplaint();
            }}>Confirm</button>
            </div>
                </div>

            </div>
        </>
    );
}

export default Verification;