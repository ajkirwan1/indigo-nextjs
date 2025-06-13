'use client'
import React from "react";
import { FixedSizeList } from "react-window";

export default function VirtualizedFileList({ result }) {
  const Row = ({ index, style }) => (
    <li style={style} key={index}>
      <p>{result[index].name}</p>
    </li>
  );

  return (
    <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
      <FixedSizeList
        height={300}
        itemCount={result.length}
        itemSize={40}
        width="100%"
      >
        {Row}
      </FixedSizeList>
    </ul>
  );
}
