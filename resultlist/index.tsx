import { useState, useEffect } from 'react';

import {ajax} from '../utils/ajax';
import ResultSummary from './resultsummary';

/**
 * This module is responsible for the basic functions in result list page such as:
 *    - update condition parameters
 *    - connection to the backend using ajax
 *    - render the result lists
 * On the other hand, This does not care about application-specific data, such as:
 *    - structure of params
 *    - URL of backend server, ajax URL
 *    - structure of cassette component
 * those are passed as props.
 */

interface ParamBase {
  [s: string]: string | number | undefined,
}
interface Params extends ParamBase {
  page?: number,
  ippg?: number,
}
interface Props {
  params: Params,
  ajaxUrl: string,
  renderConds: (updateParams: any, params: Params) => h.JSX.Element[] | h.JSX.Element,
  renderCassette: (item: any, idx: number) => h.JSX.Element[] | h.JSX.Element,
}

const ResultList: FunctionalComponent<Props> = (props: Props) => {
  const [params, setParams] = useState<Params>(props.params);
  const [hitCount, setHitCount] = useState<number>(0);
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    /* cf.) https://stackoverflow.com/questions/57238928/react-typescript-16-8-how-to-make-useeffect-async */
    updateParams({});
  }, [])
  const updateParams = async (updatedParams: Params) => {
    setIsLoading(true);
    updatedParams.page = updatedParams.page || 1;
    const newParams = {...params, ...updatedParams};
    setParams(newParams);
    const result = await ajax(props.ajaxUrl, newParams);
    if (result) {
      setItems(result.items);
      setHitCount(result.count);
    } else {
      /* Ajax error handling */
    }
    setIsLoading(false);
  };

  return (
    <>

      {/* condition component */}
      {props.renderConds(updateParams, params)}

      {/* result */}
      <ResultSummary
        hitCount={hitCount}
        page={params.page || 1}
        ippg={params.ippg || 20}
        pageNumDisp={4}
        updatePage={(page: number) => {updateParams({page: page})}}
      >
        <>
          {isLoading ? (
            <span>loading</span>
          ) : (
            items.map((item: any, idx: number) => {
              const offset = Math.min((
                (params.page || 1) - 1) * (params.ippg || 20) + 1, hitCount);
              return props.renderCassette(item, idx + offset)
            }))
          }
        </>
      </ResultSummary>

    </>
  );
};

export default ResultList;
