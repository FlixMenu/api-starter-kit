import httpStatus from "http-status";
import sendJson from "./sendJson";


export default function customRequestError(res, status = "", code = "", message = "") {
    let error = {}
    if (status === "" || message === "" || code === "" || typeof message !== String) {
        error["status"] = httpStatus[500];
        error["code"] = httpStatus.INTERNAL_SERVER_ERROR;
        error["message"] = message

        return sendJson(res, error)
    }
    error["status"] = status;
    error["code"] = code;
    error["message"] = message

    return sendJson(res, error)
}
