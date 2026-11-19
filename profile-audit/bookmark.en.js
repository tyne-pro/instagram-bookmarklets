(function(){
var a="https://cp.tyne.pro/api/public/igscan/ingest",t="YOUR_PERSONAL_TOKEN_FROM_THE_CABINET",dash="https://cp.tyne.pro/tools/igscan";
var u=(location.pathname.match(/^\/([^/?]+)/)||[])[1];
if(!u||["p","reel","reels","stories","explore","accounts","direct"].indexOf(u)>-1){alert("Open a profile page: instagram.com/username");return}
var old=document.getElementById("__ig_scan_overlay__");if(old)old.remove();
var d=document.createElement("div");d.id="__ig_scan_overlay__";
d.style.cssText="position:fixed;right:20px;bottom:20px;z-index:999999;background:linear-gradient(180deg,#171717,#0f0f0f);color:#fff;padding:20px 22px;border-radius:18px;font:15px/1.45 -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.55);width:min(420px,calc(100vw - 24px));border:1px solid rgba(255,255,255,.12)";
d.innerHTML='<div style="position:absolute;top:10px;right:14px;cursor:pointer;color:#a3a3a3;font-size:18px;line-height:1" id="__ig_scan_close__">\u00d7</div><div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;font:700 14px/1 -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:#f3eee6"><svg width="24" height="24" style="flex:none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="28" fill="#171717"/><g transform="translate(9 9) scale(1.1)"><path d="M50 21V9" fill="none" stroke="#f0a33a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 8a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z" fill="#3ee6a8"/><path d="M28 84h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z" fill="#c97f22"/><path d="M60 84h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z" fill="#c97f22"/><path d="M32 20H68Q86 20 86 38V66Q86 86 66 86H34Q14 86 14 66V38Q14 20 32 20Z" fill="#f0a33a"/><path d="M24 36Q24 28 32 28" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 60a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z" fill="rgba(255,111,181,.45)"/><path d="M67 60a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z" fill="rgba(255,111,181,.45)"/><rect class="sp-eye" x="35" y="39" width="8" height="14" rx="4" fill="#1a1206"/><rect class="sp-eye" x="57" y="39" width="8" height="14" rx="4" fill="#1a1206"/><rect class="sp-mouth" x="39" y="64.3" width="22" height="5.4" rx="5" fill="#1a1206"/></g></svg><span>tyne<span style="color:#f0a33a">.pro</span></span></div><div style="font-weight:800;font-size:18px;line-height:1.2;margin-bottom:10px">Profile audit @'+u+'</div><div id="__ig_scan_text__" style="font-size:15px;line-height:1.45;color:#f3f4f6">Starting...</div><div style="margin-top:14px;height:14px;background:#2a2a2a;border-radius:999px;overflow:hidden"><div id="__ig_scan_bar__" style="height:14px;width:0%;background:linear-gradient(90deg,#f0a33a,#f6c177);transition:width .4s"></div></div><div id="__ig_scan_actions__" style="margin-top:14px;display:none"></div>';
document.body.appendChild(d);
document.getElementById("__ig_scan_close__").onclick=function(){d.remove()};
function P(text,progress){var tt=document.getElementById("__ig_scan_text__"),b=document.getElementById("__ig_scan_bar__");if(tt)tt.textContent=text;if(b)b.style.width=Math.max(0,Math.min(100,progress))+"%"}
function DONE(ok,message,reportUrl,pending){
var b=document.getElementById("__ig_scan_bar__");if(b){b.style.width="100%";b.style.background=ok?"linear-gradient(90deg,#10b981,#34d399)":pending?"linear-gradient(90deg,#f59e0b,#fbbf24)":"linear-gradient(90deg,#f0a33a,#f87171)"}
P(message,100);
var act=document.getElementById("__ig_scan_actions__");if(!act)return;act.style.display="block";act.innerHTML="";
if(reportUrl){var btn=document.createElement("a");btn.href=reportUrl;btn.target="_blank";btn.textContent="Open the result in the cabinet \u2192";btn.style.cssText="display:inline-block;background:#f0a33a;color:#fff;text-decoration:none;font-weight:700;padding:10px 16px;border-radius:10px;font-size:14px";act.appendChild(btn)}
else if(pending){var btn2=document.createElement("a");btn2.href=dash;btn2.target="_blank";btn2.textContent="Check in the cabinet when it is ready \u2192";btn2.style.cssText="display:inline-block;background:#f59e0b;color:#1a1a1a;text-decoration:none;font-weight:700;padding:10px 16px;border-radius:10px;font-size:14px";act.appendChild(btn2)}
else{var link=document.createElement("a");link.href=dash;link.target="_blank";link.textContent="Cabinet";link.style.cssText="display:inline-block;color:#a3a3a3;text-decoration:none;font-size:13px";act.appendChild(link)}
}
window.addEventListener("message",function(ev){
if(ev.origin!=="https://cp.tyne.pro")return;var data=ev.data;if(!data||data.source!=="tyne-instagram-scan")return;
clearTimeout(window.__ig_scan_timeout__);clearInterval(window.__ig_scan_anim__);
DONE(data.ok,data.ok?"Done: "+data.message:data.message,data.reportUrl)
});
var html=document.documentElement.outerHTML;
var dtsg=(html.match(/"DTSGInitialData"[^}]*"token":"([^"]+)"/)||[])[1];
var lsd=(html.match(/"LSD"[^}]*"token":"([^"]+)"/)||[])[1];
var csrf=(document.cookie.match(/csrftoken=([^;]+)/)||[])[1]||"";
function gql(url,docId,friendly,variables){
if(!dtsg||!lsd)return Promise.reject(new Error("no dtsg/lsd"));
var sum=0;for(var i=0;i<dtsg.length;i++)sum+=dtsg.charCodeAt(i);
var jazoest="2"+sum;
var body=new URLSearchParams();
body.set("fb_dtsg",dtsg);body.set("lsd",lsd);body.set("jazoest",jazoest);
body.set("variables",JSON.stringify(variables));body.set("doc_id",docId);
body.set("fb_api_req_friendly_name",friendly);body.set("server_timestamps","true");
return fetch(url,{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded","X-FB-Friendly-Name":friendly,"X-ASBD-ID":"129477","X-CSRFToken":csrf,"X-IG-App-ID":"936619743392459"},body:body.toString()}).then(function(r){return r.json()})
}
function fetchHighlights(id){
if(!id)return Promise.resolve([]);
return gql("https://www.instagram.com/api/graphql","36997000523232338","PolarisProfileStoryHighlightsTrayContentQuery",{user_id:id}).then(function(data){
var edges=(data&&data.data&&data.data.highlights&&data.data.highlights.edges)||[];
return edges.map(function(e){return{title:(e.node&&e.node.title)||""}})
}).catch(function(){return[]})
}
function submitScan(raw,id){
P("Sending for analysis (up to 60 seconds)...",35);
var pct=35;window.__ig_scan_anim__=setInterval(function(){pct=Math.min(92,pct+2);P("Analysing the profile (up to 60 seconds)...",pct)},1500);
fetchHighlights(id).then(function(highlights){
var f=document.createElement("form");f.method="POST";f.action=a;f.target="_blank";f.rel="opener";
function h(n,v){var i=document.createElement("input");i.type="hidden";i.name=n;i.value=v;f.appendChild(i)}
h("token",t);h("lang","en");h("username",u);h("raw",JSON.stringify(raw));h("highlights",JSON.stringify(highlights));
document.body.appendChild(f);f.submit();f.remove()
});
window.__ig_scan_timeout__=setTimeout(function(){clearInterval(window.__ig_scan_anim__);DONE(false,"The analysis is still running on the server (not an error) — the result will appear in the cabinet in 1-2 minutes.",null,true)},100000)
}
function fetchPostsEdges(){
return gql("https://www.instagram.com/graphql/query","27769721232718994","PolarisProfilePostsQuery",{data:{count:12,include_reel_media_seen_timestamp:true,include_relationship_info:true,latest_besties_reel_media:true,latest_reel_media:true},username:u,__relay_internal__pv__PolarisMultiCaptionCarouselEnabledrelayprovider:false,__relay_internal__pv__PolarisImmersiveFeedChainingEnabledrelayprovider:false,__relay_internal__pv__PolarisAIGMAccountLabelEnabledrelayprovider:false,__relay_internal__pv__PolarisReelsRecoDebugOverlayEnabledrelayprovider:false})
.then(function(postsData){
return(postsData&&postsData.data&&postsData.data.xdt_api__v1__feed__user_timeline_graphql_connection&&postsData.data.xdt_api__v1__feed__user_timeline_graphql_connection.edges)||[]
})
}
function gqlFallback(){
return fetchPostsEdges()
.then(function(edges){
if(!edges.length)throw new Error("no posts edges");
var id=edges[0].node.user.pk;
return gql("https://www.instagram.com/api/graphql","26672929172408668","PolarisProfilePageContentQuery",{enable_integrity_filters:true,id:id,__relay_internal__pv__PolarisCannesGuardianExperienceEnabledrelayprovider:true,__relay_internal__pv__PolarisCASB976ProfileEnabledrelayprovider:false,__relay_internal__pv__PolarisWebSchoolsEnabledrelayprovider:false,__relay_internal__pv__PolarisRepostsConsumptionEnabledrelayprovider:true}).then(function(pageData){
var user=pageData&&pageData.data&&pageData.data.user;
if(!user)throw new Error("page query failed");
return{id:id,raw:{data:{user:{username:user.username,full_name:user.full_name,biography:user.biography,external_url:user.external_url,bio_links:user.bio_links,profile_pic_url_hd:user.profile_pic_url,edge_followed_by:{count:user.follower_count||0},edge_follow:{count:user.following_count||0},is_private:!!user.is_private,is_verified:!!user.is_verified,edge_owner_to_timeline_media:{count:user.media_count||0,edges:edges.map(function(e){return{node:{edge_media_to_caption:{edges:[{node:{text:(e.node.caption&&e.node.caption.text)||""}}]},edge_liked_by:{count:e.node.like_count||0},edge_media_to_comment:{count:e.node.comment_count||0},is_video:!!e.node.video_versions,product_type:e.node.product_type,taken_at_timestamp:e.node.taken_at,video_view_count:e.node.view_count,is_paid_partnership:!!e.node.is_paid_partnership,shortcode:e.node.code||null}}})}}}}}
})
})
}
P("Loading profile data...",8);
fetch("https://www.instagram.com/api/v1/users/web_profile_info/?username="+encodeURIComponent(u),{headers:{"x-ig-app-id":"936619743392459",accept:"*/*"}})
.then(function(r){return r.text().then(function(s){try{return JSON.parse(s)}catch(e){return{message:r.status===429?"too many requests (HTTP 429)":"HTTP "+r.status}}})})
.then(function(d){
if(d&&d.data&&d.data.user){
var tm=d.data.user.edge_owner_to_timeline_media;
if(tm&&tm.count>0&&(!tm.edges||!tm.edges.length)){
P("Instagram returned no posts, loading them separately...",20);
fetchPostsEdges().then(function(edges){
d.data.user.edge_owner_to_timeline_media.edges=edges.map(function(e){return{node:{edge_media_to_caption:{edges:[{node:{text:(e.node.caption&&e.node.caption.text)||""}}]},edge_liked_by:{count:e.node.like_count||0},edge_media_to_comment:{count:e.node.comment_count||0},is_video:!!e.node.video_versions,product_type:e.node.product_type,taken_at_timestamp:e.node.taken_at,video_view_count:e.node.view_count,is_paid_partnership:!!e.node.is_paid_partnership,shortcode:e.node.code||null}}});
submitScan(d,d.data.user.id)
}).catch(function(){submitScan(d,d.data.user.id)});
return
}
submitScan(d,d.data.user.id);return
}
var msg=d&&d.message?d.message:"Instagram returned no profile data";
P("Instagram API failed, trying another way...",15);
gqlFallback().then(function(result){submitScan(result.raw,result.id)}).catch(function(){
DONE(false,"Instagram rejected the request: "+msg+" (error on the side of Instagram for this account, not the token or session)")
})
})
.catch(function(e){DONE(false,"Error: "+e.message)})
})();
