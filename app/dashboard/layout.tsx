/**
 * created 11.02.2025
 */
import React from 'react';
import type {PropsWithChildren} from 'react';
import SideNav from "@/app/ui/dashboard/sidenav";

type layoutComponentType = PropsWithChildren<{}>

export default function Layout({children}: layoutComponentType) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
