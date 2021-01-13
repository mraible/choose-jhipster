import * as dayjs from 'dayjs';
import { IBlog } from 'app/entities/blog/blog/blog.model';
import { ITag } from 'app/entities/blog/tag/tag.model';

export interface IPost {
  id?: number;
  title?: string;
  content?: string;
  date?: dayjs.Dayjs;
  blog?: IBlog;
  tags?: ITag[];
}

export class Post implements IPost {
  constructor(
    public id?: number,
    public title?: string,
    public content?: string,
    public date?: dayjs.Dayjs,
    public blog?: IBlog,
    public tags?: ITag[]
  ) {}
}
