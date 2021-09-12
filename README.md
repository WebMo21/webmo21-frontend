# 🏋️ Fitness Time - Workout Planner Frontend

![GitHub deployments](https://img.shields.io/github/deployments/WebMo21/webmo21-frontend/production?label=vercel&logo=vercel&logoColor=white)

A modern web application enabling users scheduling and organization of fitness activities.

🌐 [VISIT LIVE WEBSITE](https://www.fitness-time.app)

🎨 [VISIT FRONTEND REPOSITORY](https://github.com/WebMo21/webmo21-frontend)

🖥️ [VISIT BACKEND REPOSITORY](https://github.com/WebMo21/webmo21-backend)

![Preview Landing Page](preview-fitness-time-landing-page.gif)
![Preview Dashboard](preview-fitness-time-dashboard.gif)

## ✨ Features

- CRUD for workouts
- CRUD for weekly workout plans
- Add, View, Update, Remove assigned workouts within their weekly workout plan
- Various filters and search functionalities
- Some CRUD for users based on authorization role
- Different functionality for role user and admin
- Language support for German and English
- Contact us via email

## 🤖 Tech

- Modern client-side frontend based on [React.js](https://reactjs.org) through [Next.JS](https://nextjs.org) framework with a tiny integrated serverless backend
- Modern styling with the help of the utility-first CSS framework [Tailwind CSS](https://tailwindcss.com) with activated [JIT (Just-In-Time-Compiler)](https://tailwindcss.com/docs/just-in-time-mode)
- Continuous Integration/Continuous Deployment pipeline through [Vercel](https://vercel.com)
- Implemented three authentication mechanisms using [NextAuth](https://next-auth.js.org)
  - JWT token based authentication via oAuth providers like GitHub, Facebook and Twitter for quick SignIn
  - Alternative fallback magic URL email login
  - Admin login via custom backend authentication using username and salted + hashed password
- GDPR compliant cookie consent banner achieved with [js-cookie](https://www.npmjs.com/package/js-cookie)
- SEO & compatibility for OpenGraph through [Next SEO](https://www.npmjs.com/package/next-seo)
- Sending emails from the frontend for magic url login was achieved with the help of [Mailjet](https://www.mailjet.com)

## 🎨 UI

- Modern landing page with [Animate on Scroll](https://www.npmjs.com/package/aos) animations
- Responsiveness optimized for desktop, tablet and mobile devices
- **Color Palette**
  ![Color Palette](color-palette.png)
  - accent color lightseagreen (#10b981)
  - font color white (#ffffff)
  - primary background color darkslategray (#374151)
  - secondary background color black (#111827)
  - input background color darkslategray (#4b5563)
- **Used Images**
  - All used images are either CC0 free to use or their license has been purchased at [Adobe Stock](https://stock.adobe.com) or [flaticon](https://www.flaticon.com)
- Custom [Error](https://www.fitness-time.app/error), [404](https://www.fitness-time.app/404) and [Email sent](https://www.fitness-time.app/auth/mailsent) page

## 🏗️ Architecture & Design decisions

### 📁 File Structure

- /components
  - Contains modular and reusable components with state logic that return JSX code to be converted to HTML for displaying it in views.
  - Subfolders group different component files into their corresponding context.
- /pages
  - Contains files which are representing views that use modular components in them
  - \_app.js
    - Contains default configuration for all views like animate on scroll settings or providing information about the users JWT session data through the React Context API
  - /api
    - Contains configuration and model settings for NextAuth authentication which are executed server-side in deployed serverless functions as a tiny backend
  - /auth
    - Contains views that handle authentication like different login or logout views
- /public
  - Contains media and resources that will be used for static file serving in the root directory of the deployed production website.
  - Images are grouped within their contextual folders
- /styles
  - Contains .css files to be used for styling the website.
  - Tailwind with activated Just-In-Time-Compiler (JIT) will inject only the necessary and purged CSS definitions on the fly to keep production size as minimal as possible

### 📏 Rules & Convention

- Filenames of views can be lowercase
- Filenames of components should be CamelCase
- All media files like images have to be optimized and made as tiny as lossless possible before adding them to the project
- TailwindCSS classnames should always be used and just in edge cases inline styling should be applied within the JSX
- Prettier.js with team settings should be used for formatting all files to the same structure
- File indentation should be 2 spaces
- Naming of variables should be expressive and english
- Comments should only be used where necessary to explain higher level ideas of code since they age fast

### 📝 Authentication Decisions

For user authentication in the frontend the open source, customizable and gdpr-compliant authentication solution [NextAuth.js](https://next-auth.js.org/) is used.

![Alt Text](./public/login-screenshot.png)

#### Social Logins (oAuth Providers)

Several login mechanisms have been implemented through oAuth providers like GitHub, Facebook and Twitter. Users can use these Social logins to get into the web application really fast and without any hassle. The user will be redirect through 3-legged-oAuth to the social media provider like twitter and confirms the login there. Then the user is redirect to the application and logged in automatically. His data is stored within the `accounts` table in the database, containing information like the email, name, access_token and used provider. There is an error which seems to have not been thought through by NextAuth.js and cannot be fixed. When a user tries to sign in through different oAuth providers likes Twitter or Facebook and there uses the same email he will not be able to login through the last used social media. So a user has to stick to the first social media login and cannot change later anymore which is unfortunately.

#### Magic Link Email Login

Furthermore there is the option to login via email without a password. On first use an email will be sent to the user that contains a Verification Token that is valid for 24 hours and is stored in the database table `verification_request`. When used the user will be redirect and logged in automatically as well as his data will be stored within the `users` table containing information like his email. Email can also be used when a user has used an oAuth provider like GitHub, Twitter or Facebook with the same email before and maybe lost access. So it acts as a backup mechanism and the corresponding user account should be succesfully linked when used email instead of oAuth. Trough the selected technical login mechanism the CSRF token will be set automatically.

#### Username and Password custom authentication

To explore the NextAuth.js library more in depth and to fulfill the requirements of this project another login method was implemented for username and password. Admins can use this login mechanism by using the [Admin Login Page](https://www.fitness-time.app/auth/adminlogin) To learn more about how this was implemented lookup the documentation of [WebMo21 Backend](https://github.com/WebMo21/webmo21-backend/blob/main/README.md)

### 📫 Email Provider

For sending emails for authentication reasons the service [Mailjet](https://app.mailjet.com) is used. It offers easy and free access to sending out 100 emails per hour which should be enough for this university demo project. If it should ever go into real work production another SMTP service provider or an account upgrade can be used.

### 🐛 Downsides & Known Bugs

- There is still a validation error when a user tries to add a workout to a weekly workout plan with the exact start and end time as an already assigned workout for that day
- NextAuth is not made to handle many social media logins through different social networks where the user was signed up with the same email address. This will create a backend error and the user will not be able to sign in. This is not great for the user experience since many users use one email for all their social media. If the users only uses the same social media login button that he signed up with there is no problem at all.
- Also because of the way NextAuth handles JWT and user sessions the data from the JWT is applied to the user session only at sign up. So when the user changes his personal user settings a logout and login is required and does not meet the expectancy for a web app of 2021.

## 🚀 Performance Analysis

Lighthouse was used to gather information about the performance and usage of best practises for the web app. Accessibility should be focused more in depth in the future.

- **Landing page**
  ![Landing Page Lighthouse Result](landing-page-lighthouse-result.png)

  - Performance 98% 🥇
  - Accessibility 80 % 🥈
  - Best Practices 100 % 🥇
  - SEO 100 % 🥇

- **Dashboard**
  ![Dashboard Lighthouse Result](dashboard-lighthouse-result.png)
  - Performance 90 % 🥇
  - Accessibility 88 % 🥈
  - Best Practices 100 % 🥇
  - SEO 90 % 🥇

## 🏠 Getting Started

### ⏹️ Prerequisites

The following applications should be installed before running this software.

```bash
Git
Yarn
Node
```

### 🔧 Environment Variables

There are some environment variables needed weither the application should be run locally or in deployment.

```bash
GITHUB_ID=<3-legged oAUTH ID here>
GITHUB_SECRET=<3-legged oAUTH SECRET here>
GITHUB_WEBSITE_ID=<GitHub website id here>
GITHUB_WEBSITE_SECRET=<GitHub website secret here>
FACEBOOK_ID=<3-legged oAUTH ID here>
FACEBOOK_SECRET=<3-legged oAUTH SECRET here>
TWITTER_ID=<3-legged oAUTH ID here>
TWITTER_SECRET=<3-legged oAUTH SECRET here>

EMAIL_SERVER_USER=<Email SMTP username here>
EMAIL_SERVER_PASSWORD=<Email SMTP password here>
EMAIL_SERVER_HOST=<Email SMTP host here>
EMAIL_SERVER_PORT=<Email SMTP port here>
EMAIL_FROM=<Mail adress that should appear as sender here>

DATABASE_URL=<Database URL connection string here>

NEXTAUTH_URL=<Domain/base url of the project here>
SECRET=<https://generate-secret.vercel.app/32 Secret here>
JWT_SECRET=<Long Secret to sign JWT with here>

// Connect to your running WebMo21 backend server
NEXT_PUBLIC_BACKEND_URL=<http://localhost:5000/v1>

```

### Run Frontend In Development Environment

```bash
git clone <Frontend URL>
cd into project
yarn //to install dependencies
start backend server WebMo21-backend
yarn dev //to start frontend
visit http://localhost:3000 in browser
```

### Run Frontend in Production Environment

```bash
git clone <Frontend URL>
cd into project
yarn //to install dependencies
start backend server WebMo21-backend
yarn run build //to create production optimized frontend
upload and deploy build output files from .next folder
```

### 🚢 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🗼 Future Functionality

The next features which should be implemented are:

- Profile Picture File Upload
- Start and Track Workout Live View (Play Button in Navigation)
- More calendar interactions like drag and drop to reschedule a training plan or create a series of weekly training plans for a given time period

## 🧮 Organization

🔨 Tools

The Team (as visible below) worked together with a variety of different online tools to achieve the project outcome. Some of them are:

- [Visual Studio](https://code.visualstudio.com) Code as code editor of choice
- [Discord](https://discord.com) for communication & screen sharing useful for digital pair programming
- [Git](https://git-scm.com) for working together on the codebase

🌊 Git flow

We used Git Flow to merge code into the codebase with a structured order and keep feature of the software concise. Our design is the following:

![Git Flow Network Graph](git-network-graph.png)

- main branch (production environment)
- develop branch (develop environment)
- feature-xy (temporary feature environment)

## 👨 Team

| <img src="team-jakob-holz.png" width="200"> | <img src="team-onur-menekse.png" width="200"> | <img src="team-artur-kamrad.png" width="200"> | <img src="team-sascha-majewsky.png" width="200">   |
| ------------------------------------------- | --------------------------------------------- | --------------------------------------------- | -------------------------------------------------- |
| Jakob Holz                                  | Onur Menekse                                  | Artur Kamrad                                  | [Sascha Majewsky](https://github.com/SaschaWebDev) |

## 🔑 License

License under MIT License. See [LICENSE](https://github.com/WebMo21/webmo21-frontend/blob/main/LICENSE) for further information.
