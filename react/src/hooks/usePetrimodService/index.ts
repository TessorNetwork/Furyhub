/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function usePetrimodService() {
  const client = useClient();
  const QueryDefinition = (service_name: string,  options: any) => {
    const key = { type: 'QueryDefinition',  service_name };    
    return useQuery([key], () => {
      const { service_name } = key
      return  client.PetrimodService.query.queryDefinition(service_name).then( res => res.data );
    }, options);
  }
  
  const QueryBinding = (service_name: string, provider: string,  options: any) => {
    const key = { type: 'QueryBinding',  service_name,  provider };    
    return useQuery([key], () => {
      const { service_name,  provider } = key
      return  client.PetrimodService.query.queryBinding(service_name, provider).then( res => res.data );
    }, options);
  }
  
  const QueryBindings = (service_name: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryBindings',  service_name, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { service_name,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.PetrimodService.query.queryBindings(service_name, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryWithdrawAddress = (owner: string,  options: any) => {
    const key = { type: 'QueryWithdrawAddress',  owner };    
    return useQuery([key], () => {
      const { owner } = key
      return  client.PetrimodService.query.queryWithdrawAddress(owner).then( res => res.data );
    }, options);
  }
  
  const QueryRequestContext = (request_context_id: string,  options: any) => {
    const key = { type: 'QueryRequestContext',  request_context_id };    
    return useQuery([key], () => {
      const { request_context_id } = key
      return  client.PetrimodService.query.queryRequestContext(request_context_id).then( res => res.data );
    }, options);
  }
  
  const QueryRequest = (request_id: string,  options: any) => {
    const key = { type: 'QueryRequest',  request_id };    
    return useQuery([key], () => {
      const { request_id } = key
      return  client.PetrimodService.query.queryRequest(request_id).then( res => res.data );
    }, options);
  }
  
  const QueryRequests = (service_name: string, provider: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryRequests',  service_name,  provider, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { service_name,  provider,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.PetrimodService.query.queryRequests(service_name, provider, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryRequestsByReqCtx = (request_context_id: string, batch_counter: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryRequestsByReqCtx',  request_context_id,  batch_counter, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { request_context_id,  batch_counter,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.PetrimodService.query.queryRequestsByReqCtx(request_context_id, batch_counter, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryResponse = (request_id: string,  options: any) => {
    const key = { type: 'QueryResponse',  request_id };    
    return useQuery([key], () => {
      const { request_id } = key
      return  client.PetrimodService.query.queryResponse(request_id).then( res => res.data );
    }, options);
  }
  
  const QueryResponses = (request_context_id: string, batch_counter: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryResponses',  request_context_id,  batch_counter, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { request_context_id,  batch_counter,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.PetrimodService.query.queryResponses(request_context_id, batch_counter, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryEarnedFees = (provider: string,  options: any) => {
    const key = { type: 'QueryEarnedFees',  provider };    
    return useQuery([key], () => {
      const { provider } = key
      return  client.PetrimodService.query.queryEarnedFees(provider).then( res => res.data );
    }, options);
  }
  
  const QuerySchema = (schema_name: string,  options: any) => {
    const key = { type: 'QuerySchema',  schema_name };    
    return useQuery([key], () => {
      const { schema_name } = key
      return  client.PetrimodService.query.querySchema(schema_name).then( res => res.data );
    }, options);
  }
  
  const QueryParams = ( options: any, perPage: number) => {
    const key = { type: 'QueryParams',  };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.PetrimodService.query.queryParams().then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QueryDefinition,QueryBinding,QueryBindings,QueryWithdrawAddress,QueryRequestContext,QueryRequest,QueryRequests,QueryRequestsByReqCtx,QueryResponse,QueryResponses,QueryEarnedFees,QuerySchema,QueryParams,
  }
}