import * as React from 'react';

import s from './ReportItems.module.scss';

import { ReactComponent as Phone } from '../../../assets/icons/phone_ico.svg';
import { ReactComponent as Mail } from '../../../assets/icons/mail_ico.svg';

interface IReportItemsProps {
    name: string,
    phone: string,
    mail: string
}

export const ReportItems: React.FC<IReportItemsProps> = ({ name, phone, mail }) => {
    return (
        <div>
            <div className={s.container}>
                <h2>{name}</h2>
                <div className={s.info}>
                    <div className={s.item_info}>
                        <Phone className={s.svg} />
                        <span>{phone}</span>
                    </div>
                    <div className={s.item_info}>
                        <Mail className={s.svg} />
                        <span>{mail}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
