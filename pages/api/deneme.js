const likes = [
  {
    likes: 0,
  },
  { likes: 1 },
];

export default (req, res) => {
  res.json(likes);
};
