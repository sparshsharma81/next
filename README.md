# next
this is the readme file and testing its working
there are two routers 
app base and page based
in the app base there is page base navigation
 and in the app also there is page based navigation ...
 page based router --- old way
  app base -- new way
   
   page base is stable -- meanwhile app has 
   but app is the future 
   page based is used to develop full stack ...it has predefined configuration 

   app based is used after next 13 update

   there are files..
   page.jsx
   layout.jsx --cover of the page
   error.jsx ---in case of runtime error..it will show up
   not-found.jsx---if the page is not found..then it will get executed///
   loading.jsx --- in the case of loading..this page get executed///
   they are fixed files 

   export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

 in the layout page..there is a default variable called metadata-- which contain title and descritping
 this is the default title and description of the file

 this is basically creating auto head tag///
 

@ -- this means the root folder -- 
 "@/*": ["./src/*"]  ---- this means that pure file me ham kahi bhi ise likhe..
 ye hame src folder me leke jayega
import Header from "@/component/Header";

//we can import it



export default function courseLayout({children}) --- so here the children is basically the page component'
we can create a folder and then create page.jsx folder inside it...and if we go to that api..like type the name after /folder 
then the page component will get loaded..
and also if we create the layout page..the it will show the result 
{children} 


//every folder must have page.jsx file so that we can call that api


in the anchor tag..the react basic functionality --- that is loading only a specific component without changing the other component
//that things does not happen./
basically react ki functionality properly implement nahi ho paa rahi..

so for that we are using next in build component called link 
 import Link from 'next/link'; 
 --- we can use this for navigation 

 in react ..the routing and navigation is inbuilt 
 so instead of anchor --- we can use <Link></Link>

 //hence in this way we are managing routing...
 basically we are managing static routing..
 like we have build about page, course page, and all these..so basically we are building like..if the user goes to this..then we will load this...

 now we are handling dynamic path


 first the image component 
 <IMAGE>

 we can import tbe image from import image from "@/images/downlaod.jpg"---- using this type of format.. it will search the image in the parent folder 

 next js basically image ko as an object import karta hai... so then we can use it as a object
 and in order to display the image..we can use image.src  ---- using this..we can show the image on the frontend 
 ---this is one way....if  we want to use another way to load the images..then we can use another way 

 import Image from 'next/image'; 
 --this is the next js way of loading the image
 //if we follow this approach-- it will give error that the width property is important...

 if we use this way..then it will give error that the width property is important
  --- so basically we need to apply the width and height into it

      <Image width={400} height ={400} src = {image.src}/> -- this way we can import image and use it in our project
      ==== if we apply fill in the property..then it will fill in that particular area 

      we can just use the image using the fill property

    if we do like <Image src = {"www.apasfkjkslfj.com"}/> ---if we want to import image from a dynamic link
    like if we want to import dynamic image..then we can use like this...then it will show error..the post base is not configured
    --this means that we need to allow the image from 3rd party to be allowed into our computer...
    like we can not import any image

    so in order to config it..---we need to go to image.config 
 -- and there we need to allow the dynamic image importing property
 --we need to allow the remove images 

 images --- localpattern --- images from the file system
 remotepattern --- kahi aur se aane wali images  
 
 module.export = {
  images: {
    remotePatterns: [
      protocol: 'https',
      hostname: 's3.amazonaws.com',
      portL '',
      pathname: '/my-bucket/**',
    ]
    ----- we need to allow this type;
  }

 }

 --and here is hostname -- if we want to allow that only from this particular domain..i should receive images..then i can allow then by
 hostname:'https://storage.googleapis.com' 

 //BASICALLY AGAR REMOTE IMAGE (IMAGES FROM ANOTHER 3RD PARTY SOURCE) --- AGAR REMOTE IMAGES LAGANI HAI...
 TO NEXT BOLTA HAI KI PEHLE SE MUJHE BATAO KI KON KONSI REMOTE IMAGES LAGANI HAI=== THIS IS THE SECURITY FEATURE 

 //EVEN WE CAN USE THE IMG TAG---IT WILL SHOW NO ERROR AND WE CAN IMPORT ANY IMAGE---
 BUT STILL THAT IS NOT THE BEST PROFESSIONAL PROACTICE 
 <img src = "www.image.com">


 "use client" ---- if we just type this..then the data will be loaded on the client side..
 by default the java component is loaded on the server side..but using this ..the data will be loaded on the client side

 also there are setinterval and clearinterval