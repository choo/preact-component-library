import { h, FunctionalComponent, Fragment } from 'preact';

import Grid from '../../layouts/grid'
import Button from '../../inputs/button'


const ButtonSample: FunctionalComponent = () => {
  let isActive = false;
  return (
    <Fragment>
      <h2>Buttons</h2>

      <span>full width</span>
      <Grid container  m='0 0 24px' p='0'>
        <Grid flex={1} m='0 4px 0'>
          <Button outlined disabled={!isActive} style={{padding: '5px'}}
            onClick={() => {
              //props.updateParams({page: page});
              //smoothScroll(document.body, 600);
            }}
          >Sample</Button>
        </Grid>
      </Grid>

      <span>half width</span>
      <Grid container  m='0 0 24px' p='0'>
        <Grid flex={1}>
          <Button outlined style={{padding: '5px'}} >Sample</Button>
        </Grid>
        <Grid flex={1} m='0 8px 0'>
          <Button outlined style={{padding: '5px'}} >Sample</Button>
        </Grid>
      </Grid>

      <span>toggle button</span>
      <Grid container  m='0 0 24px' p='0'>
        <Grid flex={1 / 5}>
          <Button outlined isActive={true} style={{padding: '5px'}}
          >Sample</Button>
        </Grid>
      </Grid>

    </Fragment>
  );
};


export default ButtonSample;
