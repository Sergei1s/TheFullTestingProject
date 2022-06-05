import React,{Component} from "react";


export default function Header({testName, ...props}) {
    
    return (
        <div>
            <div className="pt-5 pb-3 mb-0">
                <h1 className='text-center m-4'>{testName}</h1>
            </div>
        </div>
        
        );


}