import React, { useRef, useState } from 'react'

const regions = [
  {
    name: 'Africa'
  },
  {
    name: 'America'
  },
  {
    name: 'Asia'
  },
  {
    name: 'Europa'
  },
  {
    name: 'Oceania'
  },
]

export const Selector = () => {

  const ref = useRef(null)
  const [hide, setHide] = useState(false)

  const handleClick = (e) => {
    if(ref !== null){
      ref.current.innerHTML = e.target.innerText
      setHide(!hide)
    }
  }

  const handleClickSelector = () => {
    setHide(!hide)
  }

  return (
    <div className='mt-11 w-3/5 relative'>
      <div onClick={handleClickSelector} className='rounded-md cursor-pointer bg-White flex justify-between py-[14px] items-center px-8 pr-4 shadow-md'>
        <p ref={ref} className='text-sm font-semibold'>Filter by Region</p>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>

      {
        hide && (
          <ul className='bg-White mt-1 rounded-md shadow-md text-sm font-semibold absolute left-0 right-0 top-12'>
            {
              regions.map(({name})=>(
                <li key={name} onClick={handleClick} className='cursor-pointer px-8 py-[5px] hover:bg-Very_Light_Gray'>
                  <p>{name}</p>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}
