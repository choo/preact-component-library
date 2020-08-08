import { h, FunctionalComponent, Fragment } from 'preact';

//import {smoothScroll} from '../../utils/misc';
import Grid from '../../layouts/grid';
import Button from '../../inputs/button';

interface Props {
  page: number,  // current active page
  ippg: number,  // items per page
  hitCount: number,
  pageNumDisp: number,
  updatePage: (page: number) => void,
}

const Pagination: FunctionalComponent<Props> = (props: Props) => {
  const pageNumDisp = props.pageNumDisp || 4;
  const last = Math.ceil(props.hitCount / props.ippg);
  let start = props.page - Math.floor(pageNumDisp / 2)
  let end   = props.page + Math.floor(pageNumDisp / 2)
  if (pageNumDisp % 2 === 0) {
    start++;
  }
  start = Math.min(start, last - pageNumDisp + 1);
  start = Math.max(start, 1);
  end   = Math.max(end, start + pageNumDisp - 1)
  end   = Math.min(end, last)

  const makeButton = (isActive: boolean, page: number, display: string | number) => (
    <Grid flex={1} m='0 4px 0'>
      <Button outlined={true} disabled={!isActive} style={{padding: '5px'}}
        onClick={() => {
          props.updatePage(page);
          //smoothScroll(document.body, 600);
        }}
      >{display.toString()}</Button>
    </Grid>
  );

  return (
    <Grid container={true}>
      <Fragment>
        {makeButton(props.page > 1, props.page - 1, '<')}
        {start > 1 && (
          <Fragment>
            {makeButton(true, 1, 1)}
            <Grid flex={1}>...</Grid>
          </Fragment>
        )}
        {arrayRange(start, end).map(p => makeButton(p !== props.page, p, p))}
        {end < last && (
          <Fragment>
            <Grid flex={1}>...</Grid>
            {makeButton(true, last, last)}
          </Fragment>
        )}
        {makeButton(props.page < last, props.page + 1, '>')}
      </Fragment>
    </Grid>
  );
};

const arrayRange = (start: number, end: number) => {
  const ret: number[] = [];
  for (let i = start; i <= end; i++) {
    ret.push(i);
  }
  return ret
};


export default Pagination;
