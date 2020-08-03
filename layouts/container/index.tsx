import { h, FunctionalComponent } from 'preact';
import style from './style.css';

/**
 * component only for centering
 */

interface Props {
  children?: h.JSX.Element[] | h.JSX.Element | string,
  style?: {[s: string]: string | number},
}

const Container: FunctionalComponent<Props> = (props: Props) => (
  <div class={style.container} style={props.style}>
    {props.children}
  </div>
);

export default Container;
