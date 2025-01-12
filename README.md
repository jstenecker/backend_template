# Template node.js application backend
# Setting up environment in VScode:
# Install git and node.js to your computer
# Open VS Code
# Navigate to the extensions tab on the left navbar
# Add the following extensions: 
#       ES7 + React/Redux/React Native Snippets
#       ESLint
#       Github Pull Requests
#       Github Repositories
#       MongoDB for VS Code
#       Remote Repositories
#       Prettier
#
# Next open terminal (ctrl + `) and run the following commands to sign in to github:
#   git config --global user.name "Your Name"
#   git config --global user.email "your_email@example.com"
#
# Then open up command pallette with ctrl + shift + p  and enter git: clone
# Enter the repository url to clone, then select "add to workspace"
#
# You will then need to install the dependencies using the command 'npm install' followed by the dependency
# Required dependencies:
#   Frontend:
#       react react-dom
#       react-router-dom
#       axios
#       bootstrap
#       react-bootstrap
#       tailwind
#
#   Backend:
#       express
#       vite
#       axios
#       dotenv
#       puppeteer
#       mongoose
#       sharp
#       jsonwebtoken
#       bcrypt
#       cors
#       body-parser
#       --save-dev nodemon
#
# At this point you should be able to run the following commands to start server and site
# Backend: 'npx nodemon index.js'
# Frontend: 'npm run dev'