import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { ApplyCard } from "./components/ApplyCard";
import { CardList } from "./components/CardList";
import { TransactionDetails } from "./components/TransactionDetails";
import { FundActivity } from "./components/FundActivity";
import { HelpCenter } from "./components/HelpCenter";
import { UserProfile } from "./components/UserProfile";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Dashboard },
        { path: "apply", Component: ApplyCard },
        { path: "cards", Component: CardList },
        { path: "transactions", Component: TransactionDetails },
        { path: "funds", Component: FundActivity },
        { path: "help", Component: HelpCenter },
        { path: "profile", Component: UserProfile },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);