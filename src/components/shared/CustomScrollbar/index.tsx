import { Scrollbars, ScrollbarProps } from 'react-custom-scrollbars'

type CustomScrollbarProps = ScrollbarProps

export function CustomScrollbar({ children, ...rest }: CustomScrollbarProps) {
  return (
    <Scrollbars {...rest} universal={true}>
      {children}
    </Scrollbars>
  )
}
