import React, { ReactNode } from "react";
import "./AdminCardBlock.css";

interface IAdminCardBlock {
  children: ReactNode;
}

const AdminCardBlock: React.FC<IAdminCardBlock> = ({ children }) => {
  return <div className="admin-card-block">{children}</div>;
};

export default AdminCardBlock;
