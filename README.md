# film_mock_site
website

Guide:
- to test the dynamic parts of the website, you need to either run the site on a local server
or host it on an online server


Steps to running it locally: 
Dependencies:
- PHP 
- Composer

to install PHP, you will either need to use a server tool like XAMMP which has it by default.
Alternatively, you can install it by visiting https://www.php.net/downloads and selecting the one
that fits your device. 

for windows:

installing PHP:
- you can install a windows php version by choosing either an x64 or x86 version (depending on your pc)
- you can either use 'Non-Thread Safe' or 'Thread Safe'. It's probably better to use 'Thread Safe' so go with that
- just download the zip folder and then extract it in your root directory under the name 'php'. e.g.
C:\php.
- you will need to make a folder in your C:\ drive and then extract the contents of the downloaded php version in the php folder
- you will also need to modify your environment variables on your pc to allow you to set php up globally
- you can do this by searching up 'edit the system environment variables'
- you should navigate to the advanced tab
- at the bottom is a button labeled 'Environment variables' which you should select
- looking at the system variables (bottom table), look for 'path' and double click it
- this shows you all the global paths, to add a new one select the 'new' button
- input in the directory that you want it to sync with (C:\php)
- find the php.ini file (you may need to rename php.development into php.ini)
- filter for ';extension=openssl' and remove the semi-colon ';' (this uncomments it)

installing composer: 
- https://getcomposer.org/ you can follow these steps
- navigate to the directory you want to install composer (if you plan to install it globally, you should do it in the main drive) e.g. C:\composer (by creating a folder for it)  
- you are likely to want to do the same thing with the path as we did with php 
- you can do this by searching up 'edit the system environment variables'
- you should navigate to the advanced tab
- at the bottom is a button labeled 'Environment variables' which you should select
- looking at the system variables (bottom table), look for 'path' and double click it
- this shows you all the global paths, to add a new one select the 'new' button
- input in the directory that you want it to sync with (C:\composer)


