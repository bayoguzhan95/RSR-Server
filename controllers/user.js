import User from "../models/user";
import slugify from 'slugify'


export const create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.title);
    const newUser = await new User(req.body).save();
    res.json(newUser);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create Trainer failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

// populate yapmazsak mesela user partindaki bilgilerin sadece id'si gözükür ama populate yaparsak tüm bilgileri aliriz net bir şekilde
export const listAll = async (req, res) => {
  let trainers = await User.find({})
    .limit(parseInt(req.params.count))
    .sort({'createdAt': 1})
    // .sort([["", "desc"]])
    .exec();
  res.json(trainers);
};


export const remove = async (req, res) => {
  try {
    const deleted = await User.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.status(400).send("User delete failed");
  }
};


export const read = async (req, res) => {
  const user = await User.findOne({ slug: req.params.slug })
    .exec();
  res.json(user);
};


// req.body demek bütün bilgilerimi update ediyorum demek. user update e göre.
export const update = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updated = await User.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log("User UPDATE ERROR ----> ", err);

    res.status(400).json({
      err: err.message,
    });
  }
};
