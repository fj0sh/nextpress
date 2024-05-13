import useUser from "@/hooks/useUser";
import React, { useState } from "react";
import Button from "../Buttons/Button";
import useModal from "@/hooks/useModal";

type Props = {
  open?: boolean;
  action?: "add" | "edit";
};

const UserFormModal = (props: Props) => {
  const { open } = props;
  const { data, addUser, editUser } = useUser();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [add, setAdd] = useState("");

  console.log(fname);

  return (
    <div
      className={`flex justify-center w-full h-screen items-center z-10 opacity-75 bg-slate-500 fixed top-0 right-0 ${
        open ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-1 w-[30%] h-[30%] justify-center border border-black rounded p-5 bg-white">
        <Button
          name="Close"
          className="border border-black bg-slate-300 p-2 rounded w-20"
          onClick={() => ""}
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

        <Button
          onClick={() => {
            editUser(fname, lname, add, fname);
          }}
        />
      </div>
    </div>
  );
};

export default UserFormModal;
