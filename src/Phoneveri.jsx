import './Css/homepage.css';
import { useLocation } from 'react-router-dom';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import app from './Firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Verification() {
    const navigate = useNavigate();
    const location = useLocation();
    const storage = getStorage(app);
    const [one, setcode1] = useState(1);
    const [two, setcode2] = useState(1);
    const [three, setcode3] = useState(1);
    const [four, setcode4] = useState(1);
    const [five, setcode5] = useState(1);
    const [six, setcode6] = useState(1);
    const [result, setresult] = useState(null);
    const [imageurl, setImageurl] = useState(null);
    const db = getFirestore(app);
    const auth = getAuth(app);
    const generaterecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // onSignInSubmit();
                console.log(response);
            }
        }, auth);
    }
    const verifyuser = async () => {
        generaterecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+91${location.state.phone}`, appVerifier)
            .then((confirmationResult) => {
                setresult(confirmationResult);
            }).catch((error) => {
                console.log(error);
                // Error; SMS not sent
                // ...
            });
    }

    async function finalupload() {
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
                    }).then(() => {
                        navigate('/postverification');
                    }).catch((err) => {
                        console.log(err);
                    });
                });
                // ref.current.complete();
                // changeupstatus(false);
                // changesubstatus(false);
            });
        return Promise.resolve();
    }

    const matchcode = async () => {
        let code = one + two + three + four + five + six;
        result.confirm(code).then((result) => {
            if (location.state.image == null)
                return;
            console.log(imageurl);
            finalupload().catch((err) => {
                console.log(err);
            });
        }).catch((error) => {
            console.log(error);
        });
    }


    const upload = async () => {
        generaterecaptcha();
        verifyuser();
        // e.preventDefault();
        // console.log(image);


    }


    async function addcomplaint() {
        await upload();


    }
    return (
        <>
            <div id="sign-in-button"></div>
            <div className="w-full md:mt-20 mt-10 flex items-center justify-center">
                <div className="md:w-4/5 w-11/12 h-max px-5 related py-5 flex justify-center flex-col items-center" >
                    <h1 className="text-2xl font-bold">
                        Phone Verification
                    </h1>
                    <h1 className="text-base font-semibold mt-4">
                        Code is sent to +91 {location.state.phone}
                    </h1>
                    <div className='mt-10 flex'>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode1(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode2(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode3(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode4(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode5(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode6(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                    </div>
                    <h1 className="text-base font-semibold mt-10">
                        Didn't receive code? <span className='text-blue-500 cursor-pointer'>Resend</span>
                    </h1>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <button className='w-max  rounded-3xl px-6 py-1 mt-6 text-black font-semibold' style={{ 'border': '1px solid black' }} onClick={(e) => {
                            e.preventDefault();
                            addcomplaint();
                        }}>send code</button>
                        <button className='w-28 rounded-3xl px-6 py-1 mt-6 text-black font-semibold' style={{ 'border': '1px solid black' }} onClick={(e) => {
                            e.preventDefault();
                            matchcode();
                        }}>Confirm</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Verification;