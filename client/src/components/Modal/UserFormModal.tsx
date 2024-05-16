import useUser from "@/hooks/useUser";
import React, { useState } from "react";
import Button from "../Buttons/Button";

type Props = {
  isOpen?: boolean;
  onClose?: any;
  action?: "add" | "edit";
  editedUser?: any;
};

const UserFormModal = (props: Props) => {
  const { isOpen, onClose, action, editedUser } = props;
  const { data, addUser, editUser } = useUser();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [add, setAdd] = useState("");

  const handleSubmit = () => {
    if (action === "add") {
      addUser(fname, lname, add);
    } else if (action === "edit") {
      editUser(fname, lname, add, editedUser);
    }

    onClose();
  };

  return (
    <div
      className={`flex justify-center w-full h-screen items-center z-10 opacity-75 bg-slate-500 fixed top-0 right-0 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-1 w-[30%] h-[30%] justify-center border border-black rounded p-5 bg-white">
        <Button
          name="Close"
          className="border border-black bg-slate-300 p-2 rounded w-20"
          onClick={() => onClose()}
        />
        <input
          type="text"
          className="border border-black p-2 rounded"
          placeholder="secret"
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          className="border border-black p-2 rounded"
          placeholder="secret"
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          type="text"
          className="border border-black p-2 rounded"
          placeholder="secret"
          onChange={(e) => setAdd(e.target.value)}
        />

        <Button onClick={() => handleSubmit()} />
      </div>
    </div>
  );
};

export default UserFormModal;
