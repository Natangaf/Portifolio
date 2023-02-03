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

    @keyframes wipe-out-left {
        from {
            clip-path: inset(0 0 0 0);
        }
        to {
            clip-path: inset(0 100% 0 0);
        }
    }       
    [transition-style="out:wipe:left"] {
    animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-left both;
    }
        @keyframes circle-in-center {
    from {
        clip-path: circle(0%);
    }
    to {
        clip-path: circle(125%);
    }
    }

[transition-style="in:circle:center"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-in-center both;
}
    @keyframes wipe-in-up {
        from {
            clip-path: inset(100% 0 0 0);
        }
        to {
            clip-path: inset(0 0 0 0);
        }
        }

    [transition-style="in:wipe:up"] {
    animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-up both;
    }
   @keyframes wipe-out-up {
    from {
        clip-path: inset(0 0 0 0);
    }
    to {
        clip-path: inset(0 0 100% 0);
    }
    }

    [transition-style="out:wipe:up"] {
    animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-up both;
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