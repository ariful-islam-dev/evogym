import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from '@/shared/HText';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}


const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = ` mt-5 w-full px-5 py-3 placeholder-white rounded-lg bg-primary-300`;
  const { register, trigger, formState: { errors } } = useForm();
  const onSubmit = async(e:any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }
  return (
    <section id="contactus" className='w-5/6 pt-24 pb-32 mx-auto'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HText>
            <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nil sapien el rhoncus. Placerat at in enim perllentesque. Nulla adipiscing leo egestas risll elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        {/* RORM AND IMAGE */}
        <div className="justify-between gap-8 mt-10 md:flex">
          <motion.div
            className='mt-10 basis-3/5 md:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <form
              target='_blank'
              onSubmit={onSubmit}
              method='POST'
            >
              <input type="text" className={inputStyles}
                placeholder='Name'
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" && "MAX length is 100 char"}
                </p>
              )}
              <input type="email" className={inputStyles}
                placeholder='Email'
                {...register("email",
                  {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

                  })}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              <textarea className={inputStyles}
                rows={4}
                cols={50}
                placeholder='Message'
                {...register("message",
                  {
                    required: true,
                    maxLength: 2000,
                  })}
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type === "required" && "This field is required"}
                  {errors.message.type === "pattern" && "Max length is 2000 char"}
                </p>
              )}
              <button type="submit" className='px-20 py-3 mt-5 transition duration-500 rounded-lg bg-secondary-500 hover:text-white'>SUBMIT</button>
            </form>
          </motion.div>
          <motion.div className='relative mt-16 basis-2/5 md:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
              <img src={ContactUsPageGraphic} alt="Contact Us Page graphic" className='w-full'  />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs