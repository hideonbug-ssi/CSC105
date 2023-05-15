import { createContext } from "react";
const commentContext = createContext({comments: [], setComments: () => {}});
export default commentContext;

const CommentContextProvider = ({ children }) => {
    const[comments, setComments] = useState([]);
    return <commentContext.Provider value={{comments, setComments}} > {children}</commentContext.Provider>;
}

export {CommentContextProvider};