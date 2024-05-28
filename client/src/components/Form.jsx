import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useStore } from "../Context";
import ClipLoader from "react-spinners/ClipLoader";

export default function Form({ type, setType, id }) {
  const { addProject, updateProject } = useStore();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    technology: "",
    link: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, technology, link } = formData;
    try {
      setLoading(true);

      if (type === "create") {
        const res = await addProject(name, technology, description, link);
        if (res) toast.success("Added to preject Succcessfully");
      }
      if (type === "update") {
        const res = await updateProject(
          id,
          name,
          technology,
          description,
          link
        );
        if (res) {
          setType("create");
          toast.success("Project Updated Succcessfully");
        }
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }

    setFormData({
      name: "",
      description: "",
      technology: "",
      link: "",
    });
  };

  return (
    <>
      <h1 className="form_heading">Here you can {type} project</h1>
      <form className="post_form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required={type === "create"}
          />
        </div>
        <div className="form-group">
          <input
            id="description"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required={type === "create"}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Github Link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required={type === "create"}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Technology Used"
            name="technology"
            value={formData.technology}
            onChange={handleChange}
            required={type === "create"}
          />
        </div>

        <button type="submit" className="submit-button">
          {loading ? (
            <ClipLoader loading={loading} size={15} color="white" />
          ) : (
            type
          )}
        </button>
      </form>
    </>
  );
}
