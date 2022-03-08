import Employee from '../models/employee';




export const makeEmployee = async (req, res) => {

  try {
    // console.log(req.body);
    const {  email, password} = req.body;
    console.log(req.body);

    // register
    const user = new Employee({
      email,
      password,
 
    });
    await user.save();
    // console.log("saved user", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send('Error. Try again.');
  }
};


export const getAllEmployee = async (req, res) => {
  let employees = await Employee.find({})
    .sort({'createdAt': 1})
    // .sort([["", "desc"]])
    .exec();
  res.json(employees);
};


export const remove = async (req, res) => {


  try {
    const deleted = await Employee.findOneAndRemove({
      id: req.params.slug,
    }).exec();

    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Trainer delete failed");
  }
};

