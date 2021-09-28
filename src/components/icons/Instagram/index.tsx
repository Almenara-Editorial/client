import * as React from 'react'

export function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 0C11.651 0 11.109 0.021 9.40695 0.093C7.69795 0.177 6.54195 0.442 5.52195 0.838C4.45442 1.24102 3.48762 1.87202 2.68895 2.687C1.8717 3.4838 1.24035 4.45113 0.839953 5.52C0.443953 6.54 0.178953 7.696 0.0949531 9.405C0.0179531 11.108 0.00195312 11.649 0.00195312 15.998C0.00195312 20.347 0.0229531 20.889 0.0949531 22.591C0.178953 24.295 0.443953 25.456 0.839953 26.476C1.24297 27.5435 1.87397 28.5103 2.68895 29.309C3.48575 30.1263 4.45309 30.7576 5.52195 31.158C6.54195 31.549 7.70295 31.819 9.40695 31.903C11.11 31.98 11.651 31.996 16 31.996C20.349 31.996 20.891 31.975 22.593 31.903C24.297 31.819 25.458 31.548 26.478 31.158C27.5455 30.755 28.5123 30.124 29.311 29.309C30.1293 28.5131 30.7608 27.5455 31.16 26.476C31.551 25.456 31.821 24.295 31.905 22.591C31.982 20.888 31.998 20.347 31.998 15.998C31.998 11.649 31.977 11.107 31.905 9.405C31.821 7.701 31.55 6.534 31.16 5.52C30.7569 4.45246 30.1259 3.48566 29.311 2.687C28.515 1.86869 27.5474 1.23718 26.478 0.838C25.458 0.442 24.297 0.177 22.593 0.093C20.89 0.016 20.349 0 16 0ZM16 2.88C20.271 2.88 20.781 2.901 22.469 2.973C24.026 3.046 24.874 3.306 25.437 3.526C26.133 3.78292 26.7629 4.19185 27.281 4.723C27.8112 5.23883 28.2186 5.86735 28.473 6.562C28.693 7.125 28.953 7.973 29.026 9.53C29.098 11.218 29.119 11.729 29.119 15.999C29.119 20.269 29.098 20.78 29.02 22.468C28.936 24.025 28.676 24.873 28.457 25.436C28.154 26.187 27.816 26.712 27.258 27.28C26.7382 27.8078 26.1086 28.2148 25.414 28.472C24.858 28.692 23.998 28.952 22.435 29.025C20.738 29.097 20.238 29.118 15.956 29.118C11.674 29.118 11.175 29.097 9.47595 29.019C7.91895 28.935 7.05995 28.675 6.49695 28.456C5.73695 28.153 5.21595 27.815 4.65795 27.257C4.09495 26.694 3.73695 26.158 3.46095 25.413C3.23695 24.857 2.98095 23.997 2.89795 22.434C2.84095 20.757 2.81395 20.237 2.81395 15.975C2.81395 11.715 2.84095 11.194 2.89795 9.496C2.98095 7.933 3.23695 7.075 3.46095 6.517C3.73695 5.756 4.09595 5.236 4.65795 4.673C5.21495 4.116 5.73695 3.756 6.49695 3.474C7.05995 3.255 7.89795 2.995 9.46095 2.917C11.158 2.856 11.658 2.834 15.934 2.834L16 2.88ZM16 7.787C14.9213 7.78661 13.8531 7.99877 12.8565 8.41137C11.8599 8.82398 10.9543 9.42893 10.1916 10.1917C9.42888 10.9544 8.82393 11.8599 8.41133 12.8566C7.99872 13.8532 7.78656 14.9213 7.78695 16C7.78656 17.0787 7.99872 18.1468 8.41133 19.1434C8.82393 20.1401 9.42888 21.0456 10.1916 21.8083C10.9543 22.5711 11.8599 23.176 12.8565 23.5886C13.8531 24.0012 14.9213 24.2134 16 24.213C17.0786 24.2134 18.1468 24.0012 19.1434 23.5886C20.14 23.176 21.0456 22.5711 21.8083 21.8083C22.571 21.0456 23.176 20.1401 23.5886 19.1434C24.0012 18.1468 24.2133 17.0787 24.213 16C24.2133 14.9213 24.0012 13.8532 23.5886 12.8566C23.176 11.8599 22.571 10.9544 21.8083 10.1917C21.0456 9.42893 20.14 8.82398 19.1434 8.41137C18.1468 7.99877 17.0786 7.78661 16 7.787ZM16 21.333C13.052 21.333 10.667 18.948 10.667 16C10.667 13.052 13.052 10.667 16 10.667C18.948 10.667 21.333 13.052 21.333 16C21.333 18.948 18.948 21.333 16 21.333ZM26.464 7.459C26.4634 7.96866 26.2606 8.45727 25.9 8.81747C25.5394 9.17767 25.0506 9.38 24.541 9.38C24.2889 9.38 24.0394 9.33036 23.8066 9.23392C23.5738 9.13749 23.3622 8.99613 23.184 8.81794C23.0058 8.63974 22.8645 8.42819 22.768 8.19537C22.6716 7.96255 22.622 7.71301 22.622 7.461C22.622 7.20899 22.6716 6.95945 22.768 6.72663C22.8645 6.49381 23.0058 6.28226 23.184 6.10406C23.3622 5.92587 23.5738 5.78451 23.8066 5.68808C24.0394 5.59164 24.2889 5.542 24.541 5.542C25.598 5.542 26.464 6.402 26.464 7.459Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Instagram
