/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useTibcCoreClientV1() {
  const client = useClient();
  const QueryClientState = (chain_name: string,  options: any) => {
    const key = { type: 'QueryClientState',  chain_name };    
    return useQuery([key], () => {
      const { chain_name } = key
      return  client.TibcCoreClientV1.query.queryClientState(chain_name).then( res => res.data );
    }, options);
  }
  
  const QueryClientStates = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryClientStates', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.TibcCoreClientV1.query.queryClientStates(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryConsensusState = (chain_name: string, revision_number: string, revision_height: string, query: any, options: any) => {
    const key = { type: 'QueryConsensusState',  chain_name,  revision_number,  revision_height, query };    
    return useQuery([key], () => {
      const { chain_name,  revision_number,  revision_height,query } = key
      return  client.TibcCoreClientV1.query.queryConsensusState(chain_name, revision_number, revision_height, query ?? undefined).then( res => res.data );
    }, options);
  }
  
  const QueryConsensusStates = (chain_name: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryConsensusStates',  chain_name, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { chain_name,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.TibcCoreClientV1.query.queryConsensusStates(chain_name, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryRelayers = (chain_name: string,  options: any) => {
    const key = { type: 'QueryRelayers',  chain_name };    
    return useQuery([key], () => {
      const { chain_name } = key
      return  client.TibcCoreClientV1.query.queryRelayers(chain_name).then( res => res.data );
    }, options);
  }
  
  return {QueryClientState,QueryClientStates,QueryConsensusState,QueryConsensusStates,QueryRelayers,
  }
}