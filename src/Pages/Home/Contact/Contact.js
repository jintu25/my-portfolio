import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { FaBeer, FaGlobe, FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_afal97v', 'template_xxdwg7c', form.current, '6P4ArNdYfg5DU5sDS')
        .then((result) => {
            console.log(result.text);
            alert('email successfully')
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <div id='contact' className='grid grid-cols-1 lg:grid-cols-2 max-w-screen-lg m-auto my-16'>

            <div className=' bg-gray-600 py-16 px-10 lg:rounded-l-3xl lg:rounded-none rounded-lg lg:mx-0 mx-3 lg:mb-0 mb-4'>
                <h3 className="text-3xl font-semibold text-white mb-10">Write Us</h3>

                <form ref={form} onSubmit={sendEmail}>
                <div className="form-group mt-4">
                    <input className='border-none w-full form-control' type="text"name="user_name" id="name" placeholder="Name" required/>
                </div>
                <div className="form-group mb-4">
                    <input className='border-none w-full form-control' type="email"name="user_email" id="email" placeholder="E-mail" required/>
                </div>
                {/* <div className="form-group">
                    <input className='border-none w-full form-control' type="text" name="subject" id="name" placeholder="Subject" />
                </div> */}
                <div className="form-group">
                    <textarea name="message" className='w-full message' id="" cols="30" rows="10" placeholder='Message'></textarea>
                </div>
                <div className="form-group mt-4">
                    <input className='btn btn-warning text-white mt-6' type="submit" value="Send Message"/>
                </div>
                </form>

            </div>



            <div className='  contact-info py-16 px-10 lg:rounded-r-3xl lg:rounded-none rounded-lg lg:mx-0 mx-3 lg:mb-0 mb-4'>
                <h3 className="text-3xl font-semibold text-white mb-10">Contact information</h3>
                <h4 className="text-lg mb-8 text-slate-500">We're open for any suggestion or just to have a chat</h4>

                <div className='flex mb-6 items-center'>
                    <span className='contact-icon'><FaLocationArrow></FaLocationArrow></span>
                    <div className="text pl-3">
                        <p className='text- text-zinc-400'><span className='text-white'>Address:</span> Habiganj, Sylhet, Bangladesh</p>
                    </div>
                </div>

                <div className='flex mb-6 items-center'>
                    <span className='contact-icon'><FaPhone></FaPhone></span>
                    <div className="text pl-3">
                    <p className='text-zinc-400'><span className='text-white'>Phone:</span> <a href="tel://+8801757146195">+8801757146195</a></p>
                    </div>
                </div>

                <div className='flex mb-6 items-center'>
                    <span className='contact-icon'><FaMailBulk></FaMailBulk></span>
                    <div className="text pl-3">
                    <p className='text-zinc-400'><span className='text-white'>Email:</span> <a href="mailto:jintupaul45@gmail.com"><span className="__cf_email__" data-cfemail="533a3d353c132a3c2621203a27367d303c3e">jintupaul45@gmail.com</span></a></p>
                    </div>
                </div>

                <div className='flex mb-6 items-center'>
                    <span className='contact-icon'><FaGlobe></FaGlobe></span>
                    <div className="text pl-3">
                    <p className='text-zinc-400'><span className='text-white'>Website: </span> <a href="#">jintupaul45.com</a></p>
                    </div>
                </div>
                <span className='play_animation '></span>
                <span className='black-add '></span>
                <span className='orange-add '></span>
            </div>
        </div>
    );
};

export default Contact;