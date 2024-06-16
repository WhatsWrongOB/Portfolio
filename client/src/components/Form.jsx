import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import {
  useCreateProjectMutation,
  useUpdateProjectMutation,
} from "../redux/api";

export default function Form({ type, setType, id }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    technology: "",
    link: "",
  });

  const [createProject, { isLoading: createLoading }] =
    useCreateProjectMutation();
  const [updateProject, { isLoading: updateLoading }] =
    useUpdateProjectMutation();

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
      if (type === "create") {
        const res = await createProject({
          name,
          description,
          technology,
          link,
        });
        if (res?.data.success) {
          setType("create");
          toast.success(res.data.message);
        }
      }
      if (type === "update") {
        const res = await updateProject({
          id,
          name,
          description,
          technology,
          link,
        });
        if (res.data.success) {
          setType("create");
          toast.success(res?.data.message);
        }
      }
    } catch (error) {
      toast.error(error?.data.message);
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
            required={true}
          />
        </div>
        <div className="form-group">
          <input
            id="description"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required={true}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Github Link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Technology Used"
            name="technology"
            value={formData.technology}
            onChange={handleChange}
            required={true}
          />
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={createLoading || updateLoading}
        >
          {createLoading || updateLoading ? (
            <ClipLoader loading={true} size={15} color="white" />
          ) : (
            type
          )}
        </button>
      </form>
    </>
  );
}
