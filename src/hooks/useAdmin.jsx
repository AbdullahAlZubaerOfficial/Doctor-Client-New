import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxios';
// import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email], // More standard key order
        enabled: !loading && !!user?.email, // Safer enable condition
        queryFn: async () => {
            if (!user?.email) return false;
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            return res.data?.admin ?? false; // Ensure boolean
        },
        retry: false, // Optional: Disable retries on failure
    });

    return [isAdmin, isAdminLoading]; // Or return { isAdmin, isAdminLoading } for clarity
};

export default useAdmin;