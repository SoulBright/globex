import * as React from 'react';

import s from './Report.module.scss';
import { TypeReports } from '../../types';

import { ReportItems } from './reportItems/ReportItems';
import { Modal } from '../modal/Modal';
import { UserDetail } from '../userDetail/UserDetail';

interface IReportProps {
}

export const Report: React.FC<IReportProps> = (props) => {
  const ReportsList: TypeReports[] = [
    {
      id: 1,
      name: "Вася Пупкин",
      phone: '+7(999)66-66-666',
      mail: 'examole@mail.com',
    },
    {
      id: 2,
      name: "Петя Сидаров",
      phone: '+7(999)66-66-666',
      mail: 'examole@mail.com',
    },
    {
      id: 3,
      name: "Маша Кашина",
      phone: '+7(999)66-66-666',
      mail: 'examole@mail.com',
    },
    {
      id: 4,
      name: "Ира Иванова",
      phone: '+7(999)66-66-666',
      mail: 'examole@mail.com',
    },
    {
      id: 5,
      name: "Катя Петрова",
      phone: '+7(999)66-66-666',
      mail: 'examole@mail.com',
    },
    {
      id: 6,
      name: "Коля Сидаров",
      phone: '+7(999)66-66-666',
      mail: 'examole@mail.com',
    },
  ]

  const [modalMenuIsOpen, setModalMenuIsOpen] = React.useState(false)

  return (
    <>
      <div className={s.container}>
        {ReportsList.map((item) => (
          <div key={item.id} className={s.report_item} onClick={() => setModalMenuIsOpen(true)}>
            <ReportItems
              name={item.name}
              phone={item.phone}
              mail={item.mail}
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
