function FindProxyForURL(url, host) 
{ 
 var resolved_ip = dnsResolve(host);
if (isInNet(resolved_ip, "192.168.0.0", "255.255.0.0")) {
            return "PROXY proxy.comp.ot:3128";
        }
 else 
   return "DIRECT"; 
}
