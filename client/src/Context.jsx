import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [projects, setProjects] = useState([])
    const [addLoading, setAddLoading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const Url = 'http://localhost:3000'

    const login = async (email, password) => {
        try {
            setLoading(true)
            const { data } = await axios.post(
                `${Url}/auth/login`,
                {
                    email,
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            const success = data.success;
            if (success) {
                setIsAuthenticated(true)
            }
            return success;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        } finally {
            setLoading(false)
        }
    };

    const contact = async (email, message) => {
        try {
            setAddLoading(true)
            const { data } = await axios.post(`${Url}/contact/send`, {
                email,
                message
            },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const contactSuccess = data.success;
            return contactSuccess;

        } catch (error) {
            console.log(error)
            return false;
        } finally {
            setAddLoading(false)
        }
    }

    const addProject = async (name, technology, description, link) => {
        try {
            const { data } = await axios.post(`${Url}/project/add`, {
                name,
                technology,
                description,
                link
            },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const addSuccess = data.success;
            return addSuccess;

        } catch (error) {
            console.log(error)
            return false;

        }
    }

    const getProject = async () => {
        try {
            const { data } = await axios.get(`${Url}/project/get`)
            setProjects(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        try {
            const { data } = await axios.get(`${Url}/auth/logout`)
            return data.success;
        } catch (error) {
            console.log(error.message)
            return false;
        }
    }

    useEffect(() => {
        getProject()
    }, [])


    return (
        <AppContext.Provider value={{ login, contact, addProject, projects, loading, isAuthenticated, addLoading, logout }}>
            {children}
        </AppContext.Provider>
    )
}

const useStore = () => {
    return useContext(AppContext)
}

export { AppProvider, useStore }