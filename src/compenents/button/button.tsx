import React from 'react';

interface ButtonProps {
  color?: string;
  disable?: boolean;
  style?: React.CSSProperties;
  traditionalCSS?: string;
  children?: React.ReactNode | any;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const InitButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.disable) {
      e.preventDefault()
      return
    }
    (props.onClick as React.MouseEventHandler<HTMLButtonElement>)?.(e)
  }

  return (
    <button
      disabled={props.disable}
      className={props.traditionalCSS || 'defaultButton'}
      onClick={onClickHandler}
      style={props.style}
    >
      {props.children}
    </button>
  )
}

const Button = React.forwardRef(InitButton)
export default Button