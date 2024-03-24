
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout/Layout";
import Home from "./routes/Home/Home";
import Team from "./routes/Team/Team";
import Menu from "./routes/Menu/Menu";
import Contact from "./routes/Contact/Contact";
import { ScrollProvider } from "./utils/contexts/ScrollContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export const navItems = [
    {
        path: "home",
        element: <Home />,
        meta: { title: "home" },
        subLinks: [{to: "", label: ""}]
    },
    {
        path: "team",
        element: <Team />,
        meta: { title: "team" },
        subLinks: [{to: "", label: ""}]
    },
    {
        path: "menu",
        element: <Menu />,
        meta: { title: "menu" },
        subLinks: [{to: "", label: ""}]
    },
    {
        path: "contact",
        element: <Contact />,
        meta: { title: "contact" },
        subLinks: [{to: "", label: ""}]
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Layout />
            </>
        ),
        children: navItems,
    },
]);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ScrollProvider>
                <RouterProvider router={router} />
            </ScrollProvider>
        </QueryClientProvider>
    );
}

export default App;
