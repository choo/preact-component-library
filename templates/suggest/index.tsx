import { h, FunctionalComponent, Fragment } from 'preact';
import { useState } from 'preact/hooks';

import Grid from '../../layouts/grid'
import TextField from '../../inputs/textfield'
import {PaperList} from '../../inputs/paperlist';


const SuggestSample: FunctionalComponent = () => {
  const [inputText, setInputText] = useState<string>('');
  const [fixedText, setFixedText] = useState<string>('');
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
              value={inputText}
              onInput={(val) => {
                setInputText(val);
              }}
              onKeyDown={(e) => {
                //console.log(e.target.value);
                /*
                 * e.key === 'Enter' は Chrome などでは IME の確定時も反応する
                 * //console.log(e.key, e.keyCode);
                 * //if (e.key === 'Enter' || e.keyCode === 13) {
                 */
                if (e.keyCode === 13) {
                  if (fixedText !== inputText) {
                    setFixedText(inputText);
                    //e.target.blur();
                  }
                }
              }}
            />
          </Grid>
        </Grid>
        {inputText ? (
          <div style={{
            position: 'absolute',
            width: '100%',
          }}>
            <PaperList items={[{text: 'aaa'}, {text: inputText}]} />
          </div>
        ) : null}
      </div>

    </Fragment>
  );
};


export default SuggestSample;
