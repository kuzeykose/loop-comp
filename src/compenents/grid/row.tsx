import React from 'react';

export interface DeafultRowProps {
  style?: React.CSSProperties;
  traditionalCSS?: string;
  children?: React.ReactNode | any;
}
export type RowProps = DeafultRowProps;

const InitCol: React.ForwardRefRenderFunction<unknown, RowProps> = (props, ref) => {
  let {
    style,
    traditionalCSS,
    children
  } = props

  return (
    <div style={style} className={traditionalCSS || 'flex-row-container'}>
      {children}
    </div>
  )
}

const Col = React.forwardRef(InitCol)
export default Col