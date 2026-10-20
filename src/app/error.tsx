'use client';

import ErrorCard from '@/components/ErrorCard';

type ErrorProps = {
  error: unknown;
  retry: () => void;
};

const ErrorPage = ({ retry }: ErrorProps) => {
  return <ErrorCard retry={retry} />;
};

export default ErrorPage;
