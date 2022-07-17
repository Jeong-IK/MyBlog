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

export type Project_Service<T> = {
  Loading: Loading;
  Success: Success<T>;
  Error: Error;
};

export interface ProjectType {
  name: string;
}
