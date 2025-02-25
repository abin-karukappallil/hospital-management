import { errorResponse } from "../utils/responseHandler.js";

const roleAuthorize = (allowedRoles) => {
    return (req, res, next) => {
        try {
            if (!req.user) {
                return errorResponse(res, 401, "Unauthorized Access: No User Found");
            }

            if (!allowedRoles.includes(req.user.role)) {
                return errorResponse(res, 403, "Forbidden: Insufficient Permissions");
            }

            next();
        } catch (error) {
            next(error);
        }
    };
};

export default roleAuthorize;
