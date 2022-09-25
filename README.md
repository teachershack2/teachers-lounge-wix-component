# Teachers Lounge

## Wix APIs
For this project code we used several of the Wix APIs:

wix-users-backend
* to get the user usernames for the preprocessing before data from a form is inserted into the dataabase
 
wix-window
* to pass data between the lightbox and the page it is opened from

wix-location
* to programatically navigate to other pages in the site

wix-data
* to access the database and perform aggregations and queries for data to display, which is used in pages such as the offers display page and the update form page

wix-members
* to get the user id to ensure only specific users can see certain pages

## Wix editor
This is some of the behind the scenes of what we managed to accomplish with Wix.

### Main editor

![image](/ScreenShots/wixscreenshots/wixpageslist.png)

On the right hand side of this image is the list of different pages and lightboxes that we created for this project, many of which contain code as seen in the code editor below.

### SEO and page permissions

![image](/ScreenShots/wixscreenshots/seoandpermissions.png)

We edited the permissions of the pages so that only memebers can access certain pages such as request creation, and we edit the seo page names for the differnt routes

### Database
![image](/ScreenShots/wixscreenshots/Databasepreview.png)

We created two separate databases. Further explanation of these database can be found in our devpost.

### Backend processing
![image](/ScreenShots/wixscreenshots/backendpreprocessing.png)

We added some backend preprocessing scripts for updating data in the database.
