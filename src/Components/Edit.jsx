import React, { useEffect, useState } from 'react'

import TopBar from '../Common/TopBar'
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import axioss from '../utils/ApiService';
import * as Yup from 'yup';
import { useNavigate,useParams } from 'react-router-dom';
function Edit() {
  let [result,setResult]=useState({
    bookTitle:"",
    author:{
      authorName:"",
      authorBornYear:"",
      shortBio:"",
    },
    ISBN:"",
    publication:"",


  })
  let {id}=useParams();

  let navigate=useNavigate();
  const formik = useFormik({
    initialValues: result,
    validationSchema:Yup.object({
      bookTitle:Yup.string().required('Name is required').max(20,'Name can not exceed 20 characters').min(3,'Name can not be shorter than 3 leters'),
      author:Yup.object().shape({
        authorName:Yup.string().required('Author Name is required').max(50,'Author Name can not exceed 10 characters').min(1,'Author Name can not be shorter than 1 leters'),
        authorBornYear:Yup.string().required('Born year is required').max(4,'Born year can not exceed 4 characters').min(1,'Born year can not be shorter than 1 leters'),
        shortBio:Yup.string().required('ShortBio is required').max(30,'ShortBio can not exceed 30 characters').min(1,'Short Bio can not be shorter than 1 leters'),
      }),
      ISBN:Yup.string().required('ISBN is required').max(5,'ISBN can not exceed 5 characters').min(1,'ISBN can not be shorter than 1 leters'),
      publication:Yup.string().required('Publication is required').max(5,'Publication can not exceed 5 characters').min(1,'Publication can not be shorter than 1 leters'),
      
    }),
    enableReinitialize:true,
    onSubmit: async(values) => {
      try {
        let result=await axioss.put(`/Book/${id}`,values)
        if(result.status===200){
          console.log("Sucess");
          navigate("/")
        }
    } catch (error) {
        console.log(error);
    } 
    },
  });
  let ApiData=async()=>{
    try {
        let result=await axioss.get(`/Book/${id}`)
        if(result.status===200){
          setResult({
            bookTitle:result.data.bookTitle,
            author:{
              authorName:result.data.authorName,
              authorBornYear:result.data.authorBornYear,
              shortBio:result.data.shortBio,
            },
            ISBN:result.data.ISBN,
            publication:result.data.publication,
      
      
          })
        }
    } catch (error) {
        
    }
}
  useEffect(()=>{
    ApiData()
  },[])
  return <>
    <TopBar/>
    <div className='container'>
    <div className='text-center mb-3'>Add user</div>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3 " >
        <Form.Label>Book Title</Form.Label>
        <Form.Control name="bookTitle" id="bookTitle"  onChange={formik.handleChange}
         value={formik.values.bookTitle} type="text"  placeholder="Enter BookTitle"   onBlur={formik.handleBlur}/>
         {formik.touched.bookTitle && formik.errors.bookTitle ? (<div style={{color:"red"}}>{formik.errors.bookTitle}</div>) : null}

      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Author</Form.Label>
        <div className='d-flex'>
          <div>
          <Form.Group className="mb-3 " >
        <Form.Label>Author Name</Form.Label>
        <Form.Control name="author.authorName" id="authorName"  onChange={formik.handleChange}
         value={formik.values.author.authorName}    onBlur={formik.handleBlur} type="text" placeholder="Enter Author Name" />
          {formik.touched.author?.authorName && formik.errors.author?.authorName ? (
        <div style={{ color: "red" }}>{formik.errors.author.authorName}</div>
      ) : null}
      </Form.Group>
          </div>
          <div>
          <Form.Group className="mb-3 mx-3" >
        <Form.Label>Author Born Year</Form.Label>
        <Form.Control name="author.authorBornYear"  onBlur={formik.handleBlur} id="author.authorBornYear"  onChange={formik.handleChange}
         value={formik.values.authorBornYear} type="text" placeholder="Enter Author Born Year " />
         {formik.touched.author?.authorBornYear && formik.errors.author?.authorBornYear ? (
        <div style={{ color: "red" }}>{formik.errors.author.authorBornYear}</div>
      ) : null}


      </Form.Group>
          </div>
          <div>
          <Form.Group className="mb-3 mx-3" >
        <Form.Label> Short Biography</Form.Label>
        <Form.Control name="author.shortBio"  onBlur={formik.handleBlur} id="author.shortBio"  onChange={formik.handleChange}
         value={formik.values.author.shortBio}  type="text" placeholder="Enter Short Biography " />
         {formik.touched.author?.shortBio && formik.errors.author?.shortBio ? (
        <div style={{ color: "red" }}>{formik.errors.author.shortBio}</div>
      ) : null}
      </Form.Group>
          </div>
        </div>
        
      
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>ISBN no</Form.Label>
        <Form.Control name="ISBN" id="ISBN"   onBlur={formik.handleBlur} onChange={formik.handleChange}
         value={formik.values.ISBN} type="text" placeholder="Enter ISBN " />
         {formik.touched.ISBN && formik.errors.ISBN ? (<div style={{color:"red"}}>{formik.errors.ISBN}</div>) : null}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Publication Date</Form.Label>
        <Form.Control name="publication"  onBlur={formik.handleBlur}  onChange={formik.handleChange}
         value={formik.values.publication} id="publication" type="text" placeholder="Enter Publication Date" />
         {formik.touched.publication && formik.errors.publication ? (<div style={{color:"red"}}>{formik.errors.publication}</div>) : null}
      </Form.Group>
      <button className='btn btn-primary ' type='submit'>Submit</button>
    </Form></div>
  </>
}

export default Edit