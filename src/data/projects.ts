import type { IProjectArticle } from '../types/article';

const projects: IProjectArticle[] = [
  {
    id: 1,
    title: 'Next Trivia',
    slug: 'next-trivia',
    description:
      'Un pequeño y divertido juego de trivia sugerido por ChatGPT que utiliza NextJS, TailwindCSS y la API de OpenTriviaDB.',
    href: 'https://nextrivia.alefs.dev/',
    image: '/projj.png',
    type: 'project',
  },
  {
    id: 2,
    title: 'React Rick and Morty API',
    slug: 'react-rick-and-morty-api',
    description:
      'Una app hecha con ReactJS, Tailwind y el API de la famosa serie de tv Rick and Morty.',
    href: '/',
    image: '/live-thumbnail.png',
    type: 'project',
  },
];

export default projects;
