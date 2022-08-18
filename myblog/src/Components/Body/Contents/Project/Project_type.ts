export interface RepositoryStatus {
  status: 'Loading' | 'Success' | 'Error';
}

export interface RepositoryData {
  name: string;
}

export interface ResultArr extends Array<RepositoryData> {}

export interface RepositoryName {
  name: string;
}
