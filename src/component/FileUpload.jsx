import React, { useState } from 'react'
import axios from 'axios'

const FileUpload = () => {
  const [image, setImage] = useState('')
  const [imageURL, setImageURL] = useState('');

  const handlerSelectImage = (e) => {
    
    const reader = new FileReader()
    reader.onloadend = function(event){
      console.log(reader.result)
      console.log(event)
      setImageURL(reader.result)
    }
    reader.readAsDataURL(e.target.files[0])
    setImage(e.target.files[0])
  }

  const handleOnSubmit = () => {
    const formData = new FormData()


    formData.append('image', image)

    console.log(formData)

    axios.post('http://127.0.0.1:8000/api/image', formData)
  }

  return (
    <div
    >FileUpload

    <input type='file' onInput={handlerSelectImage}/>
    <button onClick={handleOnSubmit}>Submit</button>

    <div>
      <img src={imageURL} alt="img" />
    </div>
    </div>
  )
}

export default FileUpload