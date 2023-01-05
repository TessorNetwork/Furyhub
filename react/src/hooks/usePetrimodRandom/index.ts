/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function usePetrimodRandom() {
  const client = useClient();
  const QueryRandom = (req_id: string,  options: any) => {
    const key = { type: 'QueryRandom',  req_id };    
    return useQuery([key], () => {
      const { req_id } = key
      return  client.PetrimodRandom.query.queryRandom(req_id).then( res => res.data );
    }, options);
  }
  
  const QueryRandomRequestQueue = (query: any, options: any) => {
    const key = { type: 'QueryRandomRequestQueue', query };    
    return useQuery([key], () => {
      const {query } = key
      return  client.PetrimodRandom.query.queryRandomRequestQueue(query ?? undefined).then( res => res.data );
    }, options);
  }
  
  return {QueryRandom,QueryRandomRequestQueue,
  }
}