import "./Button.css";

export type ButtonType = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  label: string;
  onClick?: () => void;
}

export function Button({
  type = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) {
  const style = [];
  style.push("button");

  switch (type) {
    case "primary":
      style.push("button--primary");
      break;
    case "secondary":
      style.push("button--secondary");
      break;
  }

  switch (size) {
    case "small":
      style.push("button--small");
      break;
    case "medium":
      style.push("button--medium");
      break;
    case "large":
      style.push("button--large");
      break;
  }

  return (
    <button type="button" className={style.join(" ")} {...props}>
      {label}
    </button>
  );
}
