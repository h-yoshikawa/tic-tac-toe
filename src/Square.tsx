type Props = {
  value: number;
};

export const Square = ({ value }: Props) => {
  return <button className="square">{value}</button>;
};
