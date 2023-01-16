/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useIrismodHtlc() {
  const client = useClient();
  const QueryHTLC = (id: string,  options: any) => {
    const key = { type: 'QueryHTLC',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.IrismodHtlc.query.queryHTLC(id).then( res => res.data );
    }, options);
  }
  
  const QueryAssetSupply = (denom: string,  options: any) => {
    const key = { type: 'QueryAssetSupply',  denom };    
    return useQuery([key], () => {
      const { denom } = key
      return  client.IrismodHtlc.query.queryAssetSupply(denom).then( res => res.data );
    }, options);
  }
  
  const QueryAssetSupplies = ( options: any) => {
    const key = { type: 'QueryAssetSupplies',  };    
    return useQuery([key], () => {
      return  client.IrismodHtlc.query.queryAssetSupplies().then( res => res.data );
    }, options);
  }
  
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.IrismodHtlc.query.queryParams().then( res => res.data );
    }, options);
  }
  
  return {QueryHTLC,QueryAssetSupply,QueryAssetSupplies,QueryParams,
  }
}