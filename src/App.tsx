import { useQuery } from "@tanstack/react-query";
import { getAll } from "./api";
import { PropsWithChildren, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Contacts, ChartsNMaps, NotFound } from "./pages";

const routes = [
  {
    id: 1,
    path: "/contacts",
    name: "Contacts",
  },
  {
    id: 2,
    path: "/chartsnmaps",
    name: "Charts and Maps",
  },
];

const App = ({ children }: PropsWithChildren) => {
  const { data, isLoading } = useQuery({ queryKey: ["all"], queryFn: getAll });

  return (
    <div className="flex">
      <header></header>
      <nav className="p-4">
        <ul className="flex flex-col">
          {routes.map((route) => (
            <li
              key={route.id}
              className="transition ease-in duration-300 hover:scale-110"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline scale-105 font-bold"
                    : "no-underline font-semibold"
                }
                to={route.path}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>

      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/chartsnmaps" element={<ChartsNMaps />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
