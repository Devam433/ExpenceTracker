import React, { useDebugValue, useEffect, useRef, useState } from 'react'
import { useController, useForm } from 'react-hook-form'
import Input from '../UI/Input';
function SetupForm({className}) {
    const [formStep,setFormStep] = useState(0);
    const [tagValue,setTagValue] = useState("");
    // const [tags,setTags] = useState([]);
    const {register, handleSubmit,formState:{errors}, control, watch, setError} = useForm();
    const dialogRef = useRef();

    const { field: { value: tags, onChange } } = useController({
        name: "tags",
        control,
        defaultValue: []
    }); 
    function nextStep(){
        setFormStep(prev=>prev+1);
    }
    function renderButton(){
        if( formStep>=0 && formStep<4 ){
            return (
                <button
                onClick={nextStep}
                >Next</button>
            )
        }
        else if(formStep==4){
            return (
                <button type='submit'
                onClick={nextStep}
                >Submit!</button>
            )
        }
    }
    function handleFormSubmit(data){
        console.log(data)
        console.log(dialogRef.current)
        // dialogRef.current?.close();
    }

    function addTag(event){
        if(event.keyCode===13 && tagValue){
            event.preventDefault();
            // setTags(prev=>{
            //     return [...prev,{id:crypto.randomUUID(), value:tagValue}]
            // });
            onChange([...tags, { id: crypto.randomUUID(), value: tagValue }]);
            setTagValue('');
        }
    }
    function handleDeleteTag(id){
        // setTags(prev=>prev.filter((item)=>item.id != id))
        onChange(tags.filter(tag => tag.id !== id));
    }

    useEffect(()=>{
        
        document.body.style.overflow = 'hidden';
        
        return ()=>document.body.style.overflow = 'unset';
    },[])
  return (
    <dialog ref={dialogRef} className={`z-0 bg-black bg-opacity-85 w-full h-full ${className} flex justify-center items-center `}>
        <form className={` px-3 bg-opacity-100 bg-white w-[600px] border rounded-md z-50`} onSubmit={handleSubmit(handleFormSubmit)}>
            {formStep <=4 && (<p className='mb-3 flex gap-1 font-medium'>{formStep >0 &&<span className='' onClick={()=>{setFormStep(prev=>prev-1)}}>{`<`}</span>}Step {formStep+1} of 5</p>)}
            {
            formStep == 0 && (
                <section className=' py-5 bg-gray-400 px-4'>
                    <h1 className=' text-xl font-semibold pb-3'>Basic Information</h1>
                    <Input label="Monthly Income" type="number" className="w-full" 
                        {...register("monthlyIncome",{
                            required:"Please enter your monthly income",
                        })}                    
                    ></Input>
                    <div className='flex flex-col mt-5'>
                    <label for="incomeSrc" className='text-lg'>Primary Income Source</label>
                    <select className='h-[31px]' id='incomeSrc' {...register("incomeSource",{
                        required:"Please select income source"
                    })}>
                        <option value="select">Select</option>
                        <option value="Slaried Income">Slaried Income</option>
                        <option value="Gig work">Gig work</option>
                        <option value="Other">Other</option>
                    </select>
                    </div>
                </section>
                )
            } 
            {
            formStep == 1 && (
                <section className=' py-5 bg-gray-400 px-4'>
                    <h1 className=' text-xl font-semibold pb-3'>Detailed Income Information</h1>
                    <Input label="Salaried income amount" type="number" className="w-full"
                        {...register("salaryAmount",{
                            required:"Please enter your salaried income amount.",
                        })}                    
                    ></Input>
                    <div  className='flex flex-col mt-5'>
                    <label for="payday" className='text-lg'>Pay day of the month</label>
                    <select className='h-[31px]' id='payday' {...register("payday",{
                        required:"Please select a day."
                    })}>
                        <option value="select">Select</option>
                        {Array.from({length:31},(_,i)=>(
                            <option key={i} value={i+1}>{i+1}</option>
                        ))}
                    </select>
                    </div>
                </section>
                )
            } 
            {
            formStep == 2 && (
                <section className=' py-5 pb-7 bg-gray-400 px-4'>
                    <h1 className=' text-xl font-semibold pb-3'>Expence Categorization</h1>
                    <label htmlFor="tags" className='text-lg'>Unavoidable Expences</label>
                    <div className='flex flex-wrap w-full bg-white py-[6px] px-2 gap-1 mb-3' id='tags'>
                    { tags.map((tag, index) => (
                            <div className="p-1 rounded-md bg-slate-100 text-lg" key={index}>
                                <span className="">{tag.value}</span>
                                <span className="ml-1 font-black hover:cursor-pointer"
                                onClick={()=>{handleDeleteTag(tag.id)}}
                                >&times;</span>
                            </div>
                        )) 
                    }
                        <input type="text"
                        placeholder='eg: groceries, rent'
                        className='ml-1 w-[140px]'
                        value={tagValue}
                        onChange={(e)=>{setTagValue(e.target.value)}}
                        onKeyDown={addTag}
                        // {...register("tags",{
                        //     required:true
                        // })}
                        />
                    </div>
                    <Input
                    label="Approximate expence amount"
                    type="number" className="w-full"
                    {...register("unavoidableExpenceAmount",{
                        required:"Please enter an estimated amount."
                    })}
                    >
                    </Input>
                </section>
                )
            } 
            {
            formStep == 3 && (
                <section className=' py-5 pb-7 bg-gray-400 px-4'>
                    <h1 className=' text-xl font-semibold pb-3'>Monthly Tracking Preferences</h1>
                    <div  className='flex flex-col mb-3'>
                    <label for="monthStart" className='text-lg'>Month start day</label>
                    <select className='h-[31px]' id='monthStart' {...register("monthStartDay",{
                        required:"Please select a day."
                    })}>
                        <option value="select">Select</option>
                        {Array.from({length:31},(_,i)=>(
                            <option key={i} value={i+1}>{i+1}</option>
                        ))}
                    </select>
                    </div>
                    <Input
                    label="Monthly Budget" className="w-full"
                    {...register("monthlyBudget",{
                        required:"please enter monthly budget."
                    })}
                    >
                    </Input>
                </section>
                )
            }
            {
            formStep == 4 && (
                <section className=' py-5 bg-gray-400 px-4'>
                    <h1 className=' text-xl font-semibold pb-3'>Review And Submit</h1>
                </section>
                )
            }
            {
            formStep==5 && (
                <section className='py-5 bg-gray-400 px-4'>
                    <h1 className=' text-xl font-semibold pb-3'>Congrats🤗, You are all set to go!</h1>
                </section>
                )
            }
            {renderButton()}
        </form>
    </dialog>
  )
}

export default SetupForm