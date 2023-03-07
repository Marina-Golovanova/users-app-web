import { UsersListPage } from "../pages/users-list-page";
import { Layout } from "../shared/ui/layout";

import "./style/root.scss";

export const App: React.FC = () => {
  return (
    <Layout>
      <UsersListPage />
    </Layout>
  );
};
