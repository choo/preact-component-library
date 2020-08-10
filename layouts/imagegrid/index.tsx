import { h, FunctionalComponent } from 'preact';
import {ImageCell, Image} from '../imagecell'
import Grid from '../grid'

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
          <ImageCell image={img} width={width} />
        </Grid>
        );
      }) : (
        <span>No Images found</span>
      )}
    </Grid>
  );
};


export default ImageGrid;
