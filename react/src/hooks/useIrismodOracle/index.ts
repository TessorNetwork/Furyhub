/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useIrismodOracle() {
  const client = useClient();
  const QueryFeed = (feed_name: string,  options: any) => {
    const key = { type: 'QueryFeed',  feed_name };    
    return useQuery([key], () => {
      const { feed_name } = key
      return  client.IrismodOracle.query.queryFeed(feed_name).then( res => res.data );
    }, options);
  }
  
  const QueryFeeds = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryFeeds', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.IrismodOracle.query.queryFeeds(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryFeedValue = (feed_name: string,  options: any) => {
    const key = { type: 'QueryFeedValue',  feed_name };    
    return useQuery([key], () => {
      const { feed_name } = key
      return  client.IrismodOracle.query.queryFeedValue(feed_name).then( res => res.data );
    }, options);
  }
  
  return {QueryFeed,QueryFeeds,QueryFeedValue,
  }
}