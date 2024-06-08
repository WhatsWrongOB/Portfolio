import React from "react";
import File from "/public/file.svg";
import { FaBitbucket, FaEdit } from "react-icons/fa";
import { useStore } from "../Context";
import { toast } from "react-hot-toast";

const DashCard = ({ project, check, getId }) => {

  const [loading, setloading] = useState(false)

  const handleDelete = async (id) => {
    try {
      setloading(true);
      const { data } = await axios.delete(`${Url}/project/delete/${id}`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    } finally {
      setloading(false);
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
