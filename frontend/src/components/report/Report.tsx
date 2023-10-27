import * as React from 'react';

import s from './Report.module.scss';
import { TypeReports } from '../../types';

import { ReportItems } from './reportItems/ReportItems';
import { Modal } from '../modal/Modal';
import { UserDetail } from '../userDetail/UserDetail';

import APIService from '../../API/UserService'

interface IReportProps {
}

export const Report: React.FC<IReportProps> = (props) => {
  const [UserList, setUserList] = React.useState<TypeReports[]>([])

  React.useEffect(() => {
    fetchMenu()
  },[])

  const fetchMenu = async (): Promise<void> => {
    try {
      const response = await APIService.getUsers();
      setUserList(response.data);
    } catch (error) {
      console.log('Ошибка при получении меню:', error);
    }
  };

  const [modalMenuIsOpen, setModalMenuIsOpen] = React.useState(false)

  return (
    <>
      <div className={s.container}>
        {UserList.map((item) => (
          <div key={item.phone} className={s.report_item} onClick={() => setModalMenuIsOpen(true)}>
            <ReportItems
              name={item.name}
              phone={item.phone}
              email={item.email}
            />
          </div>
        ))}
      </div>

      <Modal
      isOpen={modalMenuIsOpen}
      onClose={() => setModalMenuIsOpen(false)}
      >
        <UserDetail />
      </Modal>
    </>
  );
};
