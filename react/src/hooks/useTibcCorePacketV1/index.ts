/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useTibcCorePacketV1() {
  const client = useClient();
  const QueryPacketCommitment = (source_chain: string, dest_chain: string, sequence: string,  options: any) => {
    const key = { type: 'QueryPacketCommitment',  source_chain,  dest_chain,  sequence };    
    return useQuery([key], () => {
      const { source_chain,  dest_chain,  sequence } = key
      return  client.TibcCorePacketV1.query.queryPacketCommitment(source_chain, dest_chain, sequence).then( res => res.data );
    }, options);
  }
  
  const QueryPacketCommitments = (source_chain: string, dest_chain: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryPacketCommitments',  source_chain,  dest_chain, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { source_chain,  dest_chain,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.TibcCorePacketV1.query.queryPacketCommitments(source_chain, dest_chain, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryPacketReceipt = (source_chain: string, dest_chain: string, sequence: string,  options: any) => {
    const key = { type: 'QueryPacketReceipt',  source_chain,  dest_chain,  sequence };    
    return useQuery([key], () => {
      const { source_chain,  dest_chain,  sequence } = key
      return  client.TibcCorePacketV1.query.queryPacketReceipt(source_chain, dest_chain, sequence).then( res => res.data );
    }, options);
  }
  
  const QueryPacketAcknowledgement = (source_chain: string, dest_chain: string, sequence: string,  options: any) => {
    const key = { type: 'QueryPacketAcknowledgement',  source_chain,  dest_chain,  sequence };    
    return useQuery([key], () => {
      const { source_chain,  dest_chain,  sequence } = key
      return  client.TibcCorePacketV1.query.queryPacketAcknowledgement(source_chain, dest_chain, sequence).then( res => res.data );
    }, options);
  }
  
  const QueryPacketAcknowledgements = (source_chain: string, dest_chain: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryPacketAcknowledgements',  source_chain,  dest_chain, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { source_chain,  dest_chain,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.TibcCorePacketV1.query.queryPacketAcknowledgements(source_chain, dest_chain, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryUnreceivedPackets = (source_chain: string, dest_chain: string, packet_commitment_sequences: string,  options: any) => {
    const key = { type: 'QueryUnreceivedPackets',  source_chain,  dest_chain,  packet_commitment_sequences };    
    return useQuery([key], () => {
      const { source_chain,  dest_chain,  packet_commitment_sequences } = key
      return  client.TibcCorePacketV1.query.queryUnreceivedPackets(source_chain, dest_chain, packet_commitment_sequences).then( res => res.data );
    }, options);
  }
  
  const QueryUnreceivedAcks = (source_chain: string, dest_chain: string, packet_ack_sequences: string,  options: any) => {
    const key = { type: 'QueryUnreceivedAcks',  source_chain,  dest_chain,  packet_ack_sequences };    
    return useQuery([key], () => {
      const { source_chain,  dest_chain,  packet_ack_sequences } = key
      return  client.TibcCorePacketV1.query.queryUnreceivedAcks(source_chain, dest_chain, packet_ack_sequences).then( res => res.data );
    }, options);
  }
  
  const QueryCleanPacketCommitment = (source_chain: string, dest_chain: string,  options: any) => {
    const key = { type: 'QueryCleanPacketCommitment',  source_chain,  dest_chain };    
    return useQuery([key], () => {
      const { source_chain,  dest_chain } = key
      return  client.TibcCorePacketV1.query.queryCleanPacketCommitment(source_chain, dest_chain).then( res => res.data );
    }, options);
  }
  
  return {QueryPacketCommitment,QueryPacketCommitments,QueryPacketReceipt,QueryPacketAcknowledgement,QueryPacketAcknowledgements,QueryUnreceivedPackets,QueryUnreceivedAcks,QueryCleanPacketCommitment,
  }
}