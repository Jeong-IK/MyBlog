interface Loading {
  status: 'loading';
}

interface Success {
  status: 'success';
  result: ProjectType[];
}

interface Error {
  status: 'error';
}

export type ProjectService = Loading | Success | Error;

export interface ProjectType {
  name: string;
}
