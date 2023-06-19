# Books Info Website

This is a Books Info website that utilizes the Google Books API to provide information about various books. It is built using React.js, Create React App, React Query, and Material UI.


**GitHub Page deployment** - (https://irgey.github.io/books-webpack/)
## Features

- **Home Page**: The Home Page provides an introduction to the Books Info website, showcasing its key features and providing navigation options to other pages.

- **Books Search Page**: The Books Search Page allows users to search for books using keywords or specific queries. It fetches data from the Google Books API and displays relevant book results, including book covers, titles, authors, and descriptions.

- **Not Found Page**: The Not Found Page is displayed when a user navigates to a non-existent route. It serves as an error page and provides a friendly message, suggesting the user return to the Home Page or perform a search.

## Installation

To run the Books Info website locally, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/books-info-website.git
```
2. Navigate to the project directory:
```bash
cd books-info-website
```
3. Install the dependencies:
```bash
npm install
```
4. Obtain a Google Books API key by following the instructions [here](https://developers.google.com/books/docs/v1/getting_started#APIKey).
5. Create a .env file in the project root directory and add the following line, replacing <YOUR_API_KEY> with your Google Books API key:
```bash
REACT_APP_API_KEY==<YOUR_API_KEY>
REACT_APP_BASE_URL='https://www.googleapis.com/books/v1/volumes'
```
6. Start the development server:
```bash
npm start
```
7. Open your browser and navigate to (http://localhost:3000) to view the Books Info website.

## Dependencies
The Books Info website utilizes the following major dependencies:

- React.js: A JavaScript library for building user interfaces.
- Create React App: A tool for setting up React projects with a pre-configured build process and development server.
- React Query: A data-fetching library for React applications, providing efficient data management and caching.
- Material UI: A popular React UI framework that provides pre-built components and styling for faster and easier web development.

##License

The Books Info website is open-source and released under the [MIT License](https://opensource.org/license/mit/).

##Acknowledgments

- This project utilizes the [Google Books API](https://developers.google.com/books) to fetch book data.
- The Books Info website was created as a demonstration project and is not affiliated with or endorsed by Google.