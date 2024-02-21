const router = require("express").Router();
const { Story, Like } = require("../../models");

router.post("/create-story", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res
        .status(403)
        .json({ message: "You must be logged in to create a story" });
      return;
    }

    // console.log(req.session)

    await Story.create({
      title: req.body.title,
      content: req.body.content,
      description : req.body.description,
      series: req.body.series,
      user_id: req.session.user_id,
    });

    res.status(200).redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/like-story/:id", async (req, res) => {
  console.log("like story route");
  try {
    if (!req.session.loggedIn) {
      res.redirect("/login");
      return;
    }

    const storyId = req.params.id;
    const userId = req.session.user_id;

    console.log(storyId, userId);

    const existingLike = await Like.findOne({
      where: {
        user_id: userId,
        story_id: storyId,
      },
    });

    if (existingLike) {
      await existingLike.destroy();
      res.redirect("/");
      return;
    }

    await Like.create({
      user_id: userId,
      story_id: storyId,
    });

    console.log("Story liked successfully");
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request." });
  }
});

module.exports = router;
