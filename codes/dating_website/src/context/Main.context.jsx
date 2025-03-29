import { createContext, useState } from "react";

export const Aicontext = createContext(null);

export const AicontextProvider = ({ children }) => {

    const [Aibio, setAibio] = useState('')
    const [Aires, setAires] = useState('')

    return (
        <Aicontext.Provider value={{ Aibio, setAibio, Aires, setAires }}>
            {children}
        </Aicontext.Provider>
    )
}
export default AicontextProvider