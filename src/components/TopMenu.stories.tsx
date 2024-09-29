import type { Meta, StoryObj } from "@storybook/react";

import { TopMenu, TopMenuItem } from "./TopMenu";
import React from "react";

const meta = {
  component: TopMenu,
} satisfies Meta<typeof TopMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TopMenuItem href="#">X</TopMenuItem>
        <TopMenuItem href="#">Bluesky</TopMenuItem>
        <TopMenuItem href="#">Zenn</TopMenuItem>
        <TopMenuItem href="#">Github</TopMenuItem>
      </>
    ),
  },
};
