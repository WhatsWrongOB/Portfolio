import React from "react";
import File from "/public/file.svg";
import { FaBitbucket, FaEdit } from "react-icons/fa";
import { useStore } from "../Context";
import { toast } from "react-hot-toast";

const DashCard = ({ project, check, getId }) => {
  const { deleteProject } = useStore();

  const handleDelete = async (id) => {
    try {
      const res = await deleteProject(id);
      if (res) toast.success("Project Deleted Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleUpdate = (id) => {
    check("update");
    getId(id);
    toast.success("Update this project using the form ");
  };

  return (
    <div className="portfolio_card dash_card">
      <div className="card_inner">
        <div className="upper">
          <img className="file_img" src={File} alt="file" />
          <div className="github_img">
            <div onClick={() => handleDelete(project._id)}>
              <FaBitbucket color="red" />
            </div>
            <div onClick={() => handleUpdate(project._id)}>
              <FaEdit color="green" />
            </div>
          </div>
        </div>
        <h1 className="project_name dash_name">{project.name}</h1>
      </div>
    </div>
  );
};

export default DashCard;
