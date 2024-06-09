import React, { useState } from "react";
import { FaBitbucket } from "react-icons/fa";
import { toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import {
  useGetProjectQuery,
  useDeleteMsgMutation,
  useGetMsgQuery,
  useLogoutQuery,
} from "../redux/api";
import Form from "./Form";
import DashCard from "./DashCard";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/reducers";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formType, setFormType] = useState("create");
  const [updateId, setUpdateId] = useState(null);

  const {
    data: projects = [],
    isLoading: projectsLoading,
    isError: projectsError,
  } = useGetProjectQuery() ?? {};

  const {
    data,
    isLoading: messagesLoading,
    isError: messagesError,
  } = useGetMsgQuery() ?? {};

  const [deleteMsg, { isLoading: deleteLoading }] = useDeleteMsgMutation();

  const { data: logout } = useLogoutQuery();

  const checkType = (type) => {
    setFormType(type);
  };

  const getId = (id) => {
    setUpdateId(id);
  };

  const handleMsgDel = async (id) => {
    try {
      const res = await deleteMsg(id).unwrap();
      if (res.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      toast.error(error?.data.message);
    }
  };

  const handleLogout = () => {
    if (logout?.success) {
      toast.success(logout.message);
      dispatch(signUp());
      navigate("/");
    }
  };

  return (
    <>
      <section className="projects">
        <div className="logout_div">
          <button className="logout_btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="projects_page_top">
          <h1>Admin Panel 😍</h1>
          <p>Here you can add, edit and delete your personal projects</p>
          <div className="filters">
            {[
              "Html",
              "Css",
              "JavaScript",
              "TypeScript",
              "ReactJs",
              "NodeJs",
              "ExpressJs",
              "MongoDB",
            ].map((tech) => (
              <span className="tech project_tech" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="dash_container">
          <div className="dash_left">
            <Form type={formType} setType={setFormType} id={updateId} />
          </div>
          <div className="dash_right">
            {projectsLoading ? (
              <div className="flex">
                <ClipLoader loading={projectsLoading} size={20} color="white" />
              </div>
            ) : projectsError ? (
              <div className="error">Failed to load projects.</div>
            ) : (
              projects.map((item) => (
                <DashCard
                  key={item._id}
                  project={item}
                  check={checkType}
                  getId={getId}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <div className="dash_msg">
        <div className="dash_msg_container">
          <h1>Messages</h1>
          {messagesLoading ? (
            <div className="flex">
              <ClipLoader loading={messagesLoading} size={20} color="white" />
            </div>
          ) : messagesError ? (
            <div className="error">Failed to load messages.</div>
          ) : (
            data &&
            data.messages.map((item) => (
              <div className="msg" key={item._id}>
                <div
                  className="msg_delete"
                  onClick={() => handleMsgDel(item._id)}
                >
                  {deleteLoading ? (
                    <ClipLoader
                      loading={deleteLoading}
                      size={10}
                      color="black"
                    />
                  ) : (
                    <FaBitbucket color="red" />
                  )}
                </div>
                <h4>From : {item.email}</h4>
                <h5>Message : {item.message}</h5>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
