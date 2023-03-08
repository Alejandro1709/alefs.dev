import type { IVideoArticle } from '../types/article';

const videos: IVideoArticle[] = [
  {
    id: 1,
    title: 'Promesas en JavaScript',
    slug: 'promesas-en-javascript',
    href: '/videos/promesas-en-javascript',
    image: '/promisess.png',
    type: 'video',
  },
  {
    id: 2,
    title: 'Javascript Reduce',
    slug: 'javascript-reduce',
    href: '/videos/javascript-reduce',
    image: '/reducee.png',
    type: 'video',
  },
  {
    id: 3,
    title: 'Aprende a usar correctamente el método map en JavaScript',
    slug: 'aprende-a-usar-correctamente-el-metodo-map-en-javascript',
    href: '/videos/aprende-a-usar-correctamente-el-metodo-map-en-javascript',
    image: '/mapp.png',
    type: 'video',
  },
  {
    id: 4,
    title:
      'Te enseño a crear una app con ReactJS y Rick y Morty Ep 1. Inicializando el proyecto y markup base',
    slug: 'te-ensenio-a-crear-una-app-con-reactjs-y-rick-y-morty-ep1-inicializando-el-proyecto-y-markup-base',
    href: '/videos/te-ensenio-a-crear-una-app-con-reactjs-y-rick-y-morty-ep1-inicializando-el-proyecto-y-markup-base',
    image: '/live-thumbnail.png',
    type: 'video',
  },
];

export default videos;
