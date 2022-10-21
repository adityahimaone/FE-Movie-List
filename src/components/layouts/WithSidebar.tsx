import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import NavbarMain from '../UI/Navbar';
import SidebarMain from '../UI/Sidebar';

export default function WithSidebar(): JSX.Element {
  const [sidebarShow, setSidebarShow] = useState<boolean>(true);

  const handleSidebar = () => {
    setSidebarShow(!sidebarShow);
  };

  return (
    <div className="h-screen w-full  overflow-hidden bg-blue-200">
      <NavbarMain sidebarShow={sidebarShow} onShowSidebar={handleSidebar} />
      <main className="flex h-full w-full overflow-hidden bg-slate-100">
        <SidebarMain sidebarShow={sidebarShow} />
        <section className="mb-10 w-full overflow-y-scroll p-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
