import { UsersListLayout } from "./UsersListLayout";

import type { ComponentMeta, Story } from "@storybook/react";

export default {
  title: "UsersListLayout",
  component: UsersListLayout,
} as ComponentMeta<typeof UsersListLayout>;

const Template: Story = (props) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <UsersListLayout {...props} />
    </div>
  );
};

export const Simple = Template.bind({});
