import React, { useState } from 'react'

export default function AItips() {
    const [aiRender, setAIRender] = useState(true);
    return (
        <div className={`sm:h-auto md:h-[68vh] w-full md:w-96 lg:w-[26vw] border-2
                absolute md:left-auto lg:left-[900px] right-4 md:right-8 mt-4
                border-gray-300 rounded-4xl p-2 md:p-6 flex flex-col items-center bg-pink-500
                shadow-lg transition-opacity overflow-y-auto
                ${aiRender ? "opacity-100" : "opacity-0"}`}>
            <h2 className="font-bold text-lg md:text-2xl text-white text-center mb-2 md:mb-4">
                AI Dating Tips
            </h2>
            <div className="rounded-lg shadow-lg p-1 w-full">
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                    Tip #1: Be Yourself!
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4">
                    It's important to be authentic in your conversations. Don't try
                    to be someone you're not. Genuine connections are built on
                    honesty.
                </p>
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                    Tip #2: Listen Actively
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                    Pay attention to what the other person is saying. Active listening
                    helps build rapport and trust, making your conversations more
                    meaningful.
                </p>
            </div>
        </div>
    )
}