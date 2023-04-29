import styled from 'styled-components';
 const Nav = styled.nav`
 background-color:#fff;
 border-bottom: 1px solid rgba(0,0,0,.0979);
 `;

 const NavHeader = styled.div`
 max-width: 1010px;
    width: 100%;
 display: flex;
 align-items: center;
 margin:0 auto;
 `;
 const NavLeft = styled.div`
 width: 33.333%;
 display: flex;
 align-items: center;
 cursor: pointer;
 text-align: left;
 `;

 const NavRight = styled.div`
 width: 33.333%;
 text-align: right;
 `;
 const NavCenter = styled.div`
 width: 33.333%;  
 text-align: left;
 `;

 const TextLogo = styled.h3`
 font-size: 22px;
  `;

 const Input = styled.input`
 font-size: 16px;
 font-weight: 300;
 border-radius: 3px;
 color:#262626;
 border:0;
 outline: none;
 padding: 11px 33px;
 cursor: text;
 text-align: center;
 width: 220px;
 background-color: #9290901a;
 `;
 const SignInButton = styled.button`
 width: 76px;
 border:0px;
 border-radius: 8px;
 padding: 0px;
 outline: none;
 margin-right: 6px;
 background-color: #0b8be0;
 cursor: pointer;
 &:hover{
  background-color: rgb(5, 63, 157);
 }
 `;
 const RegisterButton = styled(SignInButton)`
 background-color: transparent;
 width: 120px;
 &:hover{
  background-color: transparent ;
 }
 `;
 const TextButton = styled.p`
 font-weight: bold;
 color: #fff;
 `;
 const TextRegisterButton = styled(TextButton)`
  color: #6ea4f9;
  &:hover{
  color: #93b8f2  ;
 }
 `;

export const Header = () => {
    return (
       <Nav>
  <NavHeader>
    <NavLeft>
        <TextLogo>Eletrônicos Center</TextLogo>
    </NavLeft>
    <NavCenter>
      <Input type='search' placeholder='Buscar...'/>
    </NavCenter>
    <NavRight>
      <SignInButton>
<TextButton>Entrar</TextButton>
      </SignInButton>
      <RegisterButton>
<TextRegisterButton>Cadastre-se</TextRegisterButton>
      </RegisterButton>
    </NavRight>
  </NavHeader>
    </Nav>   
     
    )
        }