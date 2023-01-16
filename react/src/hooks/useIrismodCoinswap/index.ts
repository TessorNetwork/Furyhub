/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useIrismodCoinswap() {
  const client = useClient();
  const QueryLiquidityPool = (lpt_denom: string,  options: any) => {
    const key = { type: 'QueryLiquidityPool',  lpt_denom };    
    return useQuery([key], () => {
      const { lpt_denom } = key
      return  client.IrismodCoinswap.query.queryLiquidityPool(lpt_denom).then( res => res.data );
    }, options);
  }
  
  const QueryLiquidityPools = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryLiquidityPools', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.IrismodCoinswap.query.queryLiquidityPools(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QueryLiquidityPool,QueryLiquidityPools,
  }
}