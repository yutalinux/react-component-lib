import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import React from "react";

const meta = {
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
