import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from "../Utils.js";
import Content from "../Models/ContentModel.js";
import featuredcontect from "../Models/FeaturedContentModel.js";

const contentRouter = express.Router();


contentRouter.get(
  "/",
   isAuth,
  expressAsyncHandler(async (req, res) => {
    console.log("");
    const contents = await Content.find();
    res.send(contents);
  })
);

contentRouter.get(
  "/id/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    //! no need to try catch thanks for express async handler
    const { id } = req.params;
    console.log(id);
    const content = await Content.findById(id);
    content
      ? res.send(content)
      : res.status(404).send({ message: "Not Found" });
})
);

contentRouter.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const searchQuery = query.query || "";


    const queryFilter = searchQuery
      ? { title: { $regex: searchQuery, $options: "i" } }
      : {};

    const contents = await Content.find({
      ...queryFilter,
    })
    const countContent = await Content.countDocuments({
      ...queryFilter,
    });
    console.log(countContent);
    res.send({
      contents,
      countContent: countContent,
    });
  })
);
  

      contentRouter.get(
        "/random/:type",
        isAuth,
        expressAsyncHandler(async (req, res) => {
          const { type } = req.params;
          if (type == "all") {
            const content = await Content.aggregate([{ $sample: { size: 1 } }]);
            return res.status(200).send(content[0]);
          } else {
            const content = await Content.aggregate([
              { $match: { isSeries: type == "series" } },
              { $sample: { size: 1 } },
            ]);
            return res.status(200).send(content[0]);
          }
      
          // const content = await Content.findById("64ddc3a0fd9cd0860359a4d3");
          // return res.status(200).send(content);
        })
      );

        contentRouter.get("/featured/:type",isAuth, expressAsyncHandler(async (req, res) => {
            const { type } = req.params;
            const featuredContent = await featuredcontect.find(
              type == "all" ? {} : { type: type }
            )
              .populate("contentList")
              .exec();
            return res.status(200).send(featuredContent);
          })
        );


export default contentRouter;