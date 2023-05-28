import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Contacts, ChartsNMaps, NotFound } from "./pages";
import { Contact2, BarChart3 } from "lucide-react";
import { useLocation, type Location } from "react-router-dom";
import { cn } from "./lib/utils";
import ContactDetails from "./pages/contacts/[id]";
import { useParams } from "react-router-dom";

const routes = [
  {
    id: 1,
    path: "/contacts",
    name: "Contacts",
    image: Contact2,
  },
  {
    id: 2,
    path: "/chartsnmaps",
    name: "Charts and Maps",
    image: BarChart3,
  },
];

const curPageFinder = (location: Location) =>
  routes.find((route) => route.path === location.pathname);

const App = () => {
  const location = useLocation();

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      <header className="flex justify-center items-center text-xl font-bold backdrop-blur-[2px] dark:shadow-[#ffffff1a] px-2 h-16 shadow-md">
        <span>{curPageFinder(location)?.name}</span>
      </header>
      <div className="flex flex-col items-center grow sm:flex-row">
        <nav className="sm:h-full sm:w-max w-full">
          <ul className="flex sm:flex-col gap-6 h-10 items-center w-full sm:justify-start justify-center sm:h-full py-10 shadow">
            {routes.map((route) => (
              <li
                key={route.id}
                className="transition ease-in duration-300 hover:scale-110"
              >
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      isActive
                        ? "underline scale-105 font-bold"
                        : "no-underline font-semibold",
                      "flex items-center justify-between"
                    )
                  }
                  to={route.path}
                >
                  {<route.image className="w-16" />}
                  <span className="hidden md:block text-center w-max grow pr-5">
                    {route.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <main className="self-start w-full sm:p-10 p-6">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="contacts" replace={true} />}
            />
            <Route path="contacts" element={<Contacts />}></Route>
            <Route path="contacts/:id" element={<ContactDetails />} />
            <Route path="chartsnmaps" element={<ChartsNMaps />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
