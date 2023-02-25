import { TwitterPage } from 'components/TwitterPage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import YoutubePage from '../YoutubePage'
import Instagram from '../InstagramPage'
import styles from '../../styles/Home.module.css'

export function MenuTabContents() {
  console.log()
  
    return (
      
      <Tabs>
        <div className={styles.margin_top}></div>
          <TabList> 
          <div className={styles.position_center}>
             <Tab>Youtube</Tab>
            
            
            <Tab>Twitter</Tab>
            <Tab>Instagram</Tab>
          </div>
          </TabList>
     
        

        <TabPanel>
         <YoutubePage/>
        </TabPanel>

        <TabPanel>
          <TwitterPage />
        </TabPanel>

        <TabPanel>
          <Instagram />
        </TabPanel>
        
      </Tabs>
    )
  }

  
  export default MenuTabContents;