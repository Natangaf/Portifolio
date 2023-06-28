import Runing from "../../assets/img/projects/Kimovil/Runing.jpg"
import movies from "../../assets/img/projects/movies/movies.jpg"
import CRUD from "../../assets/img/projects/Lista/CRUD.jpg"
import user from "../../assets/img/projects/user/user.jpg"

export const ProjectsListBack = [{
    id: 1,
    name: "Kimovil",
    description: "O projeto KImóveis consiste no desenvolvimento de uma aplicação de gerenciamento de serviços para a imobiliária Kimóveis. A aplicação permite o cadastro de imóveis, usuários interessados na aquisição de propriedades, agendamento de visitas aos imóveis e consulta de horários disponíveis.",
    background: Runing,
    usedLanguages: ["Express.js", "Typescript", "TypeORM", "Jest", "postgres"],
    images: [
        {
            page: "Home",
            img: Runing
        }
    ],
    linkRepo: "https://github.com/Kenzie-Academy-Brasil-Developers/Projeto-Final-KImoveis-natanga-m4",
    linkSite: "https://imoveis-vwgc.onrender.com"
},
{
    id: 2,
    name: "API de CRUD de Filmes",
    description: "desenvolvolvi uma API que contém um CRUD para gerenciamento de filmes usando o TypeORM para manipular os dados da aplicação.",
    background: movies,
    usedLanguages: ["Express.js", "Typescript", "TypeORM", "Jest", "postgres"],
    images: [
        {
            page: "Login",
            img: movies
        }
    ],
    linkRepo: "https://github.com/Kenzie-Academy-Brasil-Developers/sp5-m4-t14-movies-typeorm-natanga",
},
{
    id: 3,
    name: "CRUD de Usuário",
    description: "sistema ou funcionalidade que permite realizar operações básicas de gerenciamento de usuários, como criar, ler, atualizar e excluir informações de usuários, juntamente com a capacidade de atribuir permissões de administrador a esses usuários.",
    background: CRUD,
    usedLanguages: ["Express.js", "Typescript","postgres"],
    images: [
        {
            page: "Login",
            img: CRUD
        }
    ],
    linkRepo: "https://github.com/Kenzie-Academy-Brasil-Developers/crud_admin_m4-sp4-natanga",
},
{
    id: 4,
    name: "Lista de compras",
    description: "sistema ou funcionalidade que permite realizar operações básicas de gerenciamento de usuários, como criar, ler, atualizar e excluir informações de usuários, juntamente com a capacidade de atribuir permissões de administrador a esses usuários.",
    background: user,
    usedLanguages: ["Express.js", "Typescript"],
    images: [
        {
            page: "Login",
            img: user
        }
    ],
    linkRepo: "https://github.com/Kenzie-Academy-Brasil-Developers/crud_admin_m4-sp4-natanga",
    },
    {
        id: 5,
        name: "Mercado autônomo",
        description: "Primeiro projeto de backEnd que resume Recebemos uma demanda para realizar a criação de uma API REST. Essa API será utilizada para organização do estoque de uma startup em processo de testes que pretende se transformar em uma rede de mercados autônomos (Smart Store). Hoje o mercado trabalha com apenas dois tipos de produtos: comida e limpeza.",
        background: CRUD,
        usedLanguages: ["Express.js", "Typescript"],
        images: [
            {
                page: "Login",
                img: CRUD
            }
        ],
        linkRepo: "https://github.com/Kenzie-Academy-Brasil-Developers/market-sp1-m4-natanga",
    },
]