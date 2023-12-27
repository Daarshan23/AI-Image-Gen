import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview} from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';
const CreatePost = () => {
  const navigate = useNavigate();
  const [form , setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  const [generatingImg , setGeneratingImg] = useState(false);
  const [loading , setLoading] = useState(false);
  const generateImg = () =>{

  }
  const handleSubmit = () => {

  };
  const handleChange = (e) =>{
    setForm({...form,[e.target.name]:e.target.value})
  };
  const handelSurpriseMe = () =>{
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({...form,prompt: randomPrompt});
  }
  return (
    <section className='max-w-7xl mx-auto'> 
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Create imaginative and visually stunning
          images through by AI-Image-Gen and share them with the Community
        </p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            labelName='Your Name'
            type='text'
            name='name'
            placeholder='Thala'
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName='Prompt'
            type='text'
            name='Prompt'
            placeholder='bowl of soup that looks like a monster, knitted out of wool'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handelSurpriseMe={handelSurpriseMe}
          />
          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo ? (
              <img
                src={form.photo}
                alt='user-photo'
                className='w-full h-full object-contain'
                />
            ):(
              <img
                src={preview}
                alt='preview'
                className='w-9/12 h-9/12 object-contain opacity-40'
                />
            )} 
            {
              generatingImg && (
                <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                  <Loader/>
                </div>
              )
            }
          </div>
        </div>
        <div className='mt-5 flex gap-5'>
            <button
            type='button'
            onClick={generateImg}
            className='bg-[#4649ff] hover:opacity-80 text-white font-bold py-2 px-4 rounded'
            >
              {generatingImg ? 'Generating...' : 'Generate'}
            </button>
        </div>
        <div className='mt-10'>
            <p className='mt-2 text-[#666e75] text-[14px]'>
              Once you have created the image you want, you can share it with others in the Community
            </p>
            <button type='submit' className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
              {loading ? 'Sharing...' : 'Share with the community'}
            </button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost