import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [expr, setExpr] = useState("");
  const [history, setHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem("calc_history") || "[]"); } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("calc_history", JSON.stringify(history));
  }, [history]);

  function press(val) {
    setExpr(prev => prev + val);
  }
  function clear() { setExpr(""); }
  function back() { setExpr(prev => prev.slice(0, -1)); }
  function evaluate() {
    try {
      if (!/^[0-9+\-*/().\s%]+$/.test(expr)) throw new Error("Invalid characters");
      // eslint-disable-next-line no-eval
      const result = eval(expr);
      const entry = { expr, result, ts: new Date().toISOString() };
      setHistory([entry, ...history].slice(0, 50));
      setExpr(String(result));
    } catch (e) {
      setExpr("Error");
      setTimeout(() => setExpr(""), 800);
    }
  }

  return (
    <div style={{maxWidth:420, margin:"0 auto"}}>
      <input value={expr} onChange={e=>setExpr(e.target.value)} style={{width:"100%", fontSize:20, padding:8, marginBottom:8}} />
      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8}}>
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","%","+"].map(k => (
          <button key={k} onClick={()=>press(k)} style={{padding:12,fontSize:18}}>{k}</button>
        ))}
        <button onClick={clear} style={{gridColumn:"span 2", padding:12}}>C</button>
        <button onClick={back} style={{padding:12}}>⌫</button>
        <button onClick={evaluate} style={{padding:12}}> = </button>
      </div>

      <h4>History</h4>
      <ul>
        {history.map((h,i)=>(
          <li key={i}>{h.expr} = {String(h.result)}</li>
        ))}
      </ul>
    </div>
  );
}
