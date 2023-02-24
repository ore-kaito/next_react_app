import { TwitterPage } from 'components/TwitterPage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import YoutubePage from '../YoutubePage'
import Instagram from '../InstagramPage'

export function MenuTabContents() {
  console.log()
    return (
      
      <Tabs >
        <TabList> 
          <Tab>Youtube</Tab>
          <Tab>Twitter</Tab>
          <Tab>Instagram</Tab>
        </TabList>
        {/* Youtube */}
        <TabPanel>
         <YoutubePage/>
        </TabPanel>

        {/* Twitter クリック時にレンダリングされないようにしたい*/}
        {/* <Link aref=""></Link> */}
        <TabPanel>
          <TwitterPage />
        </TabPanel>

        {/* Instagram クリック時にレンダリングされないようにしたい*/}
        <TabPanel>
          <Instagram />
        </TabPanel>
      </Tabs>
    )
  }

  
  export default MenuTabContents;