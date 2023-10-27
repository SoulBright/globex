import * as React from 'react';

import s from './Search.module.scss';

import { ReactComponent as SeatchIcon } from '../../assets/icons/search_ico.svg';


interface ISearchProps {
}

export const Search: React.FC<ISearchProps> = (props) => {
    return (
      <div className={s.search}>
        <input></input>
        <SeatchIcon className={s.submit}/>
      </div>
    );
};
