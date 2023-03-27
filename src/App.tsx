import "./App.css";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { RiLogoutCircleRFill } from "react-icons/ri";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
  font-family: Montserrat, "sans-serif";
`;

const Navbar = styled.div`
  width: 100%;
  height: 100px;
  background-color: #152b8d;
  color: #d1f1ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  font-weight: bolder;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ListItem = styled.li`
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px 16px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
  transition: ease-in 0.4s;

  &:hover {
    background-color: #283d9bbe;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
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

function App() {
  return (
    <>
      <Container>
        <Navbar>
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
        </Navbar>
      </Container>
    </>
  );
}

export default App;
