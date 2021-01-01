# START-UP NAME
This startup page is heavily inspired by [this one](https://github.com/Restitutor-Orbis/transformation). The entire page is based on his design as a first project.

## Some things to take in mind
If the user wants to open the start-up page when opening a new tab in firefox, **stpg** has us covered. Executing the next line on the cmd, two files will be created :
- firefox.cfg
- autoconfig.js

These files can be accessed under /usr/lib/firefox/ and /usr/lib/firefox/defaults/pref, respectively. It's encouraged to take a look at those files and configure them as you wish, as they have more power than the script can make

sudo bash -c "$(wget -qO - 'https://stpg.tk/firefox-new-tab-script')"
