import { motion } from "framer-motion";
import styled from "styled-components";
import principal from "../../assets/img/background/principal.jpg"


export const StylesHome = styled(motion.main)`
    width: 100vw;
    height: 105vh;
    background-image: url(${principal});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: var( --Color-grey-0) ;
    display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: absolute;
    .container{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
        .descripition{
            width:100% ;
            height: 40%;
            display: flex;   
            justify-content: space-between;
            align-items: center;
            align-content: center;
        }
        .natangaImage{
            height: 250px;
           width: 400px;
           background-color:red;
           border-radius: 71% 29% 46% 54% / 84% 74% 26% 16% ;
        }
        .natangaImage > img{
            width: 100%;
        }
        .person{
            width: 50%;
            height: 100%;
            display: flex;
            gap: 5px;
            flex-direction: column;
            align-items: flex-start;
        }
        .body{ 
            font-size: 1.675rem;
            font-weight: 400;
        }
        .primary{
            color: var(--colorPrimary);
        }
        .me{
            display: flex; 
            gap: 5px;
        }
        .teste{
            position: absolute;
            top: 20;
            left: 0;
            right: 0;
            height: 10px;
            background: var(--red);
            transform-origin: 0%;
        }
    
@media (max-width: 1000px) {
        .descripition{
            width: 100%;
            height: 100%;
            flex-wrap: wrap;
            gap: 30px;
        }
        .descripition > img{
           width: 300px;
           height: 300px;
        }
        .person{
            width: 80%;
            height: auto;
            display: flex;
            align-items: center;
            text-align: center;
        }
}
@media (max-width: 600px) {
    .person{
        width: 90%;
        height: auto;
    }
}
@media (max-width: 600px) {
    .descripition > img{
            /* height: 65%; */
            /* width:51%; */
            border-radius: 50%;
        }
}
`