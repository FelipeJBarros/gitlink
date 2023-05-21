import { createContext, useContext, useState, useEffect } from "react";

export const ProfileContext = createContext({});

export default function ProfileProvider({ children }) {

    const [profile, setProfile] = useState(null);
    const [searchFor, setSearchFor] = useState(null);

    const profileIsMissing = profile === null;
    const notFound = profile?.message === 'Not Found'

    useEffect(() => {
        if(searchFor === '') {
            setProfile(null);
            return;
        }
        if(searchFor != null) {
            try {
                fetch(`https://api.github.com/users/${searchFor}`)
                    .then(response => response.json())
                    .then(data => setProfile(data));
            } catch(error) {
                setProfile(null);
            }
        }
    }, [searchFor])

    return(
        <ProfileContext.Provider value={{ profile, notFound, profileIsMissing, setSearchFor}}>
            {children}
        </ProfileContext.Provider>
    )
}

export function useProfileProvider() {
    const ctx = useContext(ProfileContext);
    return {...ctx}
}
