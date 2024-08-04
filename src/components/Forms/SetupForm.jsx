import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../UI/Input';
function SetupForm() {
    const [formStep,setFormStep] = useState(0);
    const [tagValue,setTagValue] = useState("");
    const [tags,setTags] = useState([]);
    const {register, handleSubmit,formState:{errors}, watch, setError} = useForm();

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
                <button
                onClick={nextStep}
                >Submit!</button>
            )
        }
    }
    function handleFormSubmit(){}

    function addTag(event){
        if(event.keyCode===13 && tagValue){
            event.preventDefault();
            setTags(prev=>{
                return [...prev,{id:crypto.randomUUID(), value:tagValue}]
            });
            setTagValue('');
        }
    }
    function handleDeleteTag(id){
        setTags(prev=>prev.filter((item)=>item.id != id))
    }
  return (
    <div className='w-[400px]'>
        <form className='w-full' onSubmit={handleSubmit(handleFormSubmit)}>
            {formStep <=5 && (<p>{formStep >0 &&<span onClick={()=>{setFormStep(prev=>prev-1)}}>{`<`}</span>}Step {formStep+1} of 5</p>)}
            {
            formStep == 0 && (
                <section className=' p-3 bg-gray-400'>
                    <h1>Basic Information</h1>
                    <Input label="Monthly Income" type="number" 
                        {...register("monthlyIncome",{
                            required:"Please enter your monthly income",
                        })}                    
                    ></Input>
                    <label for="incomeSrc">Income Source</label>
                    <select id='incomeSrc' {...register("incomeSource",{
                        required:"Please select income source"
                    })}>
                        <option value="select">Select</option>
                        <option value="Slaried Income">Slaried Income</option>
                        <option value="Gig work">Gig work</option>
                        <option value="Other">Other</option>
                    </select>
                </section>
                )
            } 
            {
            formStep == 1 && (
                <section className=' p-3 bg-gray-400'>
                    <h1>Detailed Income Information</h1>
                    <Input label="Salaried income amount" type="number" 
                        {...register("salaryAmount",{
                            required:"Please enter your salaried income amount.",
                        })}                    
                    ></Input>
                    <label for="payday">Pay day of the month</label>
                    <select id='payday' {...register("incomeSource",{
                        required:"Please select a day."
                    })}>
                        <option value="select">Select</option>
                        {Array.from({length:31},(_,i)=>(
                            <option key={i} value={i+1}>{i+1}</option>
                        ))}
                    </select>
                </section>
                )
            } 
            {
            formStep == 2 && (
                <section className=' p-3 bg-gray-400'>
                    <h1>Unavoidable Expences</h1>
                    <div className='flex flex-wrap w-full bg-white p-3 gap-1'>
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
                        className='ml-2 w-[140px]'
                        value={tagValue}
                        onChange={(e)=>{setTagValue(e.target.value)}}
                        onKeyDown={addTag}
                        />
                    </div>
                    <Input
                    label="Approximate expence amount"
                    type="number"
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
                <section className=' p-3 bg-gray-400'>
                    <h1>Monthly Tracking Preferences</h1>
                    <label for="monthStart">Pay day of the month</label>
                    <select id='monthStart' {...register("monthStartDay",{
                        required:"Please select a day."
                    })}>
                        <option value="select">Select</option>
                        {Array.from({length:31},(_,i)=>(
                            <option key={i} value={i+1}>{i+1}</option>
                        ))}
                    </select>
                    <Input
                    label="Monthly Budget"
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
                <section className=' p-3 bg-gray-400'>
                    <h1>Review And Submit</h1>
                </section>
                )
            }
            {
            formStep==5 && (
                <section>
                    <h1>Congrats🤗</h1>
                </section>
                )
            }
            {renderButton()}
        </form>
    </div>
  )
}

export default SetupForm