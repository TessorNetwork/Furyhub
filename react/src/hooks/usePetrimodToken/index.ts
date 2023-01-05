/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function usePetrimodToken() {
  const client = useClient();
  const QueryToken = (denom: string,  options: any) => {
    const key = { type: 'QueryToken',  denom };    
    return useQuery([key], () => {
      const { denom } = key
      return  client.PetrimodToken.query.queryToken(denom).then( res => res.data );
    }, options);
  }
  
  const QueryTokens = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryTokens', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.PetrimodToken.query.queryTokens(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryFees = (symbol: string,  options: any) => {
    const key = { type: 'QueryFees',  symbol };    
    return useQuery([key], () => {
      const { symbol } = key
      return  client.PetrimodToken.query.queryFees(symbol).then( res => res.data );
    }, options);
  }
  
  const QueryParams = ( options: any, perPage: number) => {
    const key = { type: 'QueryParams',  };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.PetrimodToken.query.queryParams().then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryTotalBurn = ( options: any) => {
    const key = { type: 'QueryTotalBurn',  };    
    return useQuery([key], () => {
      return  client.PetrimodToken.query.queryTotalBurn().then( res => res.data );
    }, options);
  }
  
  return {QueryToken,QueryTokens,QueryFees,QueryParams,QueryTotalBurn,
  }
}