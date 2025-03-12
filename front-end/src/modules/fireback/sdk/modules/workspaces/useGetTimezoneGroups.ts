/*
*	Generated by fireback 1.1.28
*	Written by Ali Torabi.
* The code is generated for react-query@v3.39.3
*	Checkout the repository for licenses and contribution: https://github.com/torabian/fireback
*/
import { useContext } from "react";
import { useQuery } from "react-query";
import { 
  RemoteQueryContext,
  UseRemoteQuery,
  queryBeforeSend,
} from "../../core/react-tools";
import { execApiFn, IResponseList } from "../../core/http-tools";
    import {
        TimezoneGroupEntity,
    } from "../workspaces/TimezoneGroupEntity"
export function useGetTimezoneGroups({
  queryOptions,
  query,
  queryClient,
  execFnOverride,
  unauthorized,
  optionFn
}: UseRemoteQuery) {
  const { options, execFn } = useContext(RemoteQueryContext);
  const computedOptions = optionFn ? optionFn(options) : options;
  // Calculare the function which will do the remote calls.
  // We consider to use global override, this specific override, or default which
  // comes with the sdk.
  const rpcFn = execFnOverride
    ? execFnOverride(computedOptions)
    : execFn
    ? execFn(computedOptions)
    : execApiFn(computedOptions);
  // Url of the remote affix.
  const url = "/timezone-groups".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
  // Attach the details of the request to the fn
  const fn = () => rpcFn("GET", computedUrl);
  const auth = computedOptions?.headers?.authorization
  const hasKey = auth != "undefined" && auth != undefined && auth !=null && auth != "null" && !!auth
  const query$ = useQuery<any, any, IResponseList<TimezoneGroupEntity>, any>(["*workspaces.TimezoneGroupEntity", computedOptions, query], fn, {
    cacheTime: 1000,
    retry: false,
    keepPreviousData: true,
    enabled: hasKey || unauthorized || false,
    ...((queryOptions as any) || {})
  } as any);
  const items: Array<TimezoneGroupEntity> = query$.data?.data?.items || [];
  return { 
    query: query$,
    items,
    keyExtractor: (item: TimezoneGroupEntity) => item.uniqueId,
  };
}
useGetTimezoneGroups.UKEY = "*workspaces.TimezoneGroupEntity"