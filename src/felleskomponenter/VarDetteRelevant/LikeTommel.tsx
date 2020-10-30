import React, { FunctionComponent, useState } from 'react';
import tommelopp from './tommelopp.svg';
import tommeloppfylt from './tommeloppfylt.svg';
import './LikeTommel.less';
import { Knapp } from 'nav-frontend-knapper';

interface Props {
    retning: 'opp' | 'ned';
    fylt: boolean;
    onClick: () => void;
}
export const LikeTommel: FunctionComponent<Props> = (props) => {
    const source = props.fylt ? tommeloppfylt : tommelopp;
    const modifier = props.retning;

    const tommeloppConst = (
        <div className={'like-tommel__bilde like-tommel__bilde--' + modifier}>
            <svg
                width="100"
                height="100"
                viewBox="0 0 48 48" preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M23 13C23 11.897 22.103 11 21 11H13.642C13.928 9.825 14.5 7.282 14.5 5.719C14.5 3.762 13.331 2.87 12.245 2.87C11.25 2.87 10.5 3.571 10.5 4.5C10.5 8.92 6.811 12 3.5 12H0.5C0.224 12 0 12.224 0 12.5V21.5C0 21.776 0.224 22 0.5 22C5.083 22 6.651 22.673 7.911 23.214C8.852 23.618 9.74 24 11.5 24H18C19.103 24 20 23.103 20 22C20 21.588 19.875 21.206 19.662 20.888C20.44 20.614 21 19.871 21 19C21 18.588 20.875 18.206 20.662 17.888C21.44 17.614 22 16.871 22 16C22 15.588 21.875 15.206 21.662 14.888C22.44 14.614 23 13.871 23 13ZM21 14H20C19.724 14 19.5 14.224 19.5 14.5C19.5 14.776 19.724 15 20 15C20.551 15 21 15.449 21 16C21 16.551 20.551 17 20 17H19C18.724 17 18.5 17.224 18.5 17.5C18.5 17.776 18.724 18 19 18C19.551 18 20 18.449 20 19C20 19.551 19.551 20 19 20H18C17.724 20 17.5 20.224 17.5 20.5C17.5 20.776 17.724 21 18 21C18.551 21 19 21.449 19 22C19 22.551 18.551 23 18 23H11.5C9.946 23 9.222 22.689 8.305 22.295C7.009 21.739 5.408 21.051 1 21.003V13H3.5C7.284 13 11.5 9.509 11.5 4.5C11.5 4.067 11.886 3.87 12.245 3.87C12.824 3.87 13.5 4.354 13.5 5.719C13.5 7.631 12.526 11.335 12.517 11.372C12.477 11.522 12.51 11.682 12.604 11.805C12.699 11.928 12.845 12 13 12H21C21.551 12 22 12.449 22 13C22 13.551 21.551 14 21 14Z"
                    fill="#3E3832"
                />
            </svg>
        </div>
    );
    return (
        <Knapp mini onClick={props.onClick} className="like-tommel">
            {tommeloppConst}
            <img
                src={source}
                className={'like-tommel__bilde like-tommel__bilde--' + modifier}
                alt=""
            />
            {props.children}
        </Knapp>
    );
};
