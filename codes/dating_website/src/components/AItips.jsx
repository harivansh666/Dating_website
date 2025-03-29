import React, { useContext, useState } from 'react'
// import { useConnection } from '../../../backend/models/userModel';
import { Aicontext } from '../context/Main.context';
import Markdown from 'react-markdown'


export default function AItips() {
    const [aiRender, setAIRender] = useState(true);
    const { Aires, setAires } = useContext(Aicontext);
    return (
        <div className={`sm:h-auto md:h-[68vh] w-full md:w-96 lg:w-[26vw] border-2
                absolute md:left-auto lg:left-[900px] right-4 md:right-8 mt-4
                border-gray-300 rounded-4xl p-2 md:p-6 flex flex-col items-center bg-pink-500
                shadow-lg transition-opacity overflow-y-auto
                ${aiRender ? "opacity-100" : "opacity-0"}`}>
            <h2 className="font-bold text-lg md:text-2xl text-white text-center mb-2 md:mb-4">

                ❤️  AI Dating Tips ❤️
            </h2>

            <h2 className='text-white text-2xl font-medium'>

                <Markdown>
                    {Aires}
                </Markdown>
            </h2>

        </div >
    )
}