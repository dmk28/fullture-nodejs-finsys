import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

import { RiMoneyDollarCircleFill } from "react-icons/ri";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        {/* <img src={logoImg} alt='finsys' /> */}
        <div className='logo'>
          <RiMoneyDollarCircleFill /> finsys
        </div>
        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
