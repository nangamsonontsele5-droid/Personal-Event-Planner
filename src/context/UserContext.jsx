import { createContext, useState } from "react"; 

const UserContext = createContext();
// Creates a context for user data and provides a way to manage and share user information across components.

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [registeredUser, setRegisteredUser] = useState(null);

    return(
        <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn, registeredUser, setRegisteredUser}}>
            {/** Makes shared context available and passes the information we want to share. */}

            {children}

            {/** Renders the components that are wrapped by the UserProvider, allowing them to access the shared context. */}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };