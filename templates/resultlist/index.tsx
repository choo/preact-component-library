import { Component } from 'react';

import {buildParams} from '../../utils/param';

import ResultList from '../../resultlist';
import Paper from '../../inputs/paper';
import Grid from '../../layouts/grid';
import TextField from '../../inputs/textfield'


interface Item {
  [s: string]: string | number | any[],
};
interface ResultItem extends Item {
  name: string,
  yomi: string,
    //org: string
    //count: number,
}
type Params = {
  page?: number,
  ippg?: number,
  kwd?: string,
};

const AJAX_URL = '/assets/search_sample.json';

const MenuList: Component<Params> = (props: Params) => {
  const initialParams: Params = {
    kwd: props.kwd || '',
    page: props.page || 1,
    ippg: props.ippg || 20,
  };
  const params: Params = buildParams(initialParams);
  return (
    <ResultList {...props}
      params={params}
      renderCassette={(item: ResultItem, idx: number) => {
        return <Cassette item={item} idx={idx} />
      }}
      renderConds={(updateParams: any, params: Params) => {
        return <Conditions updateParams={updateParams} params={params} />
      }}
      ajaxUrl={AJAX_URL}
    />
  )
};


type CassetteProps = {
  item: ResultItem,
  idx: number,
};
const Cassette: Component<CassetteProps> = (props: CassetteProps) => {
  const item = props.item;
  return (
    <Grid container={true} m={'0 0 12px'}>
      <Grid flex={1}>
        <Paper style={{padding: '8px'}}>
          <a href={`/detail/${item.name}`}>
            <h2 style={{margin: '0'}}>{props.idx}. {item.name}</h2>
          </a>
          <span>{item.yomi}</span>
        </Paper>
      </Grid>
    </Grid>
  )
};



type CondProps = {
  params: Params,
  updateParams: any,
};
const Conditions: Component<CondProps> = (props: CondProps) => {
  return (
    <Grid container m='4px 0 24px' p='0'>
      <Grid flex={1}>
        <TextField
          label='food name'
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              const kwd = e.currentTarget.value;
              if (props.params.kwd !== kwd) {
                props.updateParams({kwd: kwd});
                //e.target.blur();
              }
            }
          }}
        />
      </Grid>
    </Grid>
  )
};

export default MenuList;
