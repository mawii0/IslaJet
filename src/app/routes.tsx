import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./components/HomePage";
import { RoutesPage } from "./components/RoutesPage";
import { ServicesPage } from "./components/ServicesPage";
import { BookingPage } from "./components/BookingPage";
import { LoyaltyPage } from "./components/LoyaltyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "routes", Component: RoutesPage },
      { path: "services", Component: ServicesPage },
      { path: "booking", Component: BookingPage },
      { path: "loyalty", Component: LoyaltyPage },
    ],
  },
]);
