"use client"
import { getUser } from '@/Redux/Auth/Action'
import Dashbord from '@/components/Driver/Dashbord'
import Layout from '@/components/Driver/Layout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const { auth, driver,ride } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [jwt, setJwt] = React.useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setJwt(localStorage.getItem("jwt"));
    }
  }, []);

  console.log("page auth ", auth);
  
  useEffect(() => {
    dispatch(getUser(jwt));
  }, [jwt]);

  return (
    <div>
      <Layout Children={<Dashbord/>} ></Layout>
    </div>
  )
}

export default page