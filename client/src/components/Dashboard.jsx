import React, { useState } from "react";
import { useStore } from "../Context";
import Form from "./Form";
import DashCard from "./DashCard";
import ClipLoader from "react-spinners/ClipLoader";
import { FaBitbucket } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Dashboard = () => {
  const { projects, deleteLoading, deleteContact, message } = useStore();
  const [formType, setFormType] = useState("create");
  const [updateId, setUpdateId] = useState(null);

  const checkType = (type) => {
    setFormType(type);
  };

  const getId = (id) => {
    setUpdateId(id);
  };

  const handleMsgDel = async (id) => {
    try {
      const res = await deleteContact(id);
      if (res) toast.success("Msg deleted successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <section className="projects">
        <div className="projects_page_top">
          <h1>Admin Panel 😍</h1>
          <p>Here you can add, edit and delete your personal projects</p>
          <div className="filters">
            <span className="tech project_tech">Html</span>
            <span className="tech project_tech">Css</span>
            <span className="tech project_tech">JavaScript</span>
            <span className="tech project_tech">TypeScript</span>
            <span className="tech project_tech">ReactJs</span>
            <span className="tech project_tech">NodeJs</span>
            <span className="tech project_tech">ExpressJs</span>
            <span className="tech project_tech">MongoDB</span>
          </div>
        </div>
        <div className="dash_container">
          <div className="dash_left">
            <Form type={formType} setType={setFormType} id={updateId} />
          </div>

          <div className="dash_right">
            {deleteLoading ? (
              <div className="flex">
                <ClipLoader />
              </div>
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

          {message.map((item) => (
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
