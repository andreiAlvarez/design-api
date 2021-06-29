let data = "";
module.exports = ({ axios }) => ({
  get: async (req, res) => {
    data = await axios.get("/users").catch((err) => console.log(err));
    return res.send(data);
  },
  post: async (req, res) => {
    data = await axios
      .post(`/users`, req.body)
      .then(res.send(data))
      .catch((err) => console.log(err));
  },
  put: async (req, res) => {
    data = await axios
      .put(`/users/${req.params.id}`, req.body)
      .then(res.send(data))
      .catch((err) => console.log(err));
  },
  delete: async (req, res) => {
    data = await axios
      .delete(`/users/${req.params.id}`, req.body)
      .catch((err) => console.log(err));
    return res.sendStatus(204);
  },
});
