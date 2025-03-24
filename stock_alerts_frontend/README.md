Stock Alerts Frontend
Prerequisites:
Ensure that Git and Node.js are installed on your computer. You can download them here:

Git: Install Git
Node.js: Download Node.js
Clone the Repository:
To get the project on your local environment, follow these steps:

Open VS Code.
Open the Command Palette by pressing Ctrl + Shift + P (Cmd + P on macOS) and search for Git: Clone.
Paste the repository URL:

https://github.com/jstenecker/stock_alerts_frontend
Choose a folder on your local machine to store the project.
Open the cloned repository in VS Code:
If prompted, click Open.
If not, manually go to File → Open Folder, then select the cloned project directory.
Installing Dependencies:
Open a Terminal:

Press Ctrl + ` (backtick) or open it from the View or Terminal tab in VS Code.
Run the install command:

npm install
This will install all required dependencies listed in package.json.

Project Dependencies
Below are the required dependencies and their versions:

Main Dependencies:
These packages are necessary for the project's functionality.

Dependency	Version
axios	^1.7.9
bootstrap	^5.3.3
firebase	^11.2.0
react	^18.3.1
react-bootstrap	^2.10.7
react-dom	^18.3.1
react-icons	^5.4.0
react-router-dom	^7.1.2
rhea	^3.0.3

Development Dependencies:
These are used for linting, development, and testing.

Dev Dependency	Version
@eslint/js	^9.17.0
@types/react	^18.3.18
@types/react-dom	^18.3.5
@vitejs/plugin-react-swc	^3.5.0
eslint	^9.17.0
eslint-plugin-react	^7.37.2
eslint-plugin-react-hooks	^5.0.0
eslint-plugin-react-refresh	^0.4.16
globals	^15.14.0
vite	^6.0.5

Running the Frontend:
To launch the frontend, run:

npm run dev
You should see output similar to:

Local: http://localhost:5173/
To open the webpage:

Windows/Linux: Hold Ctrl and click the link.
Mac: Hold Cmd and click the link.

Additional Notes:
Ensure that the backend server is running to fetch stock data properly.
If you encounter errors, try running:
npm audit fix

For any missing dependencies, re-run:

npm install

To update dependencies, use:

npm update

This README provides complete setup instructions, dependencies, and usage guidelines.