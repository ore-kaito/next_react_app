import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ContentsPage from 'pages/YoutubePage/ContentsPage';

import TwitterContents from 'pages/TwitterPage/TwitterContents';
import InstaContents from "pages/InstaPage/InstaContents";

export function MenuTabContents() {
    return(
      
      <Tabs >
        <TabList> 
          <Tab>Youtube</Tab>
          <Tab>Twitter</Tab>
          <Tab>Instagram</Tab>
        </TabList>
        {/* Youtube */}
        <TabPanel>
          <ContentsPage/>
        </TabPanel>

        {/* Twitter クリック時にレンダリングされないようにしたい*/}
        <TabPanel>
          <TwitterContents/>
        </TabPanel>

        {/* Instagram クリック時にレンダリングされないようにしたい*/}
        <TabPanel>
          <InstaContents/>
        </TabPanel>
      </Tabs>
    )
  }

  
  export default MenuTabContents;