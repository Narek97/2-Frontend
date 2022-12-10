import React, { FC } from "react";
//general type

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
