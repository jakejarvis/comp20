# Lab 6: Messages

1. All aspects of the lab have been implemented correctly. I used 
XMLHttpRequest to access both data.json and messageshub (or tried to),
and I catch errors with an alert window. I made sure that there is no 
console output. The CSS uses the iMessage-style bubbles that we 
discussed in class, and matches the style in the screenshot in the 
lab details.

2. I have not worked with anybody.

3. I spent approximately 2 hours on this assignment.

-----------

#### Why requesting data from messageshub doesn't work:

Security, security, security. Without same-origin policy, hackers 
with malicious intent can use JavaScript to "phone home" to another 
server on a different domain without the user's knowledge. For 
example, on one of those "YOU'VE WON 7 MILLION DOLLARS!" pages, the 
hacker can actually do the opposite and secretly inject a POST request
to bankofamerica.com and transfer $7,000,000 from the user's bank 
account to the hacker's account on the user's behalf. They could also 
send the cookies from facebook.com to their own server, which would 
allow them to log into Facebook as the user.

Our lab JavaScript cannot acccess files from messagehub.herokuapp.com 
because the server does not allow tuftsdev.github.io or out local 
machine as an origin using CORS.