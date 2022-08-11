import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../graphql/mutations/clientMutations";
import { GET_CLIENTS } from "../graphql/queries/clientQueries";
import { GET_PROJECTS } from "../graphql/queries/projectQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // 資料異動完更新畫面有兩種方法
    // 方法一：再查詢一次 (可放入多個查詢)
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    // 方法二：更新緩存
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       // 將被刪除的過濾掉寫回緩存
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
