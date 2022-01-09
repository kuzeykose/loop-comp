import React from 'react';

interface DeafultCardProps {
  color?: string;
  title?: string;
  cover?: string;
  header?: React.ReactNode;
  bottom?: React.ReactNode;
  disable?: boolean;
  style?: React.CSSProperties;
  traditionalCSS?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
export type CardProps = DeafultCardProps

const InitCard: React.ForwardRefRenderFunction<unknown, CardProps> = (props, ref) => {
  return (
    <div
      className={'defaultCard'}
      style={props.style}
    >
      {props.cover &&
        <img src={props.cover}></img>
      }
      {props.title &&
        <h2 className='card-header-title'>{props.title}</h2>
      }
      {props.header &&
        <div>
          <div className={`card-header-section`}>
            {props.header}
          </div>
        </div>
      }
      <div className='card-body-section'>
        {props.children}
      </div>
      <div className='card-body-bottom'>
        {/* 
          Image tag is not working, when <img/> tag comes in props.bottom 
          .card-body-bottom ignores the .card-body-bottom img padding's
         */}
        {props.bottom && props.bottom}
      </div>
    </div>
  )
}

const Card = React.forwardRef(InitCard)
export default Card
