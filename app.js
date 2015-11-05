var http =require ('http');
var server_ip ='127.0.0.1';
var server_port= 1337;
if (process.env.NODE_ENV =='production')
{
	server_ip ='130.211.89.118';
}
 http.createServer (function (req,res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello World\n You\'re @ '& process.env.NODE_ENV & 'instance');

}).listen(server_port,server_ip);
console.log('Server running at ' & server_ip &' port:'& server_port);