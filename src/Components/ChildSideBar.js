import React from 'react'

function ChildSideBar({passingval2, passingData}) {
  return (
    <div className={`transition-all duration-200 ease-in bg-white w-40 h-screen shadow-md p-4 ${!passingval2 ? 'opacity-0 invisible translate-x-[-20px]' : 'opacity-1 visible translate-x-0'}`}>
        {
            passingData.map((val,i) =>{
                return <div key={i}>
                    <h1 className='mb-4'>{val}</h1>
                </div>
            })
        }
    </div>
  )
}

export default ChildSideBar