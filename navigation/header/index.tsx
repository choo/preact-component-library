import { h, FunctionalComponent } from 'preact';
import * as style from "./style.module.css";
import {Hamburger, HamburgerItems} from './hamburger';

interface IProps {
  logoPath?: string,
  title?: string,
  hamburgerItems?: HamburgerItems,
}

const Header: FunctionalComponent<IProps> = (props: IProps) => (
  <header class={style.header}>
    <a href='/'>
      {props.logoPath && (
        <img src={props.logoPath} />
      )}
      {props.title && (
        <h1>{props.title}</h1>
      )}
    </a>
    {props.hamburgerItems ? (
        <Hamburger items={props.hamburgerItems} />
    ) : null}
  </header>
);

export default Header;
