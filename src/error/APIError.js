"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APIError {
    constructor(message, code) {
        this.message = message;
        this.code = code;
    }
    static badRequest(message = "Bad Request") {
        return new APIError(message, 400);
    }
    static unathorized(message = "Unauthorized Access") {
        return new APIError(message, 401);
    }
    static internalServerError(message = "Something went wrong") {
        return new APIError(message, 500);
    }
}
exports.default = APIError;
