Getting Started:

The Code In Action:

        cd into root folder and npm install

        run npm start

        since Mui is built with mobile first in mind you should 
        view it as a mobile device in your browser 
        (In your browser open up the inspector and click the
         phone laptop icon to the left of the "elements" tab).

Recreating The Code:

        run:
            npx create-react-app mui_app
            cd mui_app
            npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
            npm start

        then:
            paste this into the head of your index.html:
                <link rel="stylesheet"href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

        then:

            create these components and import them into the top of your App.js.
            don't worry about adding the functions in the files yet:

                ButtonAppBar.js
                RecipeReviewCard.js
                ActionButton.js

            In App.js delete everything in the main div

        after that:

            grab the code for the basic app bar from this page and paste it into ButtonAppBar.js
            https://mui.com/material-ui/react-app-bar/

            grab the code for the complex interaction component from this page and paste it into RecipeReviewCard.js
            https://mui.com/material-ui/react-card/

            grab the code for "Fab" from this page and paste it into ActionButton.js. 
            The delete every button component execpt the '+' button
            https://mui.com/material-ui/react-floating-action-button/

            import the components into App.js and load into the main div in this order

            <ButtonAppBar/>  
            <RecipeReviewCard />
            <ActionButton/>

    
        lastly: 

            dynamically create a list of cards using map. refer to the code in my finished App.js.
            change background-color of body in index.css to whatever you want.

I wrote this pretty quickly so If there are any errors please let me know.


        