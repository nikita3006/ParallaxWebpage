import { ReactNode } from 'react';
import { useQuery, QueryFunction, QueryKey } from '@tanstack/react-query';

interface QueryWrapperProps<TData> {
    queryKeyName: QueryKey;
    queryFnName: QueryFunction<TData>;
    children: (data: TData) => ReactNode;
}

const UseQueryWrapper = <TData,>({ queryKeyName, queryFnName, children }: QueryWrapperProps<TData>) => {
    const {
        isLoading,
        isSuccess,
        data,
        isError,
        error,
    } = useQuery<TData>({ queryKey: [queryKeyName], queryFn: queryFnName, retry:5});

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return (
            <div>
                Error: {error?.message}
                <div>Error while fetching... Will Retry</div>;
            </div>
        );
    }

    if (isSuccess) {
        return <>{children(data!)}</>;
    }

    return null;
};

export default UseQueryWrapper;
