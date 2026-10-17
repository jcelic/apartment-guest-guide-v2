import { ViewTransition, type ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

const directions = {
  'nav-forward': 'nav-forward',
  'nav-back': 'nav-back',
  default: 'none',
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <ViewTransition enter={directions} exit={directions} default="none">
      {children}
    </ViewTransition>
  );
};

export default PageTransition;
