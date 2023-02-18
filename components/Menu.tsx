import styled from 'styled-components'
import Link from "next/link"


export function Menu() {
    return (
      <Wrapper>
          <Header>
            <Link href="/">
              Youtube
            </Link>
            <Link href="/TwitterPage/TwitterContents">
              Twitter
            </Link>
            <Link href="/InstaPage/InstaContents">
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
  

  
  export default Menu;