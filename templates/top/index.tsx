import { h, FunctionalComponent, Fragment } from 'preact';

const TopPage: FunctionalComponent = () => {
  return (
    <Fragment>
      <h2>Top</h2>
      <h4>inputs</h4>
      <p>
        <a href='/button'>Button with grid</a>
      </p>
      <p>
        <a href='/menu'>Menus</a>
      </p>
      <p>
        <a href='/textfield'>TextFields</a>
      </p>
      <p>
        <a href='/suggest'>KeywordSuggest</a>
      </p>
    </Fragment>
  );
};


export default TopPage;
