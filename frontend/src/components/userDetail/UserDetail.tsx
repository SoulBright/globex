import * as React from 'react';

import s from './UserDetail.module.scss';
import { TypeReports } from '../../types';

interface IUserDetailProps {
  selectedItem: TypeReports | null;
}

export const UserDetail: React.FC<IUserDetailProps> = ({ selectedItem }) => {
  if (!selectedItem) {
    return null;
  }

  return (
    <div>
      <div key={selectedItem.phone} className={s.report_item}>
        <h2>{selectedItem.name}</h2>
        <div className={s.info}>
          <div className={s.info_title}>
            <span>Телефон:</span>
            <span>Почта:</span>
            <span>Дата приёма:</span>
            <span>Должность:</span>
            <span>Подразделение:</span>
          </div>
          <div className={s.info_items}>
            <span>{selectedItem.phone}</span>
            <span>{selectedItem.email}</span>
            <span>{selectedItem.hire_date}</span>
            <span>{selectedItem.position_name}</span>
            <span>{selectedItem.department}</span>
          </div>
        </div>
        <div className={s.additional}>Дополнительная информация:
          <span>В данный момент отсутствует</span>
        </div>
      </div>
    </div>
  );
};