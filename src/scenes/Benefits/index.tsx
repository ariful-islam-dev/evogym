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
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}
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
            <motion.div
             initial="hidden"
             whileInView="visible" 
             viewport={{once: true, amount: 0.5 }} 
             transition={{ duration: 0.5}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity: 1, x:0}
                }}
            className='md:my-5 md:w-3/5'>
             <HText>MORE THAN JUST GYM.</HText>
             <p className='my-5 text-sm'>
              We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
             </p>
            </motion.div>
            {/* Benefits */}
            <motion.div className="items-center justify-between gap-8 mt-5 md:flex"
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              variants={container}
            >
              {
                benefits.map((benefit:BenefitType)=>(
                  <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description}
                    setSelectedPage={setSelectedPage}
                  />
                ))
              }
            </motion.div>
              {/* GRAPHICS AND DESCRIPTION */}
              <div> 
                {/* GRAPHIC */}
                <img src="" alt="" />
                {/* DESCRIPTION */}
                <div>
                  {/* TITLE */}
                  <div className="relative">
                    <div className="before:absolute before:-top-20 before:-top-20 before:-left-20 before:z-[1] before:content-abstracwaves">
                      <div>
                        <HText>MILLIONS OF HAPPY MEMBERS GETTING{""}
                          <span className="text-primary-500">FIT</span>.
                        </HText>
                      </div>
                    </div>
                  </div>
                  {/* DESCRIPTION */}
                  <div>
                    <p>Nasceture aenean massa auctor tincidunt. laculis potenti amet egestas ultries consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultries tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.</p>
                    <p>Fringilla a sed at suspendiesse ut enim volutpat Rhoncus vel est tellus quam porttitor. Muris velit euismod elementtum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in rusus nunc.</p>
                  </div>
                  {/* BUTTON */}
                </div>
              </div>
        </motion.div>
    </section>
  )
}

export default Benefits