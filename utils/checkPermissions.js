import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === "657460a7a9f4a39b8fddb4f5") {
    // If test user, display alert
    throw new BadRequestError("Test user, no touchy only looky ☝");
  }
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new UnAuthenticatedError("You are not authorized to access this route");
};

export default checkPermissions;
