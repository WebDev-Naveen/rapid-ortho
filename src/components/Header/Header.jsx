import React from "react";
import styled from "styled-components";
import img1 from "../../assets/images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faComments,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import img2 from "../../assets/images/bb.png";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  border-radius: 3px;
  border: 1px;
  color: black;
  font-size: 18px;
  background: white;
  padding: 20px;
  font-family: "Poppins";
`;
const Search = styled.div`
  margin-right: 10px;
`;
const H6 = styled.h6`
  margin-top: 2px;
  margin-left: 5px;
`;
const SecondContainer = styled.div`
  flex: 4;
  text-align: right;
  text-decoration: none;
  ul {
    display: inline-block;
    list-style-type: none;
  }
  ul li {
    display: inline-block;

    button {
      text-decoration: none;
      color: #555;
      font-size: 16px;
      /* font-family: sans-serif; */
      border: none;
      background: white;
    }
  }
`;
const Container = styled.div`
  flex: 1;
  text-align: right;
  text-decoration: none;
  ul {
    display: inline-block;
    list-style-type: none;
  }
  ul li {
    display: inline-block;
    margin-right: 20px;

    button {
      text-decoration: none;
      color: #555;
      font-size: 16px;

      border: none;
      background: white;
    }
  }
`;
const Select = styled.select`
  text-decoration: none;
  border: none;
  border: 0px;
  outline: 0px;
  font-family: "Poppins";
  height: 30px;
`;
const Span = styled.span`
  position: absolute;
  top: 25px;

  border-radius: 50%;

  width: 5px;
  height: 5px;
  background-color: #ffc06a;
  border-radius: 50%;
  margin-right: 120px;
`;
const Img = styled.img`
  border-radius: 50%;
`;

const Header = () => {
  const name = [
    {
      label: "Ben Schooley",
      value: "Ben Schooley",
    },
    {
      label: "Justin Biber",
      value: "Justin Biber",
    },
    {
      label: "Runaldo",
      value: "Runaldo",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];

  return (
    <>
      <Nav>
        <Search>
          <FontAwesomeIcon icon={faSearch} color="#E6E6EC" />
        </Search>
        <H6>Have a question?</H6>
        <SecondContainer>
          <ul>
            <li>
              <button>
                <Img src={img2} alt="Header" width="25px" height="25px" />
              </button>
            </li>
          </ul>
        </SecondContainer>
        <Container>
          <ul>
            <li>
              <button>
                <FontAwesomeIcon icon={faComments} color="#BCBCCB" />
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faBell} color="#BCBCCB" />
              </button>
              <Span className="badge"></Span>
            </li>
            <li>
              <button>| </button>
            </li>
          </ul>
        </Container>
        <Select onChange={(e) => console.log(e.target.value)}>
          {name.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Img src={img1} alt="logo" width="25px" height="25px" />
      </Nav>
      <div></div>
    </>
  );
};

export default Header;
