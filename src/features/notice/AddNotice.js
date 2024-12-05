import { Button, Input, Typography } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'
import { useAddNoticeMutation } from '../../Api/noticeApi'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

const AddNotice = () => {
  const nav = useNavigate();
  const {user} = useSelector((state)=>state.userSlice);
  console.log(user);
  const [addNotice,] = useAddNoticeMutation();
  const {handleChange,handleSubmit,values,setFieldValue,} = useFormik({
initialValues:{
notice_title:'',
notice_detail:'',
notice_uploadedBy:'',
notice_file:'',
notice_fileReview:''

},
onSubmit:async (val,{resetForm})=>{
const formData = new FormData();
formData.append('notice_title', val.notice_title);
formData.append('notice_file', val.notice_file);
formData.append('notice_detail', val.notice_detail);
formData.append('notice_uploadedBy', val.notice_uploadedBy);

try {
  await addNotice({
    body:formData,
  }).unwrap();

  toast.success('successfully added')
  nav('/notice')
} catch (err) {
  toast.error(`${err.data?.message}`);
}


}
  })
  return (
    <div className='max-w-[400px] mx-[400px] mt-7'>
      <h1 className='font-bold text-3xl my-3 underline italic'>Add Notice</h1>
      <form onSubmit={handleSubmit} className='space-y-6'>

      <div className="mb-1 flex flex-col gap-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Notice Title
          </Typography>
          <Input
            placeholder="notice_title"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            name='notice_title'
            onChange={handleChange}
            value={values.notice_title}
          />
          </div>

          <div className="mb-1 flex flex-col gap-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Notice Detail
          </Typography>
          <Input
            placeholder="notice_detail"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            name='notice_detail'
            onChange={handleChange}
            value={values.notice_detail}
          />
          </div>
          <div className="mb-1 flex flex-col gap-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Uploaded_By
          </Typography>
          <Input
            placeholder="notice_uploadedBy"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            name='notice_uploadedBy'
            onChange={handleChange}
            value={values.notice_uploadedBy}
          />
          </div>
      
      <div>
        <Input
        onChange={(e)=>{
          const file = e.target.files[0];
          setFieldValue('notice_fileReview',URL.createObjectURL(file));
          setFieldValue('notice_file',file)
        }}
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        name='notice_file'
        type='file'
        
        
        />
        {values.notice_fileReview && <img src={values.notice_fileReview} alt=''/>
        }
      </div>
      <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default AddNotice
