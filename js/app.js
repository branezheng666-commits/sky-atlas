const WIDE="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Boeing_787_N1015B_ANA_Airlines_%2827611880663%29_%28cropped%29.jpg/960px-Boeing_787_N1015B_ANA_Airlines_%2827611880663%29_%28cropped%29.jpg";
const NAR="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Alaska_737_Max_9.jpg/960px-Alaska_737_Max_9.jpg";
const JUMBO="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/A6-EDY_A380_Emirates_31_jan_2013_jfk_%288442269364%29_%28cropped%29.jpg/960px-A6-EDY_A380_Emirates_31_jan_2013_jfk_%288442269364%29_%28cropped%29.jpg";
const PLANES=[
{id:"b737max8",name:"波音 737 MAX 8",en:"Boeing 737 MAX 8",maker:"波音",makerId:"boeing",type:"窄体",status:"在产在役",img:NAR,firstFlight:"2016年",eis:"2017年",seats:"162–178 / 最多约210",length:"39.52 米",span:"35.9 米",height:"12.3 米",range:"约 6,500 公里",cruise:"0.79 马赫",mtow:"约 82.6 吨",engines:"2× CFM LEAP-1B",users:"西南航空、瑞安航空、美国航空等",kid:"全世界飞得最多的短途单通道客机。翼尖有分叉小翼。",fact:"737 家族从1967年生产到现在，是产量最高的喷气客机之一。",specs:[["定位","中短程窄体"],["通道","单通道 3-3"]]},
{id:"a320neo",name:"空客 A320neo",en:"Airbus A320neo",maker:"空客",makerId:"airbus",type:"窄体",status:"在产在役",img:NAR,firstFlight:"2014年",eis:"2016年",seats:"150–180 / 最多195",length:"37.57 米",span:"35.8 米",height:"11.76 米",range:"约 6,300 公里",cruise:"0.78 马赫",mtow:"约 79 吨",engines:"2× LEAP-1A 或 PW1100G",users:"东航、易捷、即度薪等",kid:"neo 意思是换上更省油的新发动机。驾驶舱用侧杆电传操纵。",fact:"A320 家族是 737 最强对手。",specs:[["翼尖","鲨鳍小翼"],["通道","单通道 3-3"]]},
{id:"a321xlr",name:"空客 A321XLR",en:"Airbus A321XLR",maker:"空客",makerId:"airbus",type:"窄体",status:"在产在役",img:NAR,firstFlight:"2022年",eis:"2024年",seats:"180–220",length:"44.51 米",span:"35.8 米",height:"11.76 米",range:"约 8,700 公里",cruise:"0.78 马赫",mtow:"约 101 吨",engines:"2× LEAP-1A 或 PW1100G",users:"伊比利亚、美国航空等",kid:"窄体机却能飞跨大西洋。XLR 是超长航程。",fact:"后货舱加了永久中央油箱。",specs:[["定位","超长航程单通道"]]},
{id:"c919",name:"中国商飞 C919",en:"COMAC C919",maker:"中国商飞",makerId:"comac",type:"窄体",status:"在产在役",img:NAR,firstFlight:"2017年5月5日",eis:"2023年5月28日",seats:"158–174 / 最多192",length:"38.9 米",span:"35.8 米",height:"11.95 米",range:"4,075 / 5,555 公里",cruise:"0.785 马赫",mtow:"75.1–78.9 吨",engines:"2× CFM LEAP-1C",users:"东航、国航、南航",kid:"中国第一款按国际适航标准自行设计的干线喷气客机。",fact:"采用电传操纵和综合航电，高原型已开始试飞。",specs:[["定位","150座级中短程窄体"]]},
{id:"a220",name:"空客 A220-300",en:"Airbus A220-300",maker:"空客",makerId:"airbus",type:"窄体",status:"在产在役",img:NAR,firstFlight:"2015年",eis:"2016年",seats:"130–160",length:"38.7 米",span:"35.1 米",height:"11.5 米",range:"约 6,300 公里",cruise:"0.82 马赫",mtow:"约 70.9 吨",engines:"2× PW1500G",users:"达美、法航、捷蓝",kid:"比 737 稍小，座位更宽更安静。原来是庞巴迪 C 系列。",fact:"经济舱常为 2-3 布局。",specs:[["出身","原庞巴迪 CSeries"]]},
{id:"b7879",name:"波音 787-9 梦想客机",en:"Boeing 787-9",maker:"波音",makerId:"boeing",type:"宽体",status:"在产在役",img:WIDE,firstFlight:"2009年",eis:"2014年",seats:"约 290",length:"63 米",span:"60.1 米",height:"17 米",range:"约 14,010 公里",cruise:"0.85 马赫",mtow:"约 254–259 吨",engines:"2× GEnx 或 Trent 1000",users:"全日空、联航、国泰",kid:"机身约一半是复合材料，窗户大，远程更舒服。",fact:"客舱气压更接近地面。",specs:[["材料","复合材料约一半"]]},
{id:"a350",name:"空客 A350-900 / -1000",en:"Airbus A350 XWB",maker:"空客",makerId:"airbus",type:"宽体",status:"在产在役",img:WIDE,firstFlight:"2013年",eis:"2015年",seats:"315–400",length:"66.8 / 73.8 米",span:"64.75 米",height:"17.05 米",range:"15,000–16,700 公里",cruise:"0.85–0.89 马赫",mtow:"283 / 322 吨",engines:"2× Trent XWB",users:"卡塔尔、新加坡、国航",kid:"XWB 意思是机身更宽。超远程型能飞十几小时。",fact:"新航 A350ULR 曾飞新加坡—纽约。",specs:[["对手","787 与 777X"]]},
{id:"a330neo",name:"空客 A330-900neo",en:"Airbus A330-900neo",maker:"空客",makerId:"airbus",type:"宽体",status:"在产在役",img:WIDE,firstFlight:"2017年",eis:"2018年",seats:"260–300",length:"63.7 米",span:"64 米",height:"16.8 米",range:"约 13,300 公里",cruise:"0.85 马赫",mtow:"约 251 吨",engines:"2× Trent 7000",users:"葡萄牙航空、达美、吉祥",kid:"很多家庭出国常坐到的宽体机升级版。",fact:"经济舱常见 2-4-2。",specs:[["定位","中远程宽体"]]},
{id:"b777x",name:"波音 777-9（777X）",en:"Boeing 777-9",maker:"波音",makerId:"boeing",type:"宽体",status:"试飞取证中",img:WIDE,firstFlight:"2020年1月",eis:"计划约 2026年",seats:"约 426",length:"76.7 米",span:"展开 71.75 米 / 折叠 64.85 米",height:"约 19.7 米",range:"约 13,500 公里",cruise:"0.84 马赫",mtow:"约 351.5 吨",engines:"2× GE9X",users:"汉莎、阿联酋、卡航（订单）",kid:"目前世界上机身最长的客机。翅膀尖在地面可以折起来。",fact:"GE9X 是目前最大的民用涡扇发动机。",specs:[["绝技","折叠翼尖"]]},
{id:"a380",name:"空客 A380",en:"Airbus A380",maker:"空客",makerId:"airbus",type:"超大型",status:"停产仍在飞",img:JUMBO,firstFlight:"2005年",eis:"2007年",seats:"500–575 / 最多853",length:"72.7 米",span:"79.8 米",height:"24.1 米",range:"约 15,000 公里",cruise:"0.85 马赫",mtow:"约 575 吨",engines:"4× Trent 900 或 GP7200",users:"阿联酋、新航、英航",kid:"唯一全机身双层客机，像会飞的两层楼。",fact:"2021年停产，共交付 251 架。",specs:[["识别","四发 + 完整上层"]]},
{id:"b7478",name:"波音 747-8",en:"Boeing 747-8",maker:"波音",makerId:"boeing",type:"超大型",status:"客机停产",img:JUMBO,firstFlight:"2011年",eis:"2012年",seats:"约 410",length:"76.3 米",span:"68.4 米",height:"19.4 米",range:"约 13,650 公里",cruise:"0.85 马赫",mtow:"约 448 吨",engines:"4× GEnx-2B",users:"汉莎、大韩航空",kid:"空中皇后。机头鼓包二层像驼峰。",fact:"747 于1969年首飞，改变了普通人出国旅行。",specs:[["识别","驼峰 + 四发"]]},
{id:"c909",name:"中国商飞 C909",en:"COMAC C909 / ARJ21",maker:"中国商飞",makerId:"comac",type:"支线",status:"在产在役",img:NAR,firstFlight:"2008年",eis:"2016年",seats:"78–90",length:"33.46 米",span:"27.28 米",height:"8.44 米",range:"2,225 / 3,700 公里",cruise:"0.78 马赫",mtow:"40.5–43.5 吨",engines:"2× CF34-10A（尾吊）",users:"成都航空、华夏航空",kid:"中国支线喷气客机，发动机挂在尾巴两边。",fact:"原名 ARJ21，2024年起也用 C909。",specs:[["布局","每排五座，尾吊发动机"]]},
{id:"e195e2",name:"巴航工业 E195-E2",en:"Embraer E195-E2",maker:"巴航工业",makerId:"embraer",type:"支线",status:"在产在役",img:NAR,firstFlight:"2017年",eis:"2019年",seats:"120–146",length:"41.5 米",span:"35.1 米",height:"10.9 米",range:"约 4,800 公里",cruise:"0.82 马赫",mtow:"约 61.5 吨",engines:"2× PW1900G",users:"阿祖尔、荷兰城际",kid:"比普通支线机大一点，比 737 小一点。",fact:"经济舱常见 2-2。",specs:[["定位","大型支线 / 小型窄体"]]},
{id:"atr72",name:"ATR 72-600",en:"ATR 72-600",maker:"ATR",makerId:"atr",type:"支线",status:"在产在役",img:NAR,firstFlight:"2009年",eis:"2011年",seats:"70–78",length:"27.17 米",span:"27.05 米",height:"7.65 米",range:"约 1,500 公里",cruise:"约 510 公里/小时",mtow:"约 23 吨",engines:"2× PW127 涡桨",users:"华信、曼谷航空等",kid:"机翼上有螺旋桨，最适合海岛和小机场。",fact:"短途比小喷气机更省油。",specs:[["动力","涡轮螺旋桨"]]},
{id:"c929",name:"中国商飞 C929",en:"COMAC C929",maker:"中国商飞",makerId:"comac",type:"宽体",status:"研制中",img:WIDE,firstFlight:"尚未首飞",eis:"预计 2030 年代",seats:"规划约 280–300",length:"规划约 63–64 米",span:"规划约 61 米",height:"规划约 18 米",range:"规划约 12,000 公里",cruise:"约 0.85 马赫",mtow:"约 230 吨级",engines:"待定",users:"尚未交付",kid:"中国正在研制的远程宽体客机，对标 787 和 A350。",fact:"数据为规划量级，以官方后续公布为准。",specs:[["状态","研制中"]]}
];
const $ = s => document.querySelector(s);
const el = html => { const t=document.createElement("template"); t.innerHTML=html.trim(); return t.content.firstElementChild; };
function renderGrid(list){
  const grid=$("#grid"); grid.innerHTML="";
  if(!list.length){grid.innerHTML="<p class='sec-sub'>没有找到符合条件的飞机。</p>";return;}
  list.forEach(p=>{
    const card=el(`<article class=\"plane-card\" data-id=\"${p.id}\"><div class=\"thumb\"><img src=\"${p.img}\" alt=\"${p.name}\"><span class=\"tag\">${p.type} · ${p.status}</span></div><div class=\"card-body\"><h3>${p.name}</h3><div class=\"meta\">${p.en} · ${p.maker}</div><div class=\"mini-specs\"><div><b>${p.seats.split("/")[0]}</b>座位</div><div><b>${p.range}</b>航程</div><div><b>${p.length}</b>机长</div><div><b>${p.engines}</b>动力</div></div></div></article>`);
    card.onclick=()=>openPlane(p.id); grid.appendChild(card);
  });
}
function currentFilter(){
  const maker=document.querySelector(".chip[data-maker].on")?.dataset.maker||"all";
  const type=document.querySelector(".chip[data-type].on")?.dataset.type||"all";
  const q=($("#q").value||"").trim().toLowerCase();
  return PLANES.filter(p=>(maker==="all"||p.makerId===maker)&&(type==="all"||p.type===type)&&(!q||[p.name,p.en,p.maker,p.type].join(" ").toLowerCase().includes(q)));
}
function openPlane(id){
  const p=PLANES.find(x=>x.id===id); if(!p)return;
  $("#sheet-img").src=p.img; $("#sheet-img").alt=p.name;
  $("#sheet-title").textContent=p.name;
  $("#sheet-sub").textContent=`${p.en}  ·  ${p.maker}  ·  ${p.type}`;
  $("#facts").innerHTML=[["座位",p.seats],["航程",p.range],["机长",p.length],["翼展",p.span],["巡航",p.cruise],["最大起飞重",p.mtow],["首飞",p.firstFlight],["投入运营",p.eis]].map(([k,v])=>`<div class=\"fact\"><small>${k}</small><b>${v}</b></div>`).join("");
  $("#story").innerHTML=`<p>${p.kid}</p><p style=\"margin-top:10px\">${p.fact}</p>`;
  $("#spec-table").innerHTML=[["制造商",p.maker],["发动机",p.engines],["机高",p.height],["主要用户",p.users],...p.specs].map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join("");
  $("#modal").classList.add("show"); document.body.style.overflow="hidden";
}
function closeModal(){ $("#modal").classList.remove("show"); document.body.style.overflow=""; }
function fillSelects(){ const opts=PLANES.map(p=>`<option value=\"${p.id}\">${p.name}</option>`).join(""); $("#c1").innerHTML=opts; $("#c2").innerHTML=opts; $("#c1").value="b7879"; $("#c2").value="a350"; drawCompare(); }
function drawCompare(){ const a=PLANES.find(p=>p.id===$("#c1").value), b=PLANES.find(p=>p.id===$("#c2").value);
  const rows=[["型号",a.name,b.name],["制造商",a.maker,b.maker],["类别",a.type,b.type],["座位",a.seats,b.seats],["航程",a.range,b.range],["机长",a.length,b.length],["翼展",a.span,b.span],["巡航",a.cruise,b.cruise],["发动机",a.engines,b.engines],["状态",a.status,b.status]];
  $("#compare-body").innerHTML=rows.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join(""); }
const QUIZ=[{q:"哪一架是中国干线窄体客机？",options:["737 MAX","A320neo","C919","E195-E2"],a:2},{q:"哪一架是完整双层客机？",options:["747-8","A380","777-9","A350"],a:1},{q:"787 最有名的材料特点？",options:["全是木头","大量复合材料","没有发动机","只能白天飞"],a:1},{q:"国内航线最常见的是？",options:["超大型","宽体","窄体干线","直升机"],a:2}];
let qi=0;
function showQuiz(){ const item=QUIZ[qi]; $("#quiz-q").textContent=`第 ${qi+1} 题 / ${QUIZ.length}  ${item.q}`; $("#quiz-opts").innerHTML="";
  item.options.forEach((opt,i)=>{ const b=el(`<button class=\"q-opt\">${opt}</button>`); b.onclick=()=>{ [...$("#quiz-opts").children].forEach(x=>x.disabled=true); if(i===item.a){b.classList.add("good");$("#quiz-msg").textContent="答对了！";} else {b.classList.add("bad"); $("#quiz-opts").children[item.a].classList.add("good"); $("#quiz-msg").textContent="差一点点，绿色是正确答案。";}}; $("#quiz-opts").appendChild(b); }); $("#quiz-msg").textContent="选一个答案。"; }
document.addEventListener("DOMContentLoaded",()=>{
  renderGrid(PLANES); fillSelects(); showQuiz();
  document.querySelectorAll(".chip").forEach(chip=>chip.onclick=()=>{ const g=chip.dataset.maker?"maker":"type"; document.querySelectorAll(`.chip[data-${g}]`).forEach(c=>c.classList.remove("on")); chip.classList.add("on"); renderGrid(currentFilter()); });
  $("#q").oninput=()=>renderGrid(currentFilter());
  $("#c1").onchange=drawCompare; $("#c2").onchange=drawCompare;
  $("#modal").onclick=e=>{ if(e.target.id==="modal") closeModal(); };
  $("#sheet-close").onclick=closeModal;
  document.onkeydown=e=>{ if(e.key==="Escape") closeModal(); };
  $("#next-q").onclick=()=>{ qi=(qi+1)%QUIZ.length; showQuiz(); };
  document.querySelectorAll("[data-jump]").forEach(btn=>btn.onclick=()=>document.querySelector(btn.dataset.jump)?.scrollIntoView({behavior:"smooth"}));
  document.querySelectorAll(".maker-card").forEach(card=>card.onclick=()=>{ document.querySelectorAll(".chip[data-maker]").forEach(c=>c.classList.toggle("on", c.dataset.maker===card.dataset.maker)); document.querySelector("#atlas").scrollIntoView({behavior:"smooth"}); renderGrid(currentFilter()); });
});