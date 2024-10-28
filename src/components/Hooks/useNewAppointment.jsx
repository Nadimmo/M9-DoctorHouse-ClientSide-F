import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useNewAppointment = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const {data: appointments = []} = useQuery({
        queryKey: [user?.email,"appointments"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/Newappointments?email=${user.email}`)
            return res.data
        }
    })
    return {appointments}
};

export default useNewAppointment;