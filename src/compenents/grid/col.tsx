import React, { Children } from 'react';

export interface DeafultColProps {
  flex?: string | number;
  justify?: string;
  style?: React.CSSProperties;
  traditionalCSS?: string;
  children?: React.ReactNode | any;
}
export type ColProps = DeafultColProps;

const InitCol: React.ForwardRefRenderFunction<unknown, ColProps> = (props, ref) => {
  let {
    flex,
    justify,
    style,
    traditionalCSS,
    children
  } = props

  return (
    <div
      style={{
        flex: flex,
        alignItems: justify,
        ...style
      }}
      className={traditionalCSS || 'flex-row-item'}
    >
      {children}
    </div>
  )
}

const Col = React.forwardRef(InitCol)
export default Col