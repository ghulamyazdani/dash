import React from "react";

export const Arrowprogress = ({ progress }: any) => {
  return (
    <svg
      width="469"
      height="44"
      viewBox="0 0 469 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M467.768 20.7678C468.744 19.7915 468.744 18.2085 467.768 17.2322L451.858 1.32233C450.882 0.34602 449.299 0.34602 448.322 1.32233C447.346 2.29864 447.346 3.88155 448.322 4.85786L462.464 19L448.322 33.1421C447.346 34.1184 447.346 35.7014 448.322 36.6777C449.299 37.654 450.882 37.654 451.858 36.6777L467.768 20.7678ZM0 21.5H466V16.5H0V21.5Z"
        fill="#49A7CB"
      />
      <rect x={progress} y="8" width="5" height="23" fill="#49A7CB" />
      <text x={progress} y="40" stroke="#51c5cf">
        {progress}%
      </text>
    </svg>
  );
};
