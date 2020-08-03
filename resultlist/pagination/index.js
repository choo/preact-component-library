import { useState, useEffect } from 'preact/hooks';

import {smoothScroll} from '../../../../utils/misc';
import Grid from '../../layouts/grid'
import Button from '../../inputs/button'

/**
 * props:
 *    count: total count of hits
 *    ipg: items per page
 *    page: current active page
 *    numDisp: num pages to display (optional, default: 4)
 *    updatePage(page: number): 
 *
 */
const Pagination = (props) => {
  const numDisp = props.numDisp || 4;
  const last = Math.ceil(props.count / props.ipg);
  let start = props.page - Math.floor(numDisp / 2)
  let end   = props.page + Math.floor(numDisp / 2)
  if (numDisp % 2 === 0) {
    start++;
  }
  start = Math.min(start, last - numDisp + 1);
  start = Math.max(start, 1);
  end   = Math.max(end, start + numDisp - 1)
  end   = Math.min(end, last)

  const makeButton = (isActive, page, text) => (
    <Grid flex={1} m='0 4px 0'>
      <Button outlined disabled={!isActive} style={{padding: '5px'}}
        onClick={() => {
          props.updatePage(page);
          smoothScroll(document.body, 600);
        }}
      >{text}</Button>
    </Grid>
  );

  return (
    <Grid container>
      {makeButton(props.page > 1, props.page - 1, '<')}
      {start > 1 && (
        <>
          {makeButton(true, 1, 1)}
          <Grid flex={1}>...</Grid>
        </>
      )}
      {arrayRange(start, end).map(p => makeButton(p !== props.page, p, p))}
      {end < last && (
        <>
          <Grid flex={1}>...</Grid>
          {makeButton(true, last, last)}
        </>
      )}
      {makeButton(props.page < last, props.page + 1, '>')}
    </Grid>
  );
};

const arrayRange = (start, end) => {
  return [...Array(end - start + 1).keys()].map(i => i + start);
}


export default Pagination;
