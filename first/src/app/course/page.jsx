import React from 'react';
import image from "@/images/download.jpg"   
import Image from 'next/image';
export default function page(){
    return (
        <main>
        <div>
            {/* we can import the image from import image from "@/images/download.jpg" */}
            this is the page component --- this is the course page
            <img src = {image.src}/>
            <Image width={400} height ={400} src = {image.src}/>
        </div>
        </main>
        //now we want to import image -- we can import it from the image folder
    )
}