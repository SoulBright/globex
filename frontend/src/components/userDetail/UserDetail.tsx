import * as React from 'react';

import s from './UserDetail.module.scss';

interface IUserDetailProps {

}

export const UserDetail: React.FC<IUserDetailProps> = (props) => {
    const request = [
        {
            id: 1,
            title: 'Евгения Савченко',
            phone: '+7 (918) 078-17-05',
            mail: 'yysavch1@mts.ru',
            admission_date: '15.10.2020',
            position: 'Дизайнер',
            division: 'Трайб автоматизированных систем контактных центров',
            additional_info: 'Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.',
        }
    ]
    return (
        <div>
            {request.map((item) => (
                <div key={item.id} className={s.report_item}>
                    <h2>{item.title}</h2>
                    <div className={s.info}>
                        <div className={s.info_title}>
                            <span>Телефон:</span>
                            <span>Почта:</span>
                            <span>Дата приёма:</span>
                            <span>Должность:</span>
                            <span>Подразделение:</span>
                        </div>
                        <div className={s.info_items}>
                            <span>{item.phone}</span>
                            <span>{item.mail}</span>
                            <span>{item.admission_date}</span>
                            <span>{item.position}</span>
                            <span>{item.division}</span>
                        </div>
                    </div>
                    <div className={s.additional}>Дополнительная информация:
                        <span>{item.additional_info}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
