import React, { FC, useState } from "react";
//react ts props

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  variant: CardVariant;
  onClick?: () => void;
  onClickNumber?: (num: number) => void;
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({
  width,
  height,
  variant,
  onClick,
  onClickNumber,
  children,
}) => {
  const [state, setState] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightblue" : "none",
      }}
      // onClick={onClick}
      onClick={() => (onClickNumber ? onClickNumber(state) : null)}
    >
      {children}
    </div>
  );
};

export default Card;
