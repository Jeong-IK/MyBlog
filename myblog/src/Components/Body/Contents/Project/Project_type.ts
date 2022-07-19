interface Loading {
  status: 'loading';
}

interface Success<T> {
  status: 'success';
  data: T;
}

interface Error {
  status: 'error';
}

export type ProjectService<T> = 
  | Loading 
  | Success<T> 
  | Error;


export interface ProjectType {
  name: string;
}
