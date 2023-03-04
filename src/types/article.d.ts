export default interface IArticle {
  id: number;
  title: string;
  description?: string;
  image: string;
  href: string;
  type: 'project' | 'video';
}

export interface IVideoArticle extends IArticle {
  url?: string;
  kind?: 'livestream' | 'video' | 'shorts';
}

export interface IProjectArticle extends IArticle {
  liveUrl?: string;
  githubUrl?: string;
  tags?: string[];
  status?: 'in-progress' | 'completed';
}

export type ArticleType = IVideoArticle | IProjectArticle;
