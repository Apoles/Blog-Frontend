import blogs from "../../../blogs";

export default (req, res) => {
  res.status(200).json(blogs);
};
