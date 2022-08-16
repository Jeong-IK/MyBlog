import React, { useState, useEffect } from 'react';
import { RepositoryStatus, ResultArr, RepositoryData } from './Project_type';
import { RepositoryCard } from './RepositoryCard';
import { CardList } from './Project_style';
import { ReadMe } from './ReadMe';

export const Project = () => {
  // responseStatus
  const [repository, setRepository] = useState<RepositoryStatus>({
    status: 'Loading',
  });

  // responseData
  const [data, repositoryData] = useState<ResultArr>([]);

  // async await
  useEffect(() => {
    fetch('https://api.github.com/users/Jeong-IK/repos')
      .then((res) => res.json())
      .then((pro_data: ResultArr) => {
        setRepository({
          status: 'Success',
        });
        repositoryData(pro_data);
      })
      // 에러 코드 파싱
      .catch(() => setRepository({ status: 'Error' }));
  }, []);

  return (
    <>
      <CardList>
        {repository.status === 'Success'
          && data.map((result: RepositoryData) => (
            <RepositoryCard name={result.name} key={result.name} />
          ))}
      </CardList>
      <ReadMe name="" />
    </>
  );
};
