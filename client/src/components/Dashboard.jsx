import React, { useState } from "react";
import {
  useGetProjectQuery,
  useDeleteMsgMutation,
  useGetMsgQuery,
} from "../redux/api";
import Form from "./Form"; 
import DashCard from "./DashCard"; 
import ClipLoader from "react-spinners/ClipLoader"; 
import { FaBitbucket } from "react-icons/fa"; 
import { toast } from "react-hot-toast"; 

const Dashboard = () => {
  const [formType, setFormType] = useState("create");
  const [updateId, setUpdateId] = useState(null);

  const { data: projects, isLoading, isError } = useGetProjectQuery();
  const { data: message } = useGetMsgQuery();
  const [deleteMsg, { isLoading: deleteLoading }] = useDeleteMsgMutation();

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
        toast.success(res.message);
      }
    } catch (error) {
      toast.error(error?.data.message);
    }
  };

  return (
    <>
      <section className="projects">
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
            {/* Form component for creating/updating projects */}
            <Form type={formType} setType={setFormType} id={updateId} />
          </div>

          <div className="dash_right">
            {isLoading ? (
              // Show loading spinner while fetching projects
              <div className="flex">
                <ClipLoader loading={isLoading} size={20} color="white" />
              </div>
            ) : isError ? (
              // Show error message if fetching projects fails
              <div className="error">Failed to load projects.</div>
            ) : (
              // Display project cards if data is available
              projects &&
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

          {/* Example messages (replace with actual message fetching logic) */}
          {deleteLoading ? (
            // Show loading spinner during delete operation
            <div className="flex">
              <ClipLoader loading={deleteLoading} size={20} color="white" />
            </div>
          ) : (
            message.map((item) => (
              <div className="msg" key={item._id}>
                <div
                  className="msg_delete"
                  onClick={() => handleMsgDel(item._id)}
                >
                  <FaBitbucket color="red" />
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
