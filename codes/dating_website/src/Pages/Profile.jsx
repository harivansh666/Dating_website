import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { searchPeople } from '../data/SeachPeople';
import axios from 'axios';
import { FaPencil } from "react-icons/fa6";
import UpdateProfile from '../components/UpdateProfile';


export default function Profile() {

    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

    const [user, setuser] = useState({
        fullName: '',
        image: '',
        bio: '',
        location: '',
    })

    const firstUser = searchPeople[2];

    const [responseData, setrespond] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get('http://localhost:5000/profile', {
                    withCredentials: true
                })

                setrespond(response.data)
                // console.log(response.data)
            } catch (err) {
                console.error("Error fetching data:", err);

                // ⚠️ Agar cookie invalid/missing hai to error set karo aur login page pe bhej do
                if (err.response && err.response.status === 401) {
                    setError("Unauthorized access! Please log in.");
                }
            }
        }
        fetchdata()
    }, [])

    // console.log(responseData);
    const sendData = async (e) => {
        try {
            // console.log(user);
            const response = await axios.post('http://localhost:5000/profile', user, {
                withCredentials: true
            })
            setrespond(response.data)
            // console.log(response.data)
        }
        catch (err) {
            console.error(err);
        }


    }

    const closeSubmit = async (e) => {
        await setIsEditPopupOpen(false)
    }


    return (
        <>
            {error ? (

                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-red-500 mb-4">{error}</h2>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
                        >
                            Go to Login
                        </button>
                    </div>
                </div>
            ) :
                (
                    <div>

                        <Navbar />
                        <div className='flex '>
                            <Sidebar />

                            <div className="w-full h-[calc(100vh-10px)] flex-row  p-5 text-center font-sans">
                                {/* name, img , location */}
                                <div className='name extra w-full h-60  flex flex-row gap-10  '>
                                    <div>
                                        <img src={firstUser.Image} alt="" className='w-40 h-40 ml-8 mt-4 rounded-full object-cover ' />
                                    </div>


                                    <div className='w-100 h-40 flex  mt-8 absoulate gap-1 flex-col  '>
                                        <h1 className='text-3xl font-bold text-left uppercase'>{responseData.fullName} </h1>

                                        <p className='text-start
 outline-2 p-1 rounded-md outline-zinc-300'>{responseData.bio}</p>
                                    </div>




                                    <button onClick={() => { setIsEditPopupOpen(true) }} className='flex justify-center items-center w-12 h-10 rounded-md p-1 mt-2 bg-zinc-300 hover:bg-zinc-200'>
                                        <FaPencil size={20} />

                                    </button>

                                    {isEditPopupOpen && (
                                        <UpdateProfile setuser={setuser} user={user} sendData={sendData} closeSubmit={closeSubmit} />
                                    )}

                                </div>

                                {/* Posts  */}
                                <div className='w-full h-[calc(100vh-300px)] p-2'>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                                        {/* Example posts */}
                                        <div className='bg-pink-500 p-4 rounded-lg shadow-md'>Post 1</div>
                                        <div className='bg-pink-500 p-4 rounded-lg shadow-md'>Post 2</div>
                                        <div className='bg-pink-500 p-4 rounded-lg shadow-md'>Post 3</div>
                                        <div className='bg-pink-500 p-4 rounded-lg shadow-md'>Post 4</div>
                                        <div className='bg-pink-500 p-4 rounded-lg shadow-md'>Post 5</div>
                                        <div className='bg-pink-500 p-4 rounded-lg shadow-md'>Post 6</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            };

        </>
    )
}
