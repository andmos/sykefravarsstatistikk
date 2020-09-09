import React, { FunctionComponent } from 'react';
import { SpeedometerSvgProps } from './SpeedometerGul';

export const SpeedometerRød: FunctionComponent<SpeedometerSvgProps> = ({ størrelsesfaktor }) => (
    <svg
        width={215 * størrelsesfaktor}
        height={118 * størrelsesfaktor}
        viewBox="0 0 215 118"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>Rødt speedometer der pilen indikerer et høyt tall</title>
        <path
            d="M1 107.174c0-28.16 11.22-55.165 31.193-75.076C52.166 12.186 79.254 1 107.5 1c28.246 0 55.334 11.186 75.307 31.098C202.779 52.009 214 79.015 214 107.174h-39.632a66.56 66.56 0 00-19.585-47.138A66.975 66.975 0 00107.5 40.511a66.972 66.972 0 00-47.283 19.525 66.56 66.56 0 00-19.585 47.138H1z"
            fill="#FB0E0E"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M183.16 31.744C163.093 11.738 135.878.5 107.5.5S51.907 11.739 31.84 31.744C11.774 51.748.5 78.882.5 107.174v.5h40.632v-.5A66.06 66.06 0 0160.57 60.39a66.472 66.472 0 0146.93-19.379 66.475 66.475 0 0146.93 19.38 66.06 66.06 0 0119.438 46.783v.5H214.5v-.5c0-28.292-11.274-55.425-31.34-75.43zM107.5 1.5c28.113 0 55.075 11.134 74.954 30.952 19.76 19.7 30.913 46.376 31.045 74.222h-38.633a67.066 67.066 0 00-19.73-46.992A67.472 67.472 0 00107.5 40.011a67.472 67.472 0 00-47.636 19.671 67.061 67.061 0 00-19.73 46.992H1.501c.132-27.846 11.285-54.522 31.045-74.222C52.425 12.634 79.386 1.5 107.5 1.5z"
            fill="#000"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.129 93.243L205 91l-86.572 22.358a11.541 11.541 0 004.016-8.76c0-5.61-4.001-10.29-9.315-11.355z"
            fill="#000"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M205 91l-86.572 22.358c.489-.423.943-.885 1.356-1.383a11.513 11.513 0 002.66-7.377c0-4.583-2.67-8.544-6.544-10.422a11.546 11.546 0 00-2.771-.933L205 91zm-8.694 1.213l-74.978 19.363a12.503 12.503 0 002.116-6.978c0-4.368-2.231-8.213-5.617-10.47l78.479-1.915z"
            fill="#000"
        />
        <path
            d="M96.764 105.583c0 6.397 5.201 11.582 11.618 11.582 6.416 0 11.618-5.185 11.618-11.582C120 99.186 114.798 94 108.382 94c-6.417 0-11.618 5.186-11.618 11.583z"
            fill="#000"
        />
    </svg>
);
