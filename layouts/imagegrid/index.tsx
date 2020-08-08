import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import Grid from '../grid'


interface Image {
  path: string,
  url?: string,
  secondPath?: string, // path for notFound error
};
interface Props {
  images: Image[],
  width?: number,
};

const ImageGrid: FunctionalComponent<Props> = (props: Props) => {
  const width = props.width || 120;
  return (
    <Grid container={true} justify={'flex-start'}
      style={{flexWrap: 'wrap'}}
    >
      {props.images.length > 0 ? props.images.map((img) => {
        return (
        <Grid m={'0 0 10px'} p={'1px'} style={{textAlign: 'center'}}>
          <div>
            <a href={img.url || 'javascript:void(0)'} target={'_blank'}>
              <ImageCell img={img} width={width} />
            </a>
          </div>
        </Grid>
        );
      }) : (
        <span>No Images found</span>
      )}
    </Grid>
  );
};

interface ImageProps {
  img: Image,
  width?: number,
};

const ImageCell: FunctionalComponent<ImageProps> = (props: ImageProps) => {
  const [errored, setErrored] = useState<boolean>(false);
  const replacePath = (event: any, path: string) => {
    if (!errored) {
      const elm = event.target;
      elm.onerror = null;
      elm.src = path;
      setErrored(true);
    }
  };
  const img = props.img;

  return (
    <img src={img.path} alt={'Not Found'}
      style={{width: `${props.width}px`,}}
      onError={(evt) => {
        replacePath(evt, img.secondPath || '')
      }}
    />
  );
};

export default ImageGrid;
