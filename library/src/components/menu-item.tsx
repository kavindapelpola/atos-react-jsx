import { useHistory } from "react-router-dom";
import styled from "styled-components";

const MenuItemButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffff;
  font-size: 16px;
  text-decoration: none;
  margin-right: 1.5rem;
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`;

type Props = {
  title: string;
  path: string;
};

export const MenuItem: React.FC<Props> = (props: Props) => {
  const history = useHistory();

  const handleClick = (path: string) => {
    history.push(path);
  };

  return (
    <MenuItemButton onClick={() => handleClick(props.path)}>
      {props.title}
    </MenuItemButton>
  );
};
