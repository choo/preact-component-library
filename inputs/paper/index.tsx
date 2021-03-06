import { h, FunctionalComponent } from 'preact';
import style from './style.css';

interface Props {
  children?: h.JSX.Element[] | h.JSX.Element | string,
  style?: {[s: string]: string | number},
}

const Paper: FunctionalComponent<Props> = (props: Props) => {
  return (
    <div class={style.paper} style={props.style ? {...props.style} : {}}>
      {props.children}
    </div>
  );
};

export default Paper;
