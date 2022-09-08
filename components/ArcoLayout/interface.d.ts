import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode;
  NavArray: Array<NavProps>;
}

interface NavItem {
  itemKey: string;
  text: string;
}

interface NavProps {
  navSub: NavItem;
  navItem: NavItem[];
}
