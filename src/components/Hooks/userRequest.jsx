import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const userRequest = () => {
    const axiosPublic = useAxiosPublic()
    const {data: requests = []} = useQuery({
        queryKey: ['requests'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/userRequest')
            return res.data
        }
    })
    return {requests}
};

export default userRequest;