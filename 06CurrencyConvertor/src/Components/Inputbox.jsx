import React, { useId } from 'react'



function InputBox({
  label,
  amount,
  Onamountchange,
  oncurrencyChange,
  currencyOptions= [],
  selectcurrency= "usd",
  amountDisable= false,
  currencyDisable = false,
  className="",
}) {

const  amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}` }>
      <div className="w-1/2">
        <label  htmlFor ={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input

          className="outline-none w-full bg-transparent py-1.5"
          id={amountInputId}
          type="number"
          disabled={amountDisable}
          value={amount}

          onChange={(e)=> Onamountchange && Onamountchange(Number(e.target.value))}
          
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectcurrency}
          onChange={(e)=>oncurrencyChange && oncurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >

         {currencyOptions.map((Currency)=>(
//taking key as react mugup the code so specifying key is good  
           <option key={Currency} value= {Currency}>
           {Currency}
         </option>

         ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
