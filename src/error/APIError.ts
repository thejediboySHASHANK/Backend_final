class APIError {
    message : string;
    code : number;

    constructor (message:string, code: number) {
        this.message = message;
        this.code = code;
    }

    static badRequest (message: string = "Bad Request") {
        return new APIError (message, 400);
    }

    static unathorized (message: string = "Unauthorized Access") {
        return new APIError (message, 401);
    }

    static internalServerError (message: string = "Something went wrong") {
        return new APIError (message, 500);
    }
}

export default APIError;