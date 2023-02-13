import styled from 'styled-components'

export function Menu() {
    return (
      <Wrapper>
          <Header>
            <Link href="/">
              Youtube
            </Link>
            <Link href="/">
              Twitter
            </Link>
            <Link href="/">
              Instagram
            </Link>
          </Header>
      </Wrapper>
       
    );
  }
  
  const Wrapper = styled.div`
    text-align: center;
  `;
  
  const Header = styled.header`
    background-color: #333333;
    min-height: 10vh;
    display:flex;
    
    align-items: center;
    justify-content: space-around;
    font-size: calc(10px + 2vmin);
 
  `;
  
  const Link = styled.a`
    color: #c4f5f7;
  `;
  
  export default Menu;