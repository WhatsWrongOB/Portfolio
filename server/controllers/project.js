import { Project } from "../models/project.js";
import {
  invalidateProjectCache,
  isValidObjectId,
  myCache,
} from "../utils/helper.js";

export const getProject = async (req, res) => {
  try {
    let projects;

    if (myCache.has("projects")) {
      projects = JSON.parse(myCache.get("projects"));
    } else {
      projects = await Project.find();
      myCache.set("projects", JSON.stringify(projects));
    }

    res.status(200).json(projects);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addProject = async (req, res) => {
  try {
    const { name, description, technology, link } = req.body;

    if (!name || !description || !technology || !link) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await Project.create({ name, description, technology, link });

    invalidateProjectCache();

    return res.status(201).json({
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: `No project with id ${id}`,
      });
    }

    await Project.findByIdAndDelete(id);

    invalidateProjectCache();

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, technology, link } = req.body;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: `No project with id ${id}`,
      });
    }

    if (!name || !description || !technology || !link) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { name, description, technology, link },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    invalidateProjectCache();

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
