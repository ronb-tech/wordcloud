# wordcloud

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Project Overview

This project showcases a dynamic and responsive application designed to provide an engaging visual representation of data through a word cloud. Leveraging modern web technologies and best practices in software architecture, the project offers a glimpse into effective data visualization techniques and state management in Vue.js applications.

## Key Features

Simulation of Backend Requests with Promises
Implemented a simulation of backend requests using setTimeout to mimic data retrieval from JSON files. This approach allows for a realistic emulation of asynchronous data fetching, enhancing the development and testing process.

## Best Practices in File Structure and Separation of Concerns

Adopted best practices for organizing file structure and maintaining a clear separation of concerns. This methodology ensures the scalability and maintainability of the codebase, facilitating easier updates and collaboration.

## Simple Use Case of Vuex for State Management

Demonstrated the use of Vuex for state management through a straightforward use case: managing the userName. This example illustrates the power and simplicity of integrating Vuex in Vue.js applications for state management across components.

## Implementation of Word Cloud Component

Utilized the antv/g2 package to implement a word cloud component. This feature highlights the application's data visualization capabilities, presenting data in an engaging and informative format.
Filter Tabs by Concepts
Introduced filter tabs that allow users to categorize data visually, similar to categories. This functionality enhances the user experience by providing a straightforward method to navigate and explore data based on specific concepts.

## Responsive Design and Dynamic Word Cloud

Ensured that both the application and the word cloud component are fully responsive, adapting seamlessly to various screen sizes.
The size of each word in the word cloud corresponds to its value, creating a visually appealing representation of the data's significance. Additionally, each word is assigned a unique color to differentiate it effectively from its neighbors.

# Note on Data Visualization

Please note that the values in the JSON file range from 1 to 10. Due to the similar range of values, differences in the sizes of the words in the word cloud may not be prominently distinct. This similarity is by design to demonstrate the word cloud's functionality and responsiveness to data variations.
