"use client";
import { Button, UserFormModal } from "@/components";
import useUser from "@/hooks/useUser";
import React, { useEffect, useState } from "react";
import { useXcontext } from "@/contexts";

const Users = () => {
  const { data, deleteUser } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<"add" | "edit" | undefined>(
    undefined
  );
  const [editUser, setEditUser] = useState<string>();

  const openModalToggle = () => {
    setIsModalOpen(true);
  };

  const closeModalToggle = () => {
    setIsModalOpen(false);
  };

  const setUpdate = (users: any) => {
    setEditUser(users);
    openModalToggle();
    setModalAction("edit");
  };

  const setAdd = () => {
    openModalToggle();
    setModalAction("add");
  };

  // const { X, setX, mess } = useXcontext();

  // const toggleContext = () => {
  //   setX((prev: any) => !prev);
  // };

  // useEffect(() => {
  //   console.log(X);
  // }, [X]);

  return (
    <div>
      <UserFormModal
        isOpen={isModalOpen}
        action={modalAction}
        editedUser={editUser}
        onClose={() => closeModalToggle()}
      />
      <Button name="Add User" onClick={() => setAdd()} />
      {/* <Button onClick={toggleContext}></Button> */}
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
                <Button
                  name="Edit"
                  onClick={() => setUpdate(users.first_name)}
                />
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
