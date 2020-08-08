import { h, FunctionalComponent, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import {buildParams} from '../../utils/param';

import Grid from '../../layouts/grid'
import Menu from '../../inputs/menu'


type Params = {[s: string]: string | number}

const MenuSample: FunctionalComponent = () => {
  /* parameter handling */
  const initialParams: Params = {};
  const initParams = buildParams(initialParams);
  const [params, setParams] = useState<Params>(initParams);
  useEffect(() => {
    updateParams({page: initParams.page || 1});
  }, [])
  const updateParams = (updatedParams: Params) => {
    updatedParams.page = updatedParams.page || 1;
    const newParams = {...params, ...updatedParams};
    setParams(newParams);
  };

  return (
    <Fragment>
      <h2>Menus</h2>
        <Grid container m='52px 0 8px' p='0'>
          <Grid m='0 12px 0 0'>
            <Menu
              buttonText={'menu sample 1'}
              items={[{code:0, text:'-'}, {code:1, text:'AAA'},
                {code:2, text:'BBB'}, {code:3, text:'CCC'}]}
              //codes={[0, 1, 2, 3]}
              width={'180px'}
              selected={params.menu ? params.menu : 0}
              onSelect={(code) => {
                if (params.menu !== code) {
                  updateParams({menu: code});
                }
              }}
            />
          </Grid>
          <Grid m='0 4px 0 0'>
            <Menu
              buttonText={'menu sample 2'}
              items={[{code:0, text:'-'}, {code:1, text:'XXX'},
                {code:2, text:'YYY'}, {code:3, text:'ZZZ'}]}
              width={'180px'}
              selected={params.menu2 ? params.menu2 : 0}
              onSelect={(code) => {
                if (params.menu2 !== code) {
                  updateParams({menu2: code});
                }
              }}
            />
          </Grid>
        </Grid>
    </Fragment>
  );
};


export default MenuSample;
