import Project from "../../models/Project.js";
import Client from "../../models/Client.js";

export default {
  Query: {
    projects: async () => await Project.find(),
    // 複合查詢
    project: async (_, { id }) => {
      const res = await Project.findById(id);
      const client = await Client.findById(res.clientId);
      return {
        id: res.id, // id需另外給，否則會回傳null
        ...res._doc, // 回傳所有屬性
        client: client, // 將找到的client資料合併回project並返回
      };
    },
  },
  Mutation: {
    async addProject(
      _,
      { projectInput: { name, description, status, clientId } }
    ) {
      const project = new Project({
        name: name,
        description: description,
        status: status,
        clientId: clientId,
      });

      const res = await project.save();
      console.log(res);
      return {
        id: res.id, // id需另外給，否則會回傳null
        ...res._doc, // 回傳所有屬性
      };
    },
    async updateProject(
      _,
      { projectInput: { id, name, description, status } }
    ) {
      const res = await Project.findByIdAndUpdate(id, {
        name: name,
        description: description,
        status: status,
      });
      return {
        id: res.id, // id需另外給，否則會回傳null
        ...res._doc, // 回傳所有屬性
      };
    },
    async deleteProject(_, { id }) {
      const res = await Project.findByIdAndRemove(id);
      return {
        id: res.id, // id需另外給，否則會回傳null
        ...res._doc, // 回傳所有屬性
      };
    },
  },
};
