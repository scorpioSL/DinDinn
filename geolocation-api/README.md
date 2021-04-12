## Database setup
1.Go to src/database/config.json
2.Add your database credentials to the development object.
3.Open a terminal in peoject root folder(geolocation-api).
4.Make sure you have installed sequelize-cli package globally. If not run the command 'npm i -g sequelize-cli --save';
5.Run the command 'npx sequelize-cli db:migrate' in root folder terminal(step 3) that you have opened before. This command will create the Database for you.
6.Go to root folder(geolocation-api) and update the .env file with correct database credentials(Previous was for sequelize cli and this is for the project)

## Run the project
1.Run the project(development version) using the command 'npm run start:dev' (use the terminal opened in previous step 3).
2.Access the documentations using 'localhost:3000/docs' url (Port will be change according to .env PORT parameter)