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
  style.push("button--" + type);
  style.push("button--" + size);

  return (
    <button type="button" className={style.join(" ")} {...props}>
      {label}
    </button>
  );
}
