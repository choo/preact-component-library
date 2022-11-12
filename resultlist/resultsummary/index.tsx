import {commify} from '../../utils/misc';
import Grid from '../../layouts/grid'
import Pagination from '../pagination';

interface Props {
  page: number,
  ippg: number,
  hitCount: number,
  pageNumDisp: number,
  updatePage: (page: number) => void,
  children?: h.JSX.Element[] | h.JSX.Element | string,
}

const ResultSummary: FunctionalComponent<Props> = (props: Props) => {

  const s = Math.min((props.page - 1) * props.ippg + 1, props.hitCount);
  const e = Math.min(props.page * props.ippg, props.hitCount);
  const resultSummary = (
    <Grid container justify={'space-between'} alignItems={'center'}>
      <h2>{commify(s)}-{commify(e)} 件目 [ {commify(props.hitCount)} 件中 ]</h2>
      <Pagination
        hitCount={props.hitCount}
        page={props.page}
        ippg={props.ippg}
        pageNumDisp={props.pageNumDisp}
        updatePage={props.updatePage}
      />
    </Grid>
  )

  return (
    <>
      {resultSummary}
      {props.children}
      {resultSummary}
    </>
  );
};

export default ResultSummary;
