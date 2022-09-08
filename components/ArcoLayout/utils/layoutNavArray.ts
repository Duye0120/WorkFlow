import { NavProps } from '../interface'

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
      },
      {
        text: 'useBoolean',
        itemKey: 'useBoolean'
      },
      {
        text: 'useToggle',
        itemKey: 'useToggle'
      }
    ]
  }
]

export default navArray
