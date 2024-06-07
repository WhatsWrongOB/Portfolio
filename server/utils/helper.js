import mongoose from "mongoose";
import NodeCache from "node-cache";

const myCache = new NodeCache();

// Helper function to validate ObjectId
export const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Helper function to invalidate project cache
export const invalidateProjectCache = () => {
  myCache.del("projects");
};
