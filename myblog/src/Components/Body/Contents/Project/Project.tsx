import React, { useState, useEffect } from 'react';
import { RepositoryStatus, resultArr } from './Project_type';
import { RepositoryCard } from './RepositoryCard';

export const Project = () => {
  // responseStatus
  const [repository, setRepository] = useState<RepositoryStatus>({
    status: 'Loading',
  });

  // responseData
  const [data, repositoryData] = useState<resultArr>([]);

  // async await
  useEffect(() => {
    fetch('https://api.github.com/users/Jeong-IK/repos')
      .then(res => res.json())
      .then(data => {
        setRepository({
          status: 'Success',
        });
        repositoryData(data);
      })
      //에러 코드 파싱
      .catch(() => setRepository({ status: 'Error' }));
  }, []);

  return (
    <>
      {repository.status === 'Success' &&
        data.map(result => (
          <RepositoryCard name={result.name} key={result.name}></RepositoryCard>
        ))}
    </>
  );
};
