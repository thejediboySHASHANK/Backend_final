"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const app_1 = require("../app");
const APIError_1 = __importDefault(require("../error/APIError"));
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        yield app_1.prisma.user.create({
            data: userData,
        });
        res.status(201).json({
            message: "User created successfully",
            user: userData,
        });
    }
    catch (error) {
        next(APIError_1.default.internalServerError("Something went wrong"));
    }
});
exports.createUser = createUser;
// const getUser = async (req : Request, res: Response, next:NextFunction) => {
//     const userId = Number(req.params.id);
//     const user = await prisma.user.findUnique ({
//         where : {
//             id : userId
//         }
//     })
//     res.status (200).json ({
//         message : "User found",
//         user : user
//     })
// }
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.id);
    try {
        const user = yield app_1.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        res.status(200).json({
            message: "User Found",
            user: user,
        });
    }
    catch (error) {
        next(APIError_1.default.badRequest("User Not Found"));
    }
});
