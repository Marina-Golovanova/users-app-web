import { icons } from "./config";

import type { Meta, Story } from "@storybook/react";

import styles from "./icon-stories.module.scss";

export default {
  title: "Icons",
} as Meta;

const Template: Story = () => {
  return (
    <div className={styles.tableLayout}>
      {icons.map((icon, index) => (
        <div key={index} className={styles.iconContainer}>
          <div className={styles.iconLayout}>{icon.element}</div>
          <span className={styles.iconName}>{icon.label}</span>
        </div>
      ))}
    </div>
  );
};

export const Simple = Template.bind({});

Simple.args = {};
