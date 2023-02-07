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
        text: 'useDebounce',
        itemKey: 'useDebounce'
      }, {
        text: 'useThrottle',
        itemKey: 'useThrottle'
      }, {
        text: 'useSize',
        itemKey: 'useSize'
      }
    ]
  }
];

export default navArray;
