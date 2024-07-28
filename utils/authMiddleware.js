import httpStatus from "http-status";
import jwtHelper from "./jwthelper.js";

const auth =
  (...roles) =>
  async (req, res, next) => {
    try {
      // const token = req.headers.authorization
      const token = req.cookies.refreshToken;
      // console.log(tokens)
      if (!token) {
        return res
          .status(httpStatus.UNAUTHORIZED)
          .json({ status: "error", message: "You are not authorized" });
      }

      const verifyToken = jwtHelper.verifyToken(
        token,
        process.env.REFRESH_TOKEN_SECRET
      );
      if (!verifyToken) {
        return res
          .status(httpStatus.NOT_FOUND)
          .json({ status: "error", message: "Invalid token" });
      }
      console.log(verifyToken);
      req.user = verifyToken;
      console.log(req.user);
      if (roles.length && !roles.includes(verifyToken.role)) {
        return res
          .status(httpStatus.FORBIDDEN)
          .json({
            status: "error",
            message: "Authorization failed! Unauthorized user",
          });
      }

      return next();
    } catch (error) {
      const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
      const message = error.message || "Internal Server Error";
      return res.status(statusCode).json({ status: "error", message });
    }
  };

export default auth;
