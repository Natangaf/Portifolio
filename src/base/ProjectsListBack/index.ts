import Runing from "../../assets/img/projects/Kimovil/Runing.jpg"
import movies from "../../assets/img/projects/movies/movies.jpg"
import CRUD from "../../assets/img/projects/Lista/CRUD.jpg"
import user from "../../assets/img/projects/user/user.jpg"
import PetKare from "../../assets/img/projects/PetKare/PetKare.jpg"
import Filmes from "../../assets/img/projects/Filmes/Filmes.jpg"
import SoundHub from "../../assets/img/projects/SoundHub/SoundHub.jpg"

export const ProjectsListBack = [
    {
        id: 1,
        name: "Kimovil",
        description: "O projeto KImóveis consiste no desenvolvimento de uma aplicação de gerenciamento de serviços para a imobiliária Kimóveis. A aplicação permite o cadastro de imóveis, usuários interessados na aquisição de propriedades, agendamento de visitas aos imóveis e consulta de horários disponíveis.",
        background: Runing,
        usedLanguages: ["Express.js", "Typescript", "TypeORM", "Jest", "Postgresql"],
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
        usedLanguages: ["Express.js", "Typescript", "TypeORM", "Jest", "Postgresql"],
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
        usedLanguages: ["Express.js", "Typescript", "Postgresql"],
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
        usedLanguages: ["Express.js", "Typescript", "Postgresql"],
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
        usedLanguages: ["Express.js", "Typescript", "Postgresql"],
        images: [
            {
                page: "Login",
                img: CRUD
            }
        ],
        linkRepo: "https://github.com/Kenzie-Academy-Brasil-Developers/market-sp1-m4-natanga",
    },
    {
        id: 6,
        name: "Campeonato de Futebol",
        description: "A API foi criada utilizando tecnologias como Python, Django, Django Rest Framework, SQLite3 e outras bibliotecas e ferramentas. Principais Rotas: A API possui rotas para cadastrar seleções, listar seleções, filtrar seleções por ID, atualizar informações das seleções e deletar seleções, através de endpoints como 'api/teams/' e 'api/teams/<team_id>/'.",
        background: Runing,
        usedLanguages: ["Python", "Django", "Sqlite3", "Pytest"],
        images: [
            {
                page: "Login",
                img: Runing
            }
        ],
        linkRepo: "https://github.com/Natangaf/API-de-Campeonato-de-Futebol",
    },
    {
        id: 7,
        name: "PetKare API",
        description: "A PetKare API é uma ferramenta para gerenciar dados de animais de estimação em petshops. Ela permite cadastrar, listar, filtrar, atualizar e excluir informações sobre os pets dos clientes do PetKare.",
        background: PetKare,
        usedLanguages: ["Python", "Django", "Sqlite3", "Pytest"],
        images: [
            {
                page: "Login",
                img: PetKare
            }
        ],
        linkRepo: "https://github.com/Natangaf/Pet-kare",
    },
    {
        id: 8,
        name: "Gestão de Vendas de Filmes",
        description: "Essa solução substitui processos manuais de gerenciamento de filmes, usuários e compras por uma API eficiente. Principais recursos incluem autenticação, controle de acesso, personalização de usuários e administração via Django. Também foram implementados serializers, validação customizada, autenticação JWT, permissões customizadas e paginação com APIView.",
        background: Filmes,
        usedLanguages: ["Python", "Django", "Sqlite3", "Pytest"],
        images: [
            {
                page: "Login",
                img: Filmes
            }
        ],
        linkRepo: "https://github.com/Natangaf/API-de-Gest-o-de-Vendas-de-Filmes",
    },
    {
        id: 9,
        name: "SoundHub",
        description: "Apresentamos a API de Cadastro de Usuários, Álbuns e Músicas uma ferramenta poderosa desenvolvida com Django, que possibilita o gerenciamento completo de usuários, álbuns e músicas em um único lugar.O projeto foi construído utilizando as classes APIView e Serializer do Django Rest Framework(DRF), proporcionando uma experiência de desenvolvimento fluida e eficiente.Além disso, o banco de dados SQLite3 foi utilizado inicialmente, mas como parte da nossa busca contínua por aprimorar a performance, fizemos a transição para o PostgreSQL.",
        background: SoundHub,
        usedLanguages: ["Python", "Django", "Sqlite3", "Pytest", "Postgresql"],
        images: [
            {
                page: "Login",
                img: SoundHub
            }
        ],
        linkRepo: "https://github.com/Natangaf/API-de-Cadastro-de-Usuarios-albuns-e-Musicas",
    },
]