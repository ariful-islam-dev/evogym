import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import {HomeModernIcon, UserGroupIcon, AcademicCapIcon} from '@heroicons/react/24/solid';
import {motion} from 'framer-motion';
import Benefit from './Benefit';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='w-6 h-6'/>,
    title: "State of the Art Facilities",
    description: "Neque adipiscing amet amet enim. Feugiat dolorenim fermentum in a in lectus pellentesque. Ullamcorper et."
  },
  {
    icon: <UserGroupIcon className='w-6 h-6'/>,
    title: "100's of Diverse Classes",
    description: "Euimsum id egestas risus tempus enit semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id"
  },
  {
    icon: <AcademicCapIcon className='w-6 h-6'/>,
    title: "Export and Pro Trainers",
    description: "Fasce vestibulum aliquam ut cras. Nisl lectus egestas sapien misl. Lacus at mi sit pellentesque. Congue parturient."
  },
]
type Props = {
    setSelectedPage: (value: SelectedPage)=>void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='w-5/6 min-h-full py-20 mx-auto'>
        <motion.div
            onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
        >
          {/* Header */}
            <div className='md:my-5 md:w-3/5'>
             <HText>MORE THAN JUST GYM.</HText>
             <p className='my-5 text-sm'>
              We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
             </p>
            </div>
            {/* Benefits */}
            <div className="items-center justify-between gap-8 mt-5 md:flex">
              {
                benefits.map((benefit:BenefitType)=>(
                  <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description}
                    setSelectedPage={setSelectedPage}
                  />
                ))
              }
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits