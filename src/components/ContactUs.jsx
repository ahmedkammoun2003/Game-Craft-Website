import React , { useState } from 'react';
import ENSIMapsImage from "../assets/ENSI-maps.png";


function ContactUs() {
  
  const [firstname , setfirstname]= useState('') ;
  const [lastName, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [tel, settel] = useState('');
  const [message ,setmessage] =useState('');



 
  const handleSubmit = (event) =>{
    event.preventDefault();

    console.log('Prénom:', firstname);
    console.log('Nom:', lastName);
    console.log('Adresse e-mail:', email);
    console.log('Tel:', tel);
    console.log('message :', message) ;
    

  };

  
  return (
    <div class="bg-gradient-to-br from-purple-950 via-violet-500 to-cyan-500   bg-dvh h-full">

      <div className='text-white text-2xl font-stalinist mx-4 pt-2'>ContactUs</div>

          <div className='border-[1px] border-rgb(246, 161, 53) '>
      <div className="border-[1px] border-rgb(246, 161, 53) my-[15px] w-[70rem] mx-auto rounded-[8px] flex shadow-lg shadow-white hover:shadow-violet-400 ">
        <form onSubmit={handleSubmit} className="mt-5 ml-[20px] mx-[10rem] border-[1px] border-rgb(246, 161, 53) w-[32.8rem] h-[40rem] rounded-lg ">
          <div className='border-[1px] border-rgb(246, 161, 53) h-[2.8rem] w-[32.8rem] flex justify-between'>
            <input type="text" name='firstname' id='firstname' onChange={(e)=> setfirstname(e.target.value)} className='rounded-[5px] w-64 h-[2.8rem] outline-none border-0 pl-[8px] text-[0.9rem] ' placeholder='Last Name' required/>
            <input type="text" name='lastname' id='lastname' onChange={(e)=> setlastname(e.target.value)} className='rounded-[5px] w-64 h-[2.8rem] outline-none border-0 pl-[8px] text-[0.9rem]' placeholder='First Name' required/>
          </div>
          <input type="email" id='email' onChange={(e)=> setemail(e.target.value)} className="rounded-[5px] w-full h-[2.8rem] mt-[0.9rem] outline-none border-0 pl-[8px] text-[0.9rem]" placeholder='Email' required/>
          <input type="tel" id='tel' onChange={(e)=> settel(e.target.value)} className="rounded-[5px] w-full h-[2.8rem] mt-[0.9rem] outline-none border-0 pl-[8px] text-[0.9rem]" placeholder='Tel' required /> 
          <textarea name="message" id="message" onChange={(e)=>setmessage(e.target.value)} cols="30" rows="10" className='mt-[0.9rem] rounded-[5px] w-[32.8rem] outline-none  pl-[8px] pt-[6px] h-80 resize-none text-[0.9rem] ' placeholder='Message' required></textarea>
          <button type='submit' className="rounded-[5px] w-full h-[2.8rem] mt-[0.9rem] border bg-gradient-to-l from-purple-700 to-indigo-600 text-white text-lg"> Send it</button>
        </form>

        <div className=" w-[70rem]  mt-5 mr-5 mb-10 rounded-[5px]  " style={{ marginLeft: '-140px' }}>
          <img src={ENSIMapsImage} alt="Ensi maps" className="w-[100%] h-[100%]  rounded-[5px]" />
        </div>
      </div>
    </div>

    </div>
    
  )
}

export default ContactUs

