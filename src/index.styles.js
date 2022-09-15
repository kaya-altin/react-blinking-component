import { css } from '@emotion/css';

export default {
    container: (fromOpacity) => css`
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
        opacity: ${fromOpacity};
        transition: opacity 300ms cubic-bezier(0.4, 0, 1, 1), background-color 0.3s ease-in-out;
        -moz-transition: opacity 300ms cubic-bezier(0.4, 0, 1, 1), background-color 0.3s ease-in-out;
        -o-transition: opacity 300ms cubic-bezier(0.4, 0, 1, 1), background-color 0.3s ease-in-out;
        -webkit-transition: opacity 300ms cubic-bezier(0.4, 0, 1, 1), background-color 0.3s ease-in-out;
    `,
    highlightColor: (color) => css`
        & input,
        & label,
        & span {
            color: ${color};
        }
    `,
    highlightBackground: (backgroundColor, transform) => css`
        background-color: ${backgroundColor};
        transform: ${transform};
    `,
    highlightOpacity: (toOpacity) => css`
        opacity: ${toOpacity};
    `,
};
