import React from 'react';

interface DeafultCardProps {
  width?: number;
  height?: number;
  image?: [string, string, React.CSSProperties?, number?, number?];
  imageWidth?: number;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  traditionalCSS?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
export type CardProps = DeafultCardProps

const InitCard: React.ForwardRefRenderFunction<unknown, CardProps> = (props, ref) => {
  let {
    height,
    width,
    image,
    imageWidth,
    style,
    traditionalCSS,
    children
  } = props

  let imageStyle
  if (image ) {
    imageStyle = {
      objectPosition: `${image[3]} ${image[4]}`,
      width: `${imageWidth}%`,
      ...image[2]
    }
  }

  return (
    <div
      style={{
        ...{
          height: height,
          width: width
        },
        ...style
      }}
      className={traditionalCSS || `defaultCard-${image && image[1]}`}
    >
      {image && ['right', 'bottom'].includes(image[1]) && (
        <>
          <div className='card-children'>{children}</div>
          <img style={imageStyle} src={image[0]} alt='' />
        </>
      )}
      {image && ['top', 'left'].includes(image[1]) && (
        <>
          <img style={imageStyle} src={image[0]} alt='' />
          <div className='card-children'>{children}</div>
        </>
      )}
    </div>
  )
}

const Card = React.forwardRef(InitCard)
export default Card
