import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useAppointment = () => {
    const axiosPublic = useAxiosPublic();

    const { 
        data: appointments = [], 
        isPending: isLoading, 
        refetch 
    } = useQuery({
        queryKey: ['appointments'],
        queryFn: async () => {
            const response = await axiosPublic.get('/appointment');
            console.log('API Response:', response); // Add this line
            return response.data;
        },
    });

    return { appointments, isLoading, refetch };
};

export default useAppointment;