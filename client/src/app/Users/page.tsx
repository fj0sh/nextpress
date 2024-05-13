"use client";
import { Button } from "@/components";
import UserFormModal from "@/components/Modal/UserFormModal";
import useModal from "@/hooks/useModal";
import useUser from "@/hooks/useUser";
import React, { useState } from "react";

const Users = () => {
  const { data, deleteUser } = useUser();
  const [show, setShow] = useState(false);

  const toggleAddModal = () => {
    setShow((prev) => !prev);
  };
  console.log(show);

  const toggleEditModal = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <UserFormModal open={show} />
      <Button name="Add User" onClick={() => toggleAddModal()} />
      <table className="w-full border border-black border-collapse">
        <tbody>
          {data?.map((users) => (
            <tr
              key={users.customer_id}
              className="*:border *:border-black *:border-collapse *:p-3"
            >
              <td>{users.first_name}</td>
              <td>{users.last_name}</td>
              <td>{users.address}</td>
              <td>
                <Button name="Edit" onClick={() => toggleEditModal()} />
                <Button
                  name="Delete"
                  onClick={() => deleteUser(users.first_name)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
