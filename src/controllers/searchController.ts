import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";

export const search = (req: Request, res: Response) => {
  let list = Pet.getFromName(req.query.q as string);

  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: list.length > 0 ? (req.query.q as string) : "Not found! 404",
      background: "allanimals.jpg",
      verifier: list.length > 0 ? true : false,
    },
    list,
  });
};
