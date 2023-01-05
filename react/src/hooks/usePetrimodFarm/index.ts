/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function usePetrimodFarm() {
  const client = useClient();
  const QueryFarmPools = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryFarmPools', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.PetrimodFarm.query.queryFarmPools(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryFarmPool = (id: string,  options: any) => {
    const key = { type: 'QueryFarmPool',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.PetrimodFarm.query.queryFarmPool(id).then( res => res.data );
    }, options);
  }
  
  const QueryFarmer = (farmer: string, query: any, options: any) => {
    const key = { type: 'QueryFarmer',  farmer, query };    
    return useQuery([key], () => {
      const { farmer,query } = key
      return  client.PetrimodFarm.query.queryFarmer(farmer, query ?? undefined).then( res => res.data );
    }, options);
  }
  
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.PetrimodFarm.query.queryParams().then( res => res.data );
    }, options);
  }
  
  return {QueryFarmPools,QueryFarmPool,QueryFarmer,QueryParams,
  }
}