import { SelectedPage } from '@/shared/types';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
        <div className='items-center justify-center w-5/6 mx-auto md:flex md:h-5/6'>
            {/* MAIN HEADER */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* Heading */}
                <div className='md:-mt-20'>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                            <img src={HomePageText} alt="Home Page Text" />
                        </div>
                    </div>
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda expedita illo, maxime sequi culpa sunt distinctio dolore eum placeat laudantium dolor debitis non neque nisi corrupti vero nobis laborum quisquam.</p>
                </div>
                {/* ACTION */}
                <div>
                    <ActionButton setSelectedPage={SelectedPage}>Join Now</ActionButton>
                    <AnchorLink className='text-sm font-bold underline text-primary-500 hover:text-secondary-500'
                        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>
            {/* IMAGE */}
            <div>
                <img src={HomePageGraphic} alt="Home Page Graphic" />
            </div>
        </div>
        {/* SPONSORS */}
        {isAboveMediumScreens && (
            <div>
                <div>
                    <div>
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