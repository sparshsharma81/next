import React from 'react' 
export default function courseLayout({children}){
    return (
       
            <div style ={{border:"1px green solid"}}>
                 <main>
            //now this is the course layout and is working properly 
            {children}
            </main>

            </div>
    )
}