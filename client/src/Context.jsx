import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const Url = "https://backend-portfolio-green.vercel.app";
  const [projects, setProjects] = useState([]);
  const [message, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setdeleteLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [updateLoading, setupdateLoading] = useState(false);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${Url}/auth/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success) {
        setIsAuthenticated(true);
        console.log(data)
      }
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const contact = async (email, message) => {
    try {
      const { data } = await axios.post(
        `${Url}/contact/send`,
        {
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    }
  };

  const addProject = async (name, technology, description, link) => {
    try {
      const { data } = await axios.post(
        `${Url}/project/add`,
        {
          name,
          technology,
          description,
          link,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    }
  };

  const getProject = async () => {
    try {
      const { data } = await axios.get(`${Url}/project/get`);
      setProjects(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getMsg = async () => {
    try {
      const { data } = await axios.get(`${Url}/contact/get`);
      setMessages(data.messages);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const deleteProject = async (id) => {
    try {
      setdeleteLoading(true);
      const { data } = await axios.delete(`${Url}/project/delete/${id}`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    } finally {
      setdeleteLoading(false);
    }
  };

  const updateProject = async (id, name, technology, description, link) => {
    try {
      setupdateLoading(true);
      const { data } = await axios.patch(`${Url}/project/update/${id}`, {
        name,
        technology,
        description,
        link,
      });
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    } finally {
      setupdateLoading(false);
    }
  };

  const logout = async () => {
    try {
      const { data } = await axios.get(`${Url}/auth/logout`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    }
  };

  const deleteContact = async (id) => {
    try {
      const { data } = await axios.delete(`${Url}/contact/delete/${id}`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    } 
  };

  useEffect(() => {
    getMsg();
  }, []);

  useEffect(() => {
    getProject();
  }, [addProject, login, deleteProject]);

  return (
    <AppContext.Provider
      value={{
        login,
        logout,
        isAuthenticated,
        addProject,
        deleteProject,
        projects,
        loading,
        deleteLoading,
        updateLoading,
        updateProject,
        message,
        deleteContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useStore = () => {
  return useContext(AppContext);
};

export { AppProvider, useStore };
