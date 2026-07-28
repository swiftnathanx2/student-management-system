import { Outlet } from "react-router-dom";
import { SideBar } from "./components/Sidebar";

export function RootLayout() {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
