<img src="https://github.com/Oguzhan13/exarion-nextjs-project/assets/108337929/871b1674-4cce-465b-9a15-79911043246d" alt="Image1" width="400" height="300" />
<img src="https://github.com/Oguzhan13/exarion-nextjs-project/assets/108337929/3092ee37-64b6-4abe-bfee-d2494cb9f279" alt="Image2" width="400" height="300" />

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Dependencies

"next": "13.4.7"
"react": "18.2.0"
"react-dom": "18.2.0"
"sass": "^1.63.6"
"@fortawesome/free-solid-svg-icons": "^6.4.0"
"@fortawesome/react-fontawesome": "^0.2.0"

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## In the VS Code terminal, the following commands are frequently used:

"npx create-next-app": This command is used to set up the NextJS framework. It installs the required packages such as react, react-dom, and next.
"npm install sass": This command installs the SASS (Syntactically Awesome Style Sheets) package, allowing the usage of SCSS files.
"npm install @fortawesome/free-solid-svg-icons" and "npm install @fortawesome/react-fontawesome": These commands install font packages to use Font Awesome's free solid SVG icons.
"npm run build": This command is used to build the project.
"npm run start": This command is used to start the project.
"npm run dev": This command is used to run the project in development mode.
"Ctrl + C": This command is used to stop the running project.

## Project Files:

**Note**: Server-Side Rendering (SSR) is used in relevant pages, with the getServerSideProps function. The fortawesome library, .js files inside the components/icons folder, functions in the helpers/github-util.js file, and .png and .svg files inside the public/github-icons folder are imported and used.

**• pages/index.js:**
IndexPage function is exported as default.
<HomePage> is imported to render the content of home.js, and it is wrapped within the <Fragment> JSX tag. Using Fragment allows grouping       multiple elements without adding extra DOM elements.

**• styles/global.css:**
CSS styles applicable throughout the project are defined in this file and imported into _app.js.
  
**• components/layout:**
**•	layout.js:**
This component contains the rendering of the content from main-header.js. It is imported into _app.js to allow rendering other content within Layout. The content is wrapped with <main>{props.children}</main> to display the footer.
**•	main-header.js:**
This section includes code blocks for the layout, navigation links, and search functionality.
The handleSearch function captures the input from the search bar and redirects to the user's profile page.
CSS information is retrieved from the main-header.module.scss file.
    
**• pages/_app.js:**
To display all pages within the Layout, <Layout><Component> ... format is used.
  
**• public/github-icons:**
Used in main-header.js and home.js files.
  
**• components/home-page:**
**•	home.js:**
This file contains the design of the home page. Next/link library is used for transitioning to the GitHub user list page.
CSS information is retrieved from the home.module.scss file.
    
**• pages/users:**
**•	index.js:**
The getUsers function from github-util.js is used within the getServerSideProps function.
Information from user-list.js and users-index.js files is rendered.
handleGoToPage, handleNextPage, handlePreviousPage, and handlePageNumberChange functions are defined here.
These functions handle page number changes, direct page number input, and navigation to the previous and next pages.
    
**•	[userName].js:**
This file is configured as a dynamic JavaScript file (ex: [dynamic].js).
Information from user-profile.js is rendered.
getServerSideProps function is used to organize API response information into a structured profile page.
CSS styles are retrieved from [userName].module.scss file.
    
**• components/github-api/user-list:**
**•	user-item.js:**
User information is formatted and displayed, and a button is included to redirect to the user's profile page within the site.
CSS information is retrieved from the user-item.module.scss file.
**•	user-list.js:**
Information from user-item.js is imported and displayed in a list format using the map function.
CSS information is retrieved from the user-list.module.scss file.
**•	users-index.js:**
Display format for the desired information on users/index.js page is prepared.
handleGoToPage, handleNextPage, handlePreviousPage, and handlePageNumberChange functions, along with the page and pageNumber values, are used as parameters in this file.
CSS information is retrieved from the users-list.module.scss file.

**•	components/github-api/user-profile:**
**•	user-profile.js:**
This file contains the information to be rendered for [userName].js.
A button is included to redirect to the user's GitHub profile page.
            
**• helpers/github-util.js:**
The getUsers function is defined with perPage, page, and since parameters.
This function retrieves the user list to be displayed on the page from the GitHub API.
The findUser function is defined with {username} parameter.
This function retrieves the profile information of a user matching the GitHub username from the GitHub API.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
