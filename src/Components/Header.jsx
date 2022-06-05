import React,{Component} from "react";


export default function Header({testName, ...props}) {
    
    return (
        <div>
            <div className="pt-5 pb-0 mb-0">
                <h1 className='text-center m-4'>{testName}</h1>
            </div>

            <div className="pb-3 pt-0 mt-0"> 
            <div className ="container">
                <div className="w-75 p-2 mx-auto" >
                {/* <h5 className='text-center '>
                    <p className="text-secondary">«Описание теста Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci</p>
                </h5> */}
                </div>
            </div>
            </div>   
        </div>
        
        );


}