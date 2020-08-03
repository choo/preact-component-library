import Grid from '../../layout/grid'
import style from './style';

const width  = 120;
const height = width * (130 / 208);
const margin = (width - height) / 2;

/**
 * props may contain:
 *    - images (required)
 *    - width  (optional): default 80px
 */
const ImageGrid = props => (
  <Grid container justifyContent='flex-start' style={{flexWrap: 'wrap'}}>
    {props.images.length > 0 ? props.images.map((img, idx) => {
      return (
      <Grid m={'0 0 10px'} p={'1px'} style={{textAlign: 'center'}}>
        <div>
          <a href={img.url} target={'_blank'}>
            <img src={img.path} alt={'Not Found'}
              style={{width: props.width ? props.width : '120px',}}
            />
          </a>
        </div>
      </Grid>
      );
    }) : (
      <span>No Images found</span>
    )}
  </Grid>
);

export default ImageGrid;
