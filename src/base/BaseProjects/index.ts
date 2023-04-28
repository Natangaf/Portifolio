import doAcao from "../../assets/img/projects/doAcao/doAcao.png"
import doAcaoBackground from "../../assets/img/projects/doAcao/doAcaoBackground.png"
import doAçaoCreateDonatoion from "../../assets/img/projects/doAcao/doAçaoCreateDonatoion.png"
import doAçaoEditProfile from "../../assets/img/projects/doAcao/doAçaoEditProfile.png"
import doAçaoHomePage from "../../assets/img/projects/doAcao/doAçaoHomePage.png"
import nonosBuger from "../../assets/img/projects/nonosBuger/nonosBuger.png"
import nonosBugerBackground from "../../assets/img/projects/nonosBuger/nonosBugerBackground.png"
import nonosBugerLogin from "../../assets/img/projects/nonosBuger/nonosBugerLogin.png"
import nonosBugerCart from "../../assets/img/projects/nonosBuger/nonosBugerCart.png"
import nonosBugerRegister from "../../assets/img/projects/nonosBuger/nonosBugerRegister.png"
import nuKenzieBackground from "../../assets/img/projects/nuKenzie/nuKenzieBackground.png"
import nuKenzie from "../../assets/img/projects/nuKenzie/nuKenzie.png"
import nuKenzieRegister from "../../assets/img/projects/nuKenzie/nuKenzieRegister.png"
import RickandMory from "../../assets/img/projects/RickandMory/RickandMory.png"
import HomePage from "../../assets/img/projects/RickandMory/HomePage.png"
import rickandMoryBackground from "../../assets/img/projects/RickandMory/Background.png"
import KenzieHub from "../../assets/img/projects/KenzieHub/KenzieHub.png"
import KenzieHubLogin from "../../assets/img/projects/KenzieHub/KenzieHubLogin.png"
import KenzieHubRegister from "../../assets/img/projects/KenzieHub/KenzieHubRegister.png"
import KenzieHubRegisterNeyLangeuge from "../../assets/img/projects/KenzieHub/KenzieHubRegisterNeyLangeuge.png"
import lucioHomePage from "../../assets/img/projects/lucioTenda/lucioHomePage.png"
import lucioHomePageBackground from "../../assets/img/projects/lucioTenda/lucioHomePageBackground.png"
import lucioPage from "../../assets/img/projects/lucioTenda/lucioPage.png"



export const ProjectsList = [{
    id: 1,
    name: "NuKenzie",
    description: "Um sistema de gerenciamento de competências, com o qual o usuário pode agregar seus conhecimentos em qualquer tecnologia, podendo cadastrar, editar ou deletar.",
    background: nuKenzieBackground,
    usedLanguages: ["react", "css", "javascript"],
    images: [
        {
            page: "Home",
            img: nuKenzie
        },
        {
            page: "Calculo",
            img: nuKenzieRegister
        }
    ],
    linkRepo: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie.natanga",
    linkSite: "https://react-entrega-s1-template-nu-kenzie-natanga.vercel.app/"
},
{
    id: 2,
    name: "Kenzie Hub",
    description: "Um sistema de gerenciamento de contas, com o qual o usuário pode agregar seus gastos e ganhos, podendo cadastrar, editar ou deletar.",
    background: KenzieHub,
    usedLanguages: ["react", "css", "javascript"],
    images: [
        {
            page: "Login",
            img: KenzieHub
        },
        {
            page: "Registrar de perfil",
            img: KenzieHubRegister
        },
        {
            page: "DashBoard",
            img: KenzieHubLogin
        },
        {
            page: "Adição de linguagem",
            img: KenzieHubRegisterNeyLangeuge
        }
    ]
},
{
    id: 3,
    name: "Rick and Morty",
    description: "Um sistema simples onde você pode encontrar seus personagens favoritos, utilizando a API.",
    background: rickandMoryBackground,
    usedLanguages: ["react", "css", "javascript"],
    images: [
        {
            page: "DashBoard",
            img: HomePage
        },
        {
            page: "Especifico personagem",
            img: RickandMory
        }
    ],
    linkRepo: "https://github.com/Kenzie-Academy-Brasil-Developers/react-atividade-s1-template-buscando-dados-na-api-rick-and-morty-natanga",
    linkSite: "https://rickandmory.vercel.app/"
},
{
    id: 4,
    name: "do.Ação",
    description: "Um projeto completo, voltado para ONGs que necessitam de alimentos, com um sistema de gerenciamento de contas, onde o usuário pode cadastrar, deletar, editar e doar.",
    background: doAcaoBackground,
    usedLanguages: ["react", "css", "typescript"],
    images: [
        {
            page: "Página Inicial",
            img: doAcao
        },
        {
            page: "Criar doação",
            img: doAçaoCreateDonatoion
        },
        {
            page: "Edição de perfil",
            img: doAçaoEditProfile
        },
        {
            page: "Dashboard",
            img: doAçaoHomePage
        }
    ],
    linkRepo: "https://github.com/project-lets-cook",
    linkSite: "https://do-acao.vercel.app/"
},
{
    id: 5,
    name: "Nono's Burger",
    description: "Uma lanchonete onde você pode adicionar e remover lanches",
    background: nonosBugerBackground,
    usedLanguages: ["react", "css", "typescript"],
    images: [
        {
            page: "Pagina Inicial",
            img: nonosBugerLogin
        },
        {
            page: "Registrar",
            img: nonosBugerRegister
        },
        {
            page: "Carrinho",
            img: nonosBugerCart
        },
        {
            page: "Dashboard",
            img: nonosBuger
        }
    ],
    linkRepo: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-hamburgueria-v2-natanga",
    linkSite: "https://s5-15-entrega-projeto-hamburgueria-2-0.vercel.app/"
},
{
    id: 5,
    name: "Lucio",
    description: "Seguir um Figma de um profissional, e entregar com altíssima qualidade, adicionando páginas, botões interativos",
    background: lucioHomePageBackground,
    usedLanguages: ["html5", "css", "javascript"],
    images: [
        {
            page: "Pagina Inicial",
            img: lucioHomePage
        },
        {
            page: "Tenda",
            img: lucioPage
        }
    ],
    linkSite: "https://lucio-seven.vercel.app/"
}
]