/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useTibcCoreRoutingV1() {
  const client = useClient();
  const QueryRoutingRules = ( options: any) => {
    const key = { type: 'QueryRoutingRules',  };    
    return useQuery([key], () => {
      return  client.TibcCoreRoutingV1.query.queryRoutingRules().then( res => res.data );
    }, options);
  }
  
  return {QueryRoutingRules,
  }
}