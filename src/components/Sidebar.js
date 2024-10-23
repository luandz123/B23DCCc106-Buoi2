import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <Link to="/">Quản lý hàng hóa</Link>
      <Link to="/guide">Hướng dẫn</Link>
    </div>
  );
};

export default Sidebar;
