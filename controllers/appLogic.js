const Idea = require("../models/idea");

//fetch all ideas
const getAllIdeas = (req, res) => {
  Idea.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("vault", { ideas: result, formValues: {} });
    })
    .catch((err) => {
      console.log(err);
    });
};

//post idea
const postIdea = (req, res) => {
  if (req.body.id) {
    Idea.updateOne({ _id: req.body.id }, { ...req.body }, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/vault");
      }
    });
  } else {
    const idea = new Idea(req.body);

    idea
      .save()
      .then((result) => {
        res.redirect("/vault");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

//edit idea
const retrieveInfo = async (req, res) => {
  const id = req.params.id;
  const ideas = await Idea.find().sort({ createdAt: -1 });

  Idea.findById(id, (err, doc) => {
    if (!err) {
      res.render("vault", { formValues: doc, ideas });
    } else {
      console.log(err);
    }
  });
};

//delete idea
const deleteIdea = (req, res) => {
  Idea.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/vault");
    } else {
      console.log(err);
    }
  });
};

module.exports = {
  getAllIdeas,
  postIdea,
  retrieveInfo,
  deleteIdea,
};
