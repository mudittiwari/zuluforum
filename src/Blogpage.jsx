import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import app from './Firebase';
import { useNavigate } from "react-router-dom";
function Blogpage() {
    const navigate = useNavigate();
    const [blogarray, changeblogarray] = useState([]);
    const [trendingarray, changetrendingarray] = useState([]);
    const [top, changetop] = useState([]);
    const storage = getStorage(app);
    const db = getFirestore(app);
    async function getblogs() {
        const q = query(collection(db, "blogs"));
        const querySnapshot = await getDocs(q);
        let blogs = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            blogs.push(doc.data());
            // changeblogarray([...blogarray,doc.data()]);
        });
        changeblogarray(blogs);
    }
    async function gettrending() {
        const q = query(collection(db, "blogs"), where("trending", "==", true));
        const querySnapshot = await getDocs(q);
        let blogs = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            blogs.push(doc.data());
            // changeblogarray([...blogarray,doc.data()]);
        });
        changetrendingarray(blogs);
    }
    async function gettop() {
        const q = query(collection(db, "blogs"), where("ontop", "==", true));
        const querySnapshot = await getDocs(q);
        let blogs = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            blogs.push(doc.data());
            // changeblogarray([...blogarray,doc.data()]);
        });
        changetop(blogs);
    }
    useState(() => {
        getblogs();
        gettop();
        gettrending();
    }, []);
    return (
        <>
            <div className="flex-col lg:flex-row w-full mt-10 flex mb-10">
                <div className="md:order-1 w-full lg:w-3/5 px-5" style={{ 'borderRight': '1px solid black' }}>

                    {blogarray.map((blog, index) => {
                        console.log(blog.images[0]);

                        return <div onClick={(e) => {
                            e.preventDefault();
                            navigate('/blogpost', { state: blog });
                        }} className="w-full pb-5 mb-5" style={{ 'borderBottom': '1px solid black' }} key={index}>
                            <h1 className="text-2xl font-bold">
                                {blog.title}
                            </h1>
                            <div className="w-full h-80 mt-5 flex justify-end items-end" style={{ 'backgroundImage': `url("${blog.images[0]}")`, 'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover' }}>
                                <div className="bg-black w-max">
                                    <h1 className="text-white px-5 py-2 font-semibold text-sm">{blog.date}</h1>
                                </div>
                            </div>
                            <p className="text-sm font-medium text-black mt-5 mb-5">{blog.desc}</p>
                            <a href="#" className="text-blue-900 font-semibold text-sm">Read More</a>
                        </div>
                    })}


                </div>
                <div className="w-full lg:w-2/5 px-5">
                    <div>
                        <h1 className="text-2xl font-bold mb-5">ON TOP:-</h1>
                        <div className="flex  flex-row  md:flex-col h-96 overflow-y-auto">
                            {
                                top.map((blog, index) => {
                                    return <div className="flex items-center mb-5" onClick={(e) => {
                                        e.preventDefault();
                                        navigate('/blogpost', { state: blog });
                                    }}>
                                        <img className="w-32 h-32 mr-3" src={blog.images[0]} alt="" />
                                        <div className="flex justify-between flex-col ">
                                            <h1 className="text-lg font-semibold mb-5">{blog.title}</h1>
                                            <h1 className="text-sm font-semibold mb-5">{blog.date}</h1>
                                        </div>
                                    </div>
                                })
                            }


                        </div>
                    </div>
                    <div className="mt-10" style={{ 'height': '1px', 'backgroundColor': 'black', 'width': '100%' }}></div>
                    <div className="mt-10">
                        <h1 className="text-2xl font-bold mb-5">Trending:-</h1>
                        <div className="h-96 overflow-y-auto">
                            {trendingarray.map((blog, index) => {
                                return <div className="flex items-center mb-5" onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/blogpost', { state: blog });
                                }}>
                                    <img className="w-32 h-32 mr-3" src={blog.images[0]} alt="" />
                                    <div className="flex justify-between flex-col ">
                                        <h1 className="text-lg font-semibold mb-5">{blog.title}</h1>
                                        <h1 className="text-sm font-semibold mb-5">{blog.date}</h1>
                                    </div>
                                </div>
                            })}


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogpage;    