import { Layout } from "../shared/ui/layout";
import { UsersListLayout } from "../shared/ui/users-list-layout";

import "./style/root.scss";

export const App: React.FC = () => {
  return (
    <Layout>
      <UsersListLayout></UsersListLayout>
    </Layout>
  );
};
