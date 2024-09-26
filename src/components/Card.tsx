import "./card.css";

export interface CardProps {
  children?: JSX.Element | JSX.Element[];
}

export function Card(props: CardProps) {
  return <div className="card">{props.children || <></>}</div>;
}
