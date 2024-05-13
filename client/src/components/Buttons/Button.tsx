import React from "react";

type Props = {
  name?: string;
  onClick?: () => void;
  className?: string;
};

const Button = (props: Props) => {
  const { name } = props;

  return (
    <button className="border border-black bg-slate-300 p-2 rounded" {...props}>
      {name ?? "Click"}
    </button>
  );
};

export default Button;
