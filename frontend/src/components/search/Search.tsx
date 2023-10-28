import * as React from 'react';

import s from './Search.module.scss';
import { TypeReports } from '../../types';

import { ReactComponent as SeatchIcon } from '../../assets/icons/search_ico.svg';
import APIService from '../../API/UserService';


interface ISearchProps {
  onSearchResult: (result: TypeReports[]) => void;
}

export const Search: React.FC<ISearchProps> = (props) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearch = async () => {
    try {
      const response = await APIService.getUser(searchValue);
      props.onSearchResult(response.data);
      setSearchValue('')
    } catch (error) {
      console.log('Ошибка при получении данных пользователя:', error);
    }
  };

  return (
    <div className={s.search}>
      <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <SeatchIcon className={s.submit} onClick={handleSearch} />
    </div>
  );
};