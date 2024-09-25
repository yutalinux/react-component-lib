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
  style.push("transition");

  switch (type) {
    case "primary":
      style.push("bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700");
      break;
    case "secondary":
      style.push(
        "bg-white text-black border hover:bg-neutral-100 active:bg-neutral-300"
      );
      break;
  }

  switch (size) {
    case "small":
      style.push("text-sm px-2 py-1 rounded-md");
      break;
    case "medium":
      style.push("text-base px-2 py-1 rounded-md");
      break;
    case "large":
      style.push("text-lg px-2 py-1 rounded-md");
      break;
  }

  <div className="text-"></div>;

  return (
    <button
      type="button"
      className={style.join(" ")}
      //"   transition"
      {...props}
    >
      {label}
    </button>
  );
};
