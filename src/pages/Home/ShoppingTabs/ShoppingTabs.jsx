import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
// import type { ReactTabsFunctionComponent, TabProps } from 'react-tabs';
// All custom elements should pass through other props
// const CustomTab: ReactTabsFunctionComponent<TabProps> = ({
//     children,
//     ...otherProps
//   }) => (
//     <Tab {...otherProps}>
//       <h1>{children}</h1>
//     </Tab>
//   );
  
//   CustomTab.tabsRole = 'Tab';

const ShoppingTabs = () => {
    return (
        <Tabs>
        <TabList>
          <CustomTab>Custom Tab 1</CustomTab>
          <CustomTab>Custom Tab 2</CustomTab>
        </TabList>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
      </Tabs>
    );
};

export default ShoppingTabs;