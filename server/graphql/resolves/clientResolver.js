// import Client from "../../models/Client.js";
// import Project from "../../models/Project.js";

const Client = require("../../models/Client");
const Project = require("../../models/Project");

// export default {
module.exports = {
  Query: {
    clients: async () => await Client.find(),
    client: async (_, { id }) => await Client.findById(id),
  },
  Mutation: {
    async addClient(_, { clientInput: { name, email, phone } }) {
      const newClient = new Client({
        name: name,
        email: email,
        phone: phone,
        createdAt: new Date().toISOString(),
      });

      const res = await newClient.save();
      console.log(res);
      return {
        id: res.id, // id需另外給，否則會回傳null
        ...res._doc, // 回傳所有屬性
      };
    },
    async deleteClient(_, { id }) {
      // 找到這個使用者所有的po文並刪除
      Project.find({ clientId: id }).then((projects) => {
        projects.forEach((project) => {
          project.remove();
        });
      });

      const res = await Client.findByIdAndRemove(id);
      return {
        id: res.id, // id需另外給，否則會回傳null
        ...res._doc, // 回傳所有屬性
      };
    },
  },
};
