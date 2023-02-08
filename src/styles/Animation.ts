import { createGlobalStyle } from "styled-components";

export const Animation = createGlobalStyle`
   @keyframes wipe-in-right {
        from {
            clip-path: inset(0 100% 0 0);
        }
        to {
            clip-path: inset(0 0 0 0);
        }
    }

    [transition-style="in:wipe:right"] {
    animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-right both;
    }

        @keyframes circle-in-hesitate {
    0% {
        clip-path: circle(0%);
    }
    40% {
        clip-path: circle(40%);
    }
    50% {
        clip-path: circle(20%);
    }
    100% {
        clip-path: circle(100%);
    }
    }
    [transition-style="in:circle:hesitate"] {
    animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-in-hesitate both;
    }
`