import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


import TopBar from '../Common/TopBar'
import axioss from '../utils/ApiService';
import Cards from '../Reusable/contentCards';
function Home() {
    let [result,setResult]=useState([]);
    let ApiData=async()=>{
        try {
            let result=await axioss.get('/Book')
            if(result.status===200){
              setResult(result.data)
            }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        ApiData()
    },[])
  return <>
  <TopBar/>
  <Container className='mt-5'>
      <Row md={4}>  
      {
        result.map((e,i)=>{
            return <Cards getData={ApiData} value={e} key={e.id}/>
        })
      }

      
      </Row>
    </Container>
  </> 
  
}

export default Home