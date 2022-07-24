export interface RepositoryStatus {
  status: 'Loading' | 'Success' | 'Error';
}

export interface repositoryData {
  name: string;
}
export interface resultArr extends Array<repositoryData> {}
