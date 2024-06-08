import React from "react";
import File from "/public/file.svg";
import { FaBitbucket, FaEdit } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useDeleteMsgMutation } from "../redux/api";

const DashCard = ({ project, check, getId }) => {
  const [deleteMsg, { isLoading }] = useDeleteMsgMutation();

  const handleDelete = async (id) => {
    try {
      const response = await deleteMsg(id);
      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error?.data.message);
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
