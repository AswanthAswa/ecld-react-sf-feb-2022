import React from 'react';
import './Pagination.css';

const Pagination=({totalPages,handlePage})=>{
    const buttonsArr= new Array(totalPages).fill(0).map((_, index)=>index + 1)
    return (
        <div>
        {
        buttonsArr.map(num=>{
            return <button id="pageButton" onClick={()=>handlePage(num)}>{num}</button>
        })
    }
        </div>
    )
}

export default Pagination;