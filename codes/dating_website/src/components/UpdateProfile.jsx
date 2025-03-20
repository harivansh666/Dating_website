import React from 'react'

export default function UpdateProfile({ setuser, user, sendData, closeSubmit }) {
    return (
        <>

            <div className='w-100 h-60 flex  absoulate flex-col bg-pink-400 p-4 rounded-2xl outline-2 outline-zinc-400 '>
                <input
                    type="text"
                    value={user.fullName}
                    onChange={e => { setuser({ ...user, fullName: e.target.value }) }}
                    placeholder='Name'
                    className="text-1xl placeholder-white placeholder-opacity-50 placeholder-opecity-30  uppercase p-2 rounded-lg mb-2 outline-2 outline-white"
                />
                <textarea name="bio" placeholder='Enter bio ' value={user.bio} onChange={e => { setuser({ ...user, bio: e.target.value }) }} className='w-90 h-30 outline-2 rounded-2xl outline-white resize-none p-3 placeholder:text-white placeholder-opacity-50 '>

                    {user.bio}
                </textarea>
                <div className=' flex gap-2'>

                    <button onClick={sendData} className='w-22 h-10 rounded-md p-1 mt-2  bg-white'>Update</button>
                    <button onClick={closeSubmit} className='w-22 h-10 rounded-md p-1 mt-2  bg-white'>close</button>
                </div>
            </div>

        </>
    )
}
