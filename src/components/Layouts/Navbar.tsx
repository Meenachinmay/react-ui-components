import React, { useState } from "react";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { RiLogoutCircleRFill } from "react-icons/ri";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
  font-family: Montserrat, "sans-serif";
`;

const Section = styled.div`
  width: 100%;
  height: 100px;
  max-height: auto;
  background-color: #152b8d;
  color: #d1f1ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  font-weight: bolder;
  padding: 0px 16px 0px 16px;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 939px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  gap: 10px;
`;

const ListItem = styled.li`
  margin-left: 5px;
  width: auto;
  padding: 10px 16px;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: #283d9bbe;
    transition: ease-in 0.4s;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  @media screen and (max-width: 939px) {
    display: none;
  }
`;

const RightList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;

const RightListItem = styled.li`
  font-size: 20px;
`;

const Logo = styled.img`
  height: 60px;
  object-fit: cover;
`;

const Menu = styled.div`
  font-size: 25px;
  cursor: pointer;
  @media screen and (min-width: 939px) {
    display: none;
  }
`;

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  console.log(showMenu)
  return (
    <>
      <Container>
        <Section>
          <Menu>
            <AiOutlineMenu  onClick={() => setShowMenu(!showMenu)}/>
          </Menu>
          <Left>
            <List>
              <Logo src="./img/paypal.png" />
              <ListItem>Dashboard</ListItem>
              <ListItem>Send and Request</ListItem>
              <ListItem>Payment Methods</ListItem>
              <ListItem>Activity</ListItem>
              <ListItem>Help</ListItem>
            </List>
          </Left>
          <Right>
            <RightList>
              <RightListItem>
                <FaBell />
              </RightListItem>
              <RightListItem>
                <AiFillSetting />
              </RightListItem>
              <RightListItem>
                <RiLogoutCircleRFill />
              </RightListItem>
            </RightList>
          </Right>
        </Section>
      </Container>
    </>
  );
};

export default Navbar;
