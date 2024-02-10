import { useEffect, useRef } from "react";
import { useSearchParams } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function TextInputPage() {
  console.log('rendering');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();


    const inputEl = useRef(null);
    const modalEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };

    

    const navigateTo = () => {
      const productId = Math.floor(Math.random() * 10);
      navigate("/text-input?product="+productId);
    }

    useEffect(() => {
      console.log(searchParams.get('product'));
    }, [searchParams.get('product')]);
    return (
      <>
        <input ref={inputEl} type="text" />
        <div className="modal" ref={modalEl}>
            this is modal
        </div>
        <button onClick={onButtonClick}>Focus the input</button>
        <button onClick={navigateTo}>navigate product</button>
      </>
    );
}

export default TextInputPage
