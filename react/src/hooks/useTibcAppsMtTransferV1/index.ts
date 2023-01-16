/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useTibcAppsMtTransferV1() {
  const client = useClient();
  const QueryClassTrace = (hash: string,  options: any) => {
    const key = { type: 'QueryClassTrace',  hash };    
    return useQuery([key], () => {
      const { hash } = key
      return  client.TibcAppsMtTransferV1.query.queryClassTrace(hash).then( res => res.data );
    }, options);
  }
  
  const QueryClassTraces = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryClassTraces', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.TibcAppsMtTransferV1.query.queryClassTraces(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QueryClassTrace,QueryClassTraces,
  }
}