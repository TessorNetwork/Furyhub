/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useIrismodMt() {
  const client = useClient();
  const QuerySupply = (query: any, options: any) => {
    const key = { type: 'QuerySupply', query };    
    return useQuery([key], () => {
      const {query } = key
      return  client.IrismodMt.query.querySupply(query ?? undefined).then( res => res.data );
    }, options);
  }
  
  const QueryDenoms = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryDenoms', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.IrismodMt.query.queryDenoms(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryDenom = (denom_id: string,  options: any) => {
    const key = { type: 'QueryDenom',  denom_id };    
    return useQuery([key], () => {
      const { denom_id } = key
      return  client.IrismodMt.query.queryDenom(denom_id).then( res => res.data );
    }, options);
  }
  
  const QueryMTSupply = (denom_id: string, mt_id: string,  options: any) => {
    const key = { type: 'QueryMTSupply',  denom_id,  mt_id };    
    return useQuery([key], () => {
      const { denom_id,  mt_id } = key
      return  client.IrismodMt.query.queryMTSupply(denom_id, mt_id).then( res => res.data );
    }, options);
  }
  
  const QueryMTs = (denom_id: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryMTs',  denom_id, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { denom_id,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.IrismodMt.query.queryMTs(denom_id, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryMT = (denom_id: string, mt_id: string,  options: any) => {
    const key = { type: 'QueryMT',  denom_id,  mt_id };    
    return useQuery([key], () => {
      const { denom_id,  mt_id } = key
      return  client.IrismodMt.query.queryMT(denom_id, mt_id).then( res => res.data );
    }, options);
  }
  
  const QueryBalances = (owner: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryBalances',  owner, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { owner,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.IrismodMt.query.queryBalances(owner, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QuerySupply,QueryDenoms,QueryDenom,QueryMTSupply,QueryMTs,QueryMT,QueryBalances,
  }
}