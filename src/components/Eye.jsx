import React from 'react'

const Eye = ({rotate,play}) => {
  return (
            <div className="flex absolute top-1/2 left-1/2 gap-5 md:gap-10 -translate-x-1/2 -translate-y-1/2">
                {/* Left Eye */}
                <svg
                    className="w-[25vw]  md:w-[200px] md:h-[200px] overflow-visible flex-grow"
                    viewBox="0 0 200 201"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="100" cy="100" r="100" fill="#F4F4F4"></circle>
                    <g className="origin-center">
                        <circle cx="100" cy="100" r="60" fill="#212121"></circle>
                        <circle
                            cx="100"
                            cy="50"
                            r="8"
                            fill="#F4F4F4"
                            style={{ transform: `rotate(${rotate}deg)`, transformOrigin: "100px 100px" }}
                        ></circle>
                    </g>
                    <text
                        className="uppercase"
                        x="100"
                        y="105"
                        textAnchor="middle"
                        fill="#F4F4F4"
                    >
                        {play && "play"}
                    </text>
                </svg>

                {/* Right Eye */}
                <svg
                    className= "w-[25vw] md:w-[200px] md:h-[200px] overflow-visible flex-grow"
                    viewBox="0 0 200 201"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="100" cy="100" r="100" fill="#F4F4F4"></circle>
                    <g className="origin-center">
                        <circle cx="100" cy="100" r="60" fill="#212121"></circle>
                        <circle
                            cx="100"
                            cy="50"
                            r="8"
                            fill="#F4F4F4"
                            style={{ transform: `rotate(${rotate}deg)`, transformOrigin: "100px 100px" }}
                        ></circle>
                    </g>
                    <text
                        className="uppercase"
                        x="100"
                        y="105"
                        textAnchor="middle"
                        fill="#F4F4F4"
                    >
                       {play && "play"}
                    </text>
                </svg>
            </div>
  )
}

export default Eye