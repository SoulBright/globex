import * as React from 'react';

import s from './Report.module.scss';
import { TypeReports } from '../../types';

import { ReportItems } from './reportItems/ReportItems';
import { Modal } from '../modal/Modal';
import { UserDetail } from '../userDetail/UserDetail';
import { Search } from '../search/Search';

import APIService from '../../API/UserService'

interface IReportProps {
}

export const Report: React.FC<IReportProps> = (props) => {
  const [modalMenuIsOpen, setModalMenuIsOpen] = React.useState(false);
  const [UserList, setUserList] = React.useState<TypeReports[]>([]);
  const [showMessage, setShowMessage] = React.useState(false);

  const handleSearchResult = (result: TypeReports[]) => {
    setUserList(result);
  };

  React.useEffect(() => {
    fetchMenu();
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    return () => clearTimeout(timer);
  },[])

  const fetchMenu = async (): Promise<void> => {
    try {
      const response = await APIService.getAllUsers();
      setUserList(response.data);
    } catch (error) {
      console.log('Ошибка при получении данных пользователей:', error);
    }
  };

  return (
    <>
      <Search onSearchResult={handleSearchResult} />
      <div className={s.container}>
        {UserList.length > 0 ? (
          UserList.map((item) => (
            <div key={item.phone} className={s.report_item} onClick={() => setModalMenuIsOpen(true)}>
              <ReportItems name={item.name} phone={item.phone} email={item.email} />
            </div>
          ))
        ) :showMessage ? (
          <p>Пользователи не найдены</p>
        ):null}
      </div>

      <Modal isOpen={modalMenuIsOpen} onClose={() => setModalMenuIsOpen(false)}>
        <UserDetail />
      </Modal>
    </>
  );
};