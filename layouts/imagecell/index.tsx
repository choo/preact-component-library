import { useState } from 'react';


export interface Image {
  path: string,
  url?: string,
  secondPath?: string, // path for notFound error
};

interface Props {
  image: Image,
  width?: number,
  style?: {[s: string]: string | number},
};

export const ImageCell: FunctionalComponent<Props> = (props: Props) => {
  const [errored, setErrored] = useState<boolean>(false);
  const replacePath = (event: any, path: string) => {
    if (!errored) {
      const elm = event.target;
      elm.onerror = null;
      elm.src = path;
      setErrored(true);
    }
  };
  const img = props.image;

  return (
    <a href={img.url || 'javascript:void(0)'} target={'_blank'}>
      <img src={img.path} alt={'Not Found'}
        style={{width: `${props.width}px`, ...props.style}}
        onError={(evt) => {
          replacePath(evt, img.secondPath || '')
        }}
      />
    </a>
  );
};
