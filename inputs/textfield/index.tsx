import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

interface Props {
  value?: string,
  onInput?: (value: string) => void,
  onKeyDown?: (event: any) => void, // e.target.value は onInput と異なり遅延
  label?: string,
  isTextArea?: boolean,
  rows?: number,
}

const TextField: FunctionalComponent<Props> = (props: Props) => {
  const [text, setText] = useState<string>(props.value || '');
  const onInput = props.onInput || (() => {});
  const onKeyDown = props.onKeyDown || (() => {});
  const rows = props.rows || 1;
  const height = `${rows * 56}px`;
  return (
    <div class={style.wrapper} style={{height: height}}>
      {props.isTextArea ? (
        <textarea class={style.input} placeholder={props.label}
          rows={rows}
          value={text}
          onInput={(evt) => {
            const txt = evt.currentTarget.value;
            setText(txt);
            onInput(txt);
          }}
          onKeyDown={(evt) => onKeyDown(evt)}
        />
      ) : (
        <input type="text" class={style.input} placeholder={props.label || ''}
          value={text}
          onInput={(evt) => {
            const txt = evt.currentTarget.value;
            setText(txt);
            onInput(txt);
          }}
          onKeyDown={(evt) => onKeyDown(evt)}
        />
      )}
      {/*<label class={style.label} >Outlined</label>*/}
    </div>
  );
};


export default TextField;
