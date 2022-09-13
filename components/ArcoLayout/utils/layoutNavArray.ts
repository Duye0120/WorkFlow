import { NavProps } from '../interface';

const navArray: NavProps[] = [
  {
    navSub: {
      text: 'State',
      itemKey: 'State'
    },
    navItem: [
      {
        text: 'useSetState',
        itemKey: 'useSetState'
      }, {
        text: 'useToggle',
        itemKey: 'useToggle'
      }, {
        text: 'useStorage',
        itemKey: 'useStorage'
      }
    ]
  }
];

export default navArray;
