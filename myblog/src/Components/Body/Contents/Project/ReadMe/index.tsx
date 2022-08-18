import React, { FunctionComponent, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ReviewData } from './ReadMe_style';
import { Fetchstatus, ReadMeData } from './ReadMe_type';
import { RepositoryName } from '../Project_type';

export const ReadMe: FunctionComponent<RepositoryName> = ({ name }) => {
  const [repository, setRepository] = useState<Fetchstatus>({
    status: 'Loading',
  });
  const [projectReview, Setproreview] = useState<ReadMeData>({ content: '' });

  useEffect(() => {
    fetch(`https://api.github.com/repos/Jeong-IK/${name}readme`)
      .then((res) => res.json())
      .then((data: string) => {
        Setproreview({ content: data });
      })
      .catch(() => setRepository({ status: 'Error' }));
  }, [name]);

  return (
    <ReviewData>
      {repository.status === 'Success' && (
        <ReactMarkdown>{projectReview.content}</ReactMarkdown>
      )}
    </ReviewData>
  );
};
