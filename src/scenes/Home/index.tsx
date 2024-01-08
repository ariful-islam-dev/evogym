import { SelectedPage } from '@/shared/types';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {motion} from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage)=>void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
        id='home'
        className='gap-16 py-10 bg-gray-20 md:h-full md:pb-0'
    >
        {/* IMAGE AND Main Header */}
        <motion.div 
            className='items-center justify-center w-5/6 mx-auto md:flex md:h-5/6'
            onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
        >
            {/* MAIN HEADER */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* Heading */}
                <motion.div className='md:-mt-20' 
                initial="hidden"
                 whileInView="visible" 
                 viewport={{once: true, amount: 0.5 }} 
                 transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity: 1, x:0}
                    }}
                >

                    <div className='relative'>
                        <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                            <img src={HomePageText} alt="Home Page Text" />
                        </div>
                    </div>
                    <p className='mt-8 text-sm md:text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda expedita illo, maxime sequi culpa sunt distinctio dolore eum placeat laudantium dolor debitis non neque nisi corrupti vero nobis laborum quisquam.</p>
                </motion.div>
                {/* ACTION */}
                <motion.div className='mt-8 flex items-center gap-8 md:justify-start'
                    initial="hidden"
                    whileInView="visible" 
                    viewport={{once: true, amount: 0.5 }} 
                    transition={{delay:0.2, duration: 0.5}}
                       variants={{
                           hidden: {opacity:0, x:-50},
                           visible: {opacity: 1, x:0}
                       }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    <AnchorLink className='text-sm font-bold underline text-primary-500 hover:text-secondary-500'
                        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>
            {/* IMAGE */}
            <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img src={HomePageGraphic} alt="Home Page Graphic" />
            </div>
        </motion.div>
        {/* SPONSORS */}
        {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-primary-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img src={SponsorRedBull} alt="Red Bull Sponsor" />
                        <img src={SponsorForbes} alt="For Bes Sponsor" />
                        <img src={SponsorFortune} alt="For Tune Sponsor" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home