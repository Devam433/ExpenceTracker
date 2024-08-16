import React from 'react'

function RenderButton({onClick,disabled,formStep}){
    if( formStep>=0 && formStep<4 ){
        return (
            <button
            onClick={onClick}
            disabled={!disabled(formStep)}
            className={`${!disabled(formStep) ? `text-gray-400` :`text-black` }`}
            >Next</button>
        )
    }
    else if(formStep==4){
        return (
            <button type='submit'
            onClick={onClick}
            >Submit!</button>
        )
    }
}

export default RenderButton