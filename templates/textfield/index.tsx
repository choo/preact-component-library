import { h, FunctionalComponent, Fragment } from 'preact';

import Grid from '../../layouts/grid'
import TextField from '../../inputs/textfield'


const TextFieldSample: FunctionalComponent = () => {
  return (
    <Fragment>
      <h2>TextFields</h2>

      <span>simple textfield</span>
      <Grid container m='4px 0 48px' p='0'>
        <Grid flex={1 / 4}>
          <TextField
            label='simple textfield'
          ></TextField>
        </Grid>
      </Grid>

      <span>simple textarea</span>
      <Grid container m='4px 0 48px' p='0'>
        <Grid flex={1}>
          <TextField
            isTextArea={true}
            rows={2}
            label='simple textfield!!!'
          ></TextField>
        </Grid>
      </Grid>
    </Fragment>
  );
};


export default TextFieldSample;
