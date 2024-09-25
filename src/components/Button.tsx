import "./button.css";

export type ButtonType = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  type = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const style = [];
  style.push("storybook-button");

  switch (type) {
    case "primary":
      style.push("storybook-button--primary");
      break;
    case "secondary":
      style.push("storybook-button--secondary");
      break;
  }

  switch (size) {
    case "small":
      style.push("storybook-button--small");
      break;
    case "medium":
      style.push("storybook-button--medium");
      break;
    case "large":
      style.push("storybook-button--large");
      break;
  }

  return (
    <button type="button" className={style.join(" ")} {...props}>
      {label}
    </button>
  );
};
