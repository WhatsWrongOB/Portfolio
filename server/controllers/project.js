import mongoose from "mongoose";
import { Project } from "../models/project.js";


export const getProject = async (req, res) => {
    try {
        const projects = await Project.find()
        res.status(200).json(projects);
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const addProject = async (req, res) => {
    try {
        const { name, description, technology, link } = req.body;

        const project = Project.create({
            name,
            description,
            technology,
            link
        })

        return res.status(201).json({
            success: true,
            message: "Added to project successful",
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: `No post with id ${id}`,
            });
        }

        const updatedProject = Project.findByIdAndDelete(id)

        return res.status(200).json({
            success: true,
            message: 'Project deleted successfully',
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}