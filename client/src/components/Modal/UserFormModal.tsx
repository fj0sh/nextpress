import useUser from "@/hooks/useUser";
import React, { useState } from "react";
import Button from "../Buttons/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  isOpen?: boolean;
  onClose?: any;
  action?: "add" | "edit";
  editedUser?: any;
};

const Error = () => toast.error("NO Input!!", { position: "top-center" });

const UserFormModal = (props: Props) => {
  const { isOpen, onClose, action, editedUser } = props;
  const { data, addUser, editUser } = useUser();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [add, setAdd] = useState("");

  const handleSubmit = () => {
    if (fname !== "" || lname !== "" || add !== "") {
      if (action === "add") {
        addUser(fname, lname, add);
      } else if (action === "edit") {
        editUser(fname, lname, add, editedUser);
      }
      onClose();
    } else {
      Error();
    }
  };

  return (
    <div
      className={`flex justify-center w-full h-screen items-center z-10 fixed top-0 right-0 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <ToastContainer />
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-75"
        onClick={onClose}
      ></div>
      <div className="flex flex-col gap-1 w-[30%] h-[30%] justify-center border border-black rounded p-5 bg-white z-20">
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
