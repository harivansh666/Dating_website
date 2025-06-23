import { createContext, useState } from "react";

export const Aicontext = createContext(null);

export const AicontextProvider = ({ children }) => {
  const [Aibio, setAibio] = useState("");
  const [Aires, setAires] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <Aicontext.Provider
      value={{ Aibio, setAibio, Aires, setAires, users, setUsers }}
    >
      {children}
    </Aicontext.Provider>
  );
};
export default AicontextProvider;
