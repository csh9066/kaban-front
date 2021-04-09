import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  visible: boolean;
  onCancel: () => void;
}

function Modal({ visible, children, onCancel }: Props) {
  if (!visible) {
    return null;
  }
  return ReactDOM.createPortal(
    <OverRay onClick={onCancel}>
      <ContentArea onClick={(e) => e.stopPropagation()}>{children}</ContentArea>
    </OverRay>,
    document.getElementById("root-modal") as Element
  );
}

const OverRay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const ContentArea = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
`;

export default Modal;
