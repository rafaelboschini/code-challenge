import { withTheme } from "styled-components";

export const CommentIcon = withTheme((props) => (
    <svg height="25" width="25" version="1.1" fill={props.theme.text} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <g>
            <rect height="64" width="256" x="128" y="224" />
            <rect height="64" width="256" x="128" y="128" />
            <path d="M480,0H32C14.312,0,0,14.312,0,32v352c0,17.688,14.312,32,32,32h64v96l144-96h240c17.688,0,32-14.312,32-32V32   C512,14.312,497.688,0,480,0z M448,352H240l-80,48v-48H64V64h384V352z" />
        </g>
    </svg>
))