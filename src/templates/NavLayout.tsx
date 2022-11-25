import type { ReactNode } from 'react';

import Navbar from '@/ui/component/navbar/Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const NavLayout = (props: IMainProps) => (
  <div>
    {props.meta}
    <Navbar />
    {props.children}
  </div>
);

export { NavLayout };
