import { SelectedPage } from '@/shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value:SelectedPage)=> void;
}

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <div className='px-5 py-16 mt-5 text-center border-2 border-gray-100 rounded-md'>
        <div className='flex justify-center mb-4'>
            <div className='p-4 border-2 border-gray-100 rounded-full bg-primary-100'>
                {icon}
            </div>
        </div>
        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
        <AnchorLink className='text-sm font-bold underline text-primary-500 hover:text-secondary-500'
                        onClick={()=>setSelectedPage(SelectedPage.Benefits)}
                        href={`#${SelectedPage.Benefits}`}
                    >
            <p>Learn More</p>
        </AnchorLink>
    </div>
  )
}

export default Benefit