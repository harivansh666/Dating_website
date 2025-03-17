import { createContext, useState } from "react";

export const Aicontext = createContext();

export const AicontextProvider = ({ children }) => {

    const [aitips, settips] = useState('');

    return (
        <Aicontext.Provider value={{ aitips, settips }}>
            {children}
        </Aicontext.Provider>
    )
}
export default AicontextProvider