import * as React from 'react';

import s from './Report.module.scss';
import { TypeReports } from '../../types';

import { ReportItems } from './reportItems/ReportItems';
import { Modal } from '../modal/Modal';
import { UserDetail } from '../userDetail/UserDetail';
import { Search } from '../search/Search';

import APIService from '../../API/UserService';

interface IReportProps {}

export const Report: React.FC<IReportProps> = (props) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false); //состояние модального окна
  const [UserList, setUserList] = React.useState<TypeReports[]>([]); // Список пользователей
  const [showMessage, setShowMessage] = React.useState(false); // Таймаут отображения сообщения, если пользователи не найдены при загрузке страницы
  const [selectedItem, setSelectedItem] = React.useState<TypeReports | null>(null); // состояние для отслеживания выбранного пользователя

  const handleSearchResult = (result: TypeReports[]) => {
    setUserList(result);
  }; // функция передающая результат поиска в переменную UserList

  React.useEffect(() => {
    fetchMenu();
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    return () => clearTimeout(timer);
  },[]) // Хук для отображение списка пользователей при загрузке страницы

  const fetchMenu = async (): Promise<void> => {
    try {
      const response = await APIService.getAllUsers();
      setUserList(response.data);
    } catch (error) {
      console.log('Ошибка при получении данных пользователей:', error);
    }
  }; // Функция получения списка пользователей при загрузке страницы

  const handleItemClick = (item: TypeReports) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };


  return (
    <>
      <Search onSearchResult={handleSearchResult} />
      <div className={s.container}>
        {UserList.length > 0 ? (
          UserList.map((item) => (
            <div key={item.phone} className={s.report_item}>
              <ReportItems name={item.name} phone={item.phone} email={item.email} onClick={() => handleItemClick(item)}/>
            </div>
          ))
        ) :showMessage ? (
          <p>Пользователи не найдены</p>
        ):null}
      </div>

      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <UserDetail selectedItem={selectedItem}/>
      </Modal>
    </>
  );
};