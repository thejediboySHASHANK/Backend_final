import { NextFunction, Response, Request, response } from "express";
import { prisma } from "../app";
import APIError from "../error/APIError";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.body;
  try {
    await prisma.user.create({
      data: userData,
    });

    res.status(201).json({
      message: "User created successfully",
      user: userData,
    });
  } catch (error) {
    next(APIError.internalServerError("Something went wrong"));
  }
};

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

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = Number(req.params.id);
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    res.status(200).json({
      message: "User Found",
      user: user,
    });
  } catch (error) {
    next(APIError.badRequest("User Not Found"));
  }
};

export { createUser };
