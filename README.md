This is an example of Chrome and Firefox on iOS requesting File Downloads twice, instead of once. You will notice in the terminal when a user first clicks on the download link, the download is requested. But, the client will receive a popup message asking to confirm the download, pressing this will perform a whole new request, even if all the chunks were served by the first request. This is not an issue on Safari for iOS, despite also having a popup window, when a user does select 'download' on the prompt, it will NOT perform another download request, it will only request it once. Android only requests the file download once, regardless of its browser. 

# How to Install
- npm install
- npm start
- Note: The default IP address used in localhost, you will have to change this in order to connect to the server on your iOS device, the IP address variable in stored at the top of app.js, and also in the download link in index.html (Under the public folder)