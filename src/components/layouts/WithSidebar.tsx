import React from 'react';
import { Outlet } from 'react-router-dom';

import NavbarMain from '../UI/Navbar';
import SidebarMain from '../UI/Sidebar';

export default function WithSidebar(): JSX.Element {
  return (
    <div className="h-screen w-full  overflow-hidden bg-blue-200">
      <NavbarMain />
      <main className="flex h-full w-full overflow-hidden bg-slate-100">
        <SidebarMain />
        <section className="p-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
