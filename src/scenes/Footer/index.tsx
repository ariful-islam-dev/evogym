
import logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className='py-16 bg-primary-100'>
        <div className="w-5/6 gap-16 mx-auto justify md:flex">
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={logo} alt="Logo" />
                <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laboriosam et harum alias voluptatibus quisquam quaerat fugiat illum laborum, animi labore soluta recusandae. Rerum autem, unde doloremque illo fugiat exercitationem voluptatem eaque quidem enim qui molestiae dicta perspiciatis aperiam tempora quas voluptas officiis sequi sunt. Natus quia enim quo aperiam.</p>
                <p>&copy; All rights Reserved by Ariful Islam</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className="my-5">Massa Orci senectus</p>
                <p className="my-5">Et gravida id et etiam</p>
                <p>Ullamcoper ivamus</p>
            </div> 
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact US</h4>
                <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                <p>(333)425-6825</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer