/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useIrismodRecord() {
  const client = useClient();
  const QueryRecord = (record_id: string,  options: any) => {
    const key = { type: 'QueryRecord',  record_id };    
    return useQuery([key], () => {
      const { record_id } = key
      return  client.IrismodRecord.query.queryRecord(record_id).then( res => res.data );
    }, options);
  }
  
  return {QueryRecord,
  }
}