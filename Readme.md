# Parcel

# Food App as an example

# components
/**
 * Header 
 *  Logo
 *  Nav Items
 * Body 
 *  Search
 *  Restaurant Container 
 *     Restaurant Card
 *  Footer
 *     Copright
 *     Links
 *     Address
 *     Contact 
 */

# Two types of export/import
 1. Default export/import
    export default Component;
    import Component from 'path';
 2. Named export/import
    export const Component;
    import { Component } from 'path';


# 2 types of Routing in web apps:
1. Server side Routing
2. Client side Routing - 
   React-router-dom provides client side routing this is said to Single Page Application(via routing)

# Redux toolkit
   - Install libraries @reduxjs/toolkit and react-redux
   - Build our react store (createConfigure - @reduxjs/tooltip)
   - Connect our store to our app.(Provider from react-redux)
   - Create slice(Cart slice).
   - Dispatch action 
   - Reducer 
   - Selector
# Developer Testing 
   - Unit Testing - one unit or one component of application (header)
   - Integration Testing - many components for example (search box => filters the restaurant cards)
   - End to End Testing - e2e Testing - From user landing to user leave the application

# Setting up Testing 
   - Install react testing library
   - Installed jest
   - Installed babel dependencies
   - Configure babel
   - Configure parcel config file to disable default babel transpilation
   - Jest configuration
   - Install jsdom
   - Install @babel/preset-react 
   - Install @testing-library/jest-dom
