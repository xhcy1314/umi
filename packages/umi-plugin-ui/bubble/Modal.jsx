import React from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';

const ModalWrapper = styled('div')`
  position: fixed;
  width: 80%;
  max-width: 1000px;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  ${props => (props.visible ? 'display: block;' : 'display: none;')}
`;

const Mask = styled('div')`
  background: rgba(0, 0, 0, 0.66);
  z-index: 999;
  position: absolute;
  top: -10000px;
  left: -10000px;
  bottom: -10000px;
  right: -10000px;
  width: 100000px;
  height: 100000px;
`;

const Modal = props => {
  const { children, onMaskClick, visible } = props;

  return (
    <Portal>
      {visible && (
        <ModalWrapper visible={!!visible}>
          {React.cloneElement(children, {
            style: {
              zIndex: 9999,
              position: 'relative',
              ...(children.props.style ? children.props.style : {}),
            },
          })}
          <Mask onClick={onMaskClick} />
        </ModalWrapper>
      )}
    </Portal>
  );
};

export default Modal;