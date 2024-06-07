import mongoose from "mongoose";
import { myCache } from "../server";



// Helper function to validate ObjectId
export const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Helper function to invalidate project cache
export const invalidateProjectCache = () => {
  myCache.del("projects");
};