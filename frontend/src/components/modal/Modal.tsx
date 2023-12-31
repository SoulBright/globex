import * as React from 'react';
import { Transition } from 'react-transition-group';

import { ReactComponent as IconClose } from '../../assets/icons/cross_icon.svg';

import './Modal.scss';

interface IModalProps {
  isOpen: boolean;
  onClose: (value: React.SetStateAction<boolean>) => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
  const nodeRef = React.useRef(null);

  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true} nodeRef={nodeRef}>
        {(state) => (
          <div className={`modal modal--${state}`} ref={nodeRef}>
            <div className='modal_wrapper' onClick={() => onClose(false)}>
              <div className='modal_content'>
                <IconClose className='modal_close_button' onClick={() => onClose(false)} />
                {children}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};