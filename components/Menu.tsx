import styled from 'styled-components'
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';

export function Menu() {
    return (
      <motion.div
      initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
      >
        <Wrapper >
          <Header>
            <Link href="/">
              <p>
                Youtube
                <div className='menu_bar'></div>
              </p>
            </Link>
            <Link href="/TwitterPage/TwitterContents">
            <p>Twitter</p>
            </Link>
            <Link href="/InstaPage/InstaContents">
            <p>Instagram</p>
            </Link>
          </Header>
       </Wrapper>
      </motion.div>
      
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