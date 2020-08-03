import { h, FunctionalComponent, Fragment } from 'preact';
import { useState } from 'preact/hooks';

import Grid from '../../layouts/grid'
import TextField from '../../inputs/textfield'
import {Paper} from '../../inputs/paper';


const SuggestSample: FunctionalComponent = () => {
  const [text, setText] = useState<string>('');
  return (
    <Fragment>
      <h2>TextFields</h2>

      <span>suggest textfield</span>
      <div style={{
        position: 'relative',
      }}>
        <Grid container m='4px 0 -4px' p='0'>
          <Grid flex={1}>
            <TextField
              label='sample textfield'
              onInput={(val) => {
                setText(val);
              }}
              onKeyDown={(e) => {
                //console.log(e.target.value);
                console.log(e);
              }}
            />
          </Grid>
        </Grid>
        {text ? (
          <div style={{
            position: 'absolute',
            width: '100%',
          }}>
            <Paper items={[{text: 'aaa'}, {text: text}]} />
          </div>
        ) : null}
      </div>

    </Fragment>
  );
};


export default SuggestSample;
