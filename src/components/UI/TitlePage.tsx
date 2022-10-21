import React from 'react';

interface IProps {
  title: string;
}
export default function TitlePage({ title }: IProps) {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
}
