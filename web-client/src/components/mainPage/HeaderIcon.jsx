import * as React from "react";

const WriteBtn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={85}
    height={30}
    fill="none"
    {...props}
  >
    <rect width={85} height={30} fill="#000" rx={10} />
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="m22.626 7.565-1.418 1.418 3.809 3.809 1.418-1.418a1.874 1.874 0 0 0 0-2.651L25.28 7.565a1.874 1.874 0 0 0-2.651 0h-.003Zm-2.08 2.08-6.83 6.832a2.6 2.6 0 0 0-.65 1.096l-1.037 3.525a.703.703 0 0 0 .87.876l3.525-1.038a2.598 2.598 0 0 0 1.096-.65l6.835-6.832-3.81-3.808Z"
      />
    </g>
    <path
      fill="#fff"
      d="M36.11 11.43h1.02v1.56c0 2.1-.59 4.14-2.08 5.04l-.82-.98c1.38-.83 1.88-2.49 1.88-4.06v-1.56Zm.26 0h1.03v1.46c0 1.6.42 3.11 1.71 3.82l-.77 1.05c-1.5-.84-1.97-2.75-1.97-4.87v-1.46Zm4.72-.8h1.27v9.26h-1.27v-9.26Zm-1.11 3.6h1.53v1.07h-1.53v-1.07Zm-.89-3.46h1.25v8.7h-1.25v-8.7Zm7.805.23h5.87v1.05h-5.87V11Zm-1.02 2.89h8.38v1.05h-8.38v-1.05Zm6.09-2.89h1.31v.63c0 .66 0 1.5-.24 2.57l-1.31-.12c.24-1.05.24-1.8.24-2.45V11Zm-5.16 4.57h6.44v2.61h-5.1v.94h-1.33V17.2h5.11v-.6h-5.12v-1.03Zm.01 3.23h6.67v1.03h-6.67V18.8Zm9.93-7.51h1.01v1.05c0 1.59-.58 3.13-2.06 3.77l-.68-.98c1.25-.55 1.73-1.71 1.73-2.79v-1.05Zm.32 0h1.01v1.05c0 1.06.45 2.27 1.74 2.85l-.57 1.06c-1.62-.67-2.18-2.34-2.18-3.91v-1.05Zm3.36 0h1v1.05c0 1.59-.56 3.25-2.18 3.91l-.56-1.06c1.28-.57 1.74-1.77 1.74-2.85v-1.05Zm.33 0h1.01v1.05c0 1.12.47 2.25 1.73 2.79l-.69.98c-1.48-.63-2.05-2.14-2.05-3.77v-1.05Zm-5.69 6.38h8.38v1.08h-8.38v-1.08Zm15.578-7.04h1.34v9.26h-1.34v-9.26Zm-2.73.96h1.32c0 2.83-.96 5.15-4.25 6.74l-.69-1.06c2.66-1.28 3.62-2.96 3.62-5.44v-.24Zm-3.13 0h3.76v1.05h-3.76v-1.05Z"
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M12 7h15v15H12z" />
      </clipPath>
    </defs>
  </svg>
);

export { WriteBtn };
