import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai"
import { RxPerson } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
// import { RiArrowDownSLine } from "react-icons/ri"


const Header = () => {

    return (
        <>
        <Head>
            <Container>
                <Logo>LOGO</Logo>

                <Navs>

                    {/* <Men>
                        <MenText>Men</MenText>
                        <MenIcon>
                            <RiArrowDownSLine />
                        </MenIcon>
                    </Men> */}

                    <Men>Home</Men>

                    <Men>About</Men>

                    <Men>Services</Men>

                    <Men>Products</Men>


                    {/* <Men>
                        <MenText>Templates</MenText>
                        <MenIcon>
                            <RiArrowDownSLine />
                        </MenIcon>
                    </Men>

                    <Men>
                        <MenText>Explore</MenText>
                        <MenIcon>
                            <RiArrowDownSLine />
                        </MenIcon>
                    </Men> */}


                </Navs>

                <User>
                    <Icon>
                        <AiOutlineSearch />
                    </Icon>
                    
                    <Icon>
                        <RxPerson />
                    </Icon>
                    
                    <Icon>
                        <Cart>0</Cart>
                        <BsCart />
                    </Icon>
                </User>

                <Button>Get Started</Button>
            </Container>
        </Head>

        </>
    )
}

export default Header

// const Head = styled.div``;

// const Head = styled.div``;
const Button = styled.button`
width: 100px;
height: 35px;
border: none;
/* background-color: #500463; */
background-color: #787790;
color: white;
border-radius: 7px;
/* margin-top: 25px; */
cursor: pointer;
font-weight: 600;
`;

const Cart = styled.div`
position: absolute;
width: 18px;
height: 18px;
background-color: #787790;
color: white;
font-size: 9px;
border-radius: 50%;
top: -7px;
right: -7px;
display: flex;
justify-content: center;
align-items: center;
z-index: 600;
`;

const Icon = styled.div`
margin-left: 20px;
font-size: 20px;
color: #787790;
position: relative;
cursor: pointer;
`;

const User = styled.div`
display: flex;
`;

const MenIcon = styled.div`
margin-left: 5px;
margin-top: 6px;
`;

const MenText = styled.div`
`;

const Men = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 20px;
color: #787790;
font-size: 14px;
font-weight: 600;
cursor: pointer;
text-align: center;
display: flex;
justify-content: center;
width: 80px;
height: 30px;
border-radius: 20px;

:hover{
  
    /* padding: 7px;
    border-radius: 20px; */
    background-color: #e3ffe6; 
}
`;

const Navs = styled.div`
display: flex;
align-items: center;
`;

const Logo = styled.div`
font-size: 25px;
color: black;
font-weight: 600;
`;

const Container = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Head = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 0 2px gray;
`;

