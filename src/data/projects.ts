import type { IProjectArticle } from '../types/article';

const projects: IProjectArticle[] = [
  {
    id: 1,
    title: 'Next Trivia',
    slug: 'next-trivia',
    description:
      'Un pequeño y divertido juego de trivia sugerido por ChatGPT que utiliza NextJS, TailwindCSS y la API de OpenTriviaDB.',
    href: '/projects/next-trivia',
    image: 'https://picsum.photos/seed/1/300/200',
    type: 'project',
  },
];

export default projects;
