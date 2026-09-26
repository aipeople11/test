const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname, port=process.env.PORT||8080, log=path.join(root,'data','community-events.ndjson');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.md':'text/markdown; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{
  if(req.method==='POST'&&req.url==='/api/trace'){
    let body=''; req.on('data',c=>{if(body.length<65536)body+=c}); req.on('end',()=>{try{const x=JSON.parse(body); const safe={event:String(x.event||'').slice(0,80),path:String(x.path||'').slice(0,240),href:String(x.href||'').slice(0,500),ts:String(x.ts||new Date().toISOString())}; fs.appendFileSync(log,JSON.stringify(safe)+'\n');}catch(_){} res.writeHead(204);res.end();}); return;
  }
  let u=decodeURIComponent((req.url||'/').split('?')[0]); if(u==='/')u='/index.html'; let f=path.normalize(path.join(root,u)); if(!f.startsWith(root)){res.writeHead(403);return res.end('Forbidden');}
  fs.stat(f,(err,st)=>{if(err||!st.isFile()){res.writeHead(404);return res.end('Not found');} res.writeHead(200,{'content-type':mime[path.extname(f)]||'application/octet-stream','cache-control':'no-store'});fs.createReadStream(f).pipe(res);});
}).listen(port,()=>console.log(`Humanity AI Circle V16.2 running at http://localhost:${port}`));