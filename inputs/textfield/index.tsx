import { h, FunctionalComponent } from 'preact';
import style from './style.css';

interface Props {
  onInput?: (value: string) => void,
  onKeyDown?: (event: any) => void, // e.target.value は onInput と異なり遅延
  label?: string,
  isTextArea?: boolean,
  rows?: number,
}

const TextField: FunctionalComponent<Props> = (props) => {
  const onInput = props.onInput || (() => {});
  const onKeyDown = props.onKeyDown || (() => {});
  const rows = props.rows || 1;
  const height = `${rows * 56}px`;
  return (
    <div class={style.wrapper} style={{height: height}}>
      {props.isTextArea ? (
        <textarea class={style.input} placeholder={props.label}
          rows={rows}
          onInput={(evt) => onInput(evt.currentTarget.value)}
          onKeyDown={(evt) => onKeyDown(evt)}
        />
      ) : (
        <input type="text" class={style.input} placeholder={props.label}
          onInput={(evt) => onInput(evt.currentTarget.value)}
          onKeyDown={(evt) => onKeyDown(evt)}
        />
      )}
      {/*<label class={style.label} >Outlined</label>*/}
    </div>
  );
};


export default TextField;
