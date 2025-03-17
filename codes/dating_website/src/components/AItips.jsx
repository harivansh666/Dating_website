import React, { useState } from 'react'

export default function AItips() {
    const [aiRender, setAIRender] = useState(true);
    return (
        <div className={`h-[68vh] w-[24vw] border-2 object-cover absolute left-[900px]
                  border-gray-300 rounded-4xl p-6 flex flex-col items-center bg-pink-500 shadow-lg transition-opacity
                  ${aiRender ? "opacity-100" : "opacity-0 "}`}>
            <h2 className="font-bold text-2xl text-white text-center mb-4">AI Dating Tips</h2>
            <div className=" object-cover  rounded-lg  shadow-lg p-1">
                <h3 className="text-lg font-semibold mb-2">Tip #1: Be Yourself!</h3>
                <p className="text-gray-700 mb-4">
                    It's important to be authentic in your conversations. Don't try
                    to be someone you're not. Genuine connections are built on
                    honesty.
                </p>
                <h3 className="text-lg font-semibold mb-2">Tip #2: Listen Actively</h3>
                <p className="text-gray-700">
                    Pay attention to what the other person is saying. Active listening
                    helps build rapport and trust, making your conversations more
                    meaningful.
                </p>
            </div>
        </div>
    )
}
