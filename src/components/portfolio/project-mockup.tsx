"use client";

import React, { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Plus, RotateCcw, LayoutGrid, LayoutList, 
  Highlighter, FileText, Terminal, 
  Sparkles, ArrowDownRight
} from "lucide-react";

interface ProjectMockupProps {
  slug: string;
}

const subscribe = () => () => {};

export function ProjectMockup({ slug }: ProjectMockupProps) {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  if (!isMounted) {
    return (
      <div className="w-full aspect-[4/3] bg-[#0c0c0e] border border-white/5 rounded-2xl flex items-center justify-center">
        <span className="text-2xs text-white/20 uppercase tracking-widest animate-pulse">Initializing Simulator...</span>
      </div>
    );
  }

  switch (slug) {
    case "track-my-spend":
      return <TrackMySpendSimulator />;
    case "techveda-portfolio":
    case "rabbitcode-portfolio":
      return <PortfolioBuilderSimulator />;
    case "pdf-edit-tool":
      return <PdfEditorSimulator />;
    default:
      return <TechnicalSpecSimulator slug={slug} />;
  }
}

// 1. TRACK MY SPEND SIMULATOR
function TrackMySpendSimulator() {
  const [transactions, setTransactions] = useState([
    { id: 1, name: "Shopify API Subscription", amount: -29.00, category: "SaaS", time: "Just now" },
    { id: 2, name: "Stripe Client Payout", amount: 1250.00, category: "Income", time: "2h ago" },
    { id: 3, name: "Vercel Hosting Pro", amount: -20.00, category: "Hosting", time: "5h ago" }
  ]);
  const [balance, setBalance] = useState(2450.00);
  const [expenses, setExpenses] = useState(380.00);

  const [mockName, setMockName] = useState("");
  const [mockAmount, setMockAmount] = useState("");
  const mockCategory = "SaaS";

  const addTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mockName || !mockAmount) return;

    const amt = parseFloat(mockAmount);
    const newTx = {
      id: Date.now(),
      name: mockName,
      amount: amt,
      category: mockCategory,
      time: "Just now"
    };

    setTransactions([newTx, ...transactions.slice(0, 3)]);
    if (amt > 0) {
      setBalance(prev => prev + amt);
    } else {
      setExpenses(prev => prev + Math.abs(amt));
      setBalance(prev => prev + amt);
    }
    setMockName("");
    setMockAmount("");
  };

  const resetSimulator = () => {
    setTransactions([
      { id: 1, name: "Shopify API Subscription", amount: -29.00, category: "SaaS", time: "Just now" },
      { id: 2, name: "Stripe Client Payout", amount: 1250.00, category: "Income", time: "2h ago" },
      { id: 3, name: "Vercel Hosting Pro", amount: -20.00, category: "Hosting", time: "5h ago" }
    ]);
    setBalance(2450.00);
    setExpenses(380.00);
  };

  return (
    <div className="w-full bg-[#0a0a0c] border border-white/5 rounded-2xl p-5 space-y-5 font-sans relative overflow-hidden shadow-2xl">
      {/* Title */}
      <div className="flex justify-between items-center border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-white/50">Finance Simulator v1.0</span>
        </div>
        <button onClick={resetSimulator} className="text-white/30 hover:text-white/80 transition-colors">
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Hero Balance Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-white/5 bg-white/[0.02] rounded-xl p-3.5 text-left">
          <div className="text-[9px] uppercase tracking-wider text-white/40">Total Balance</div>
          <div className="text-xl font-bold text-white tracking-tight mt-1">
            ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
        <div className="border border-white/5 bg-white/[0.02] rounded-xl p-3.5 text-left">
          <div className="text-[9px] uppercase tracking-wider text-white/40 font-mono">Total Expenses</div>
          <div className="text-xl font-bold text-white tracking-tight mt-1 flex items-center text-rose-500">
            <ArrowDownRight className="h-4 w-4 mr-0.5" />
            ${expenses.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
      </div>

      {/* Custom Simulated Bar Chart */}
      <div className="border border-white/5 bg-white/[0.01] rounded-xl p-4 space-y-3">
        <div className="flex justify-between items-center text-[9px] text-white/40 font-mono">
          <span>SPENDING CATEGORIES</span>
          <span>MAX CAP EXCEEDED // 45%</span>
        </div>
        <div className="space-y-2.5">
          <div>
            <div className="flex justify-between text-[9px] text-white/60 mb-1">
              <span>SaaS & Servers</span>
              <span>${(expenses * 0.4).toFixed(0)}</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-indigo-500" 
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[9px] text-white/60 mb-1">
              <span>Hosting & CDNs</span>
              <span>${(expenses * 0.3).toFixed(0)}</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-sky-400" 
                initial={{ width: 0 }}
                animate={{ width: "42%" }}
                transition={{ duration: 0.8, delay: 0.15 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Feed */}
      <div className="space-y-2 text-left">
        <span className="text-[9px] uppercase font-mono tracking-widest text-white/40">Live Transactions</span>
        <div className="space-y-2">
          <AnimatePresence initial={false}>
            {transactions.map((tx) => (
              <motion.div 
                key={tx.id}
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="flex items-center justify-between p-2.5 border border-white/5 bg-white/[0.01] rounded-lg text-xs"
              >
                <div className="space-y-0.5">
                  <div className="font-medium text-white/90">{tx.name}</div>
                  <div className="text-[9px] text-white/40 flex items-center gap-1.5">
                    <span className="px-1.5 py-0.2 bg-white/5 rounded text-[8px] font-mono">{tx.category}</span>
                    <span>•</span>
                    <span>{tx.time}</span>
                  </div>
                </div>
                <span className={`font-mono font-semibold ${tx.amount > 0 ? "text-emerald-400" : "text-rose-400"}`}>
                  {tx.amount > 0 ? "+" : ""}${tx.amount.toFixed(2)}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Add New Transaction Form */}
      <form onSubmit={addTransaction} className="border-t border-white/5 pt-4 flex gap-2">
        <input 
          type="text" 
          placeholder="New transaction name..." 
          value={mockName}
          onChange={(e) => setMockName(e.target.value)}
          className="flex-1 bg-white/[0.02] border border-white/5 focus:border-white/20 rounded-lg px-3 py-1.5 text-xs text-white placeholder-white/30 outline-none"
        />
        <input 
          type="number" 
          placeholder="-35" 
          value={mockAmount}
          onChange={(e) => setMockAmount(e.target.value)}
          className="w-16 bg-white/[0.02] border border-white/5 focus:border-white/20 rounded-lg px-2 py-1.5 text-xs text-white placeholder-white/30 outline-none text-center"
        />
        <button type="submit" className="bg-white text-black hover:bg-white/90 p-1.5 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
          <Plus className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

// 2. PORTFOLIO BUILDER SIMULATOR
function PortfolioBuilderSimulator() {
  const [layoutMode, setLayoutMode] = useState<"grid" | "list">("grid");
  const [accentColor, setAccentColor] = useState("#818cf8");
  const [activeTab, setActiveTab] = useState("works");

  const colors = ["#818cf8", "#f43f5e", "#10b981", "#f59e0b"];

  const mockCards = [
    { title: "E-Commerce Core", tags: ["Shopify", "React"], size: "w-full" },
    { title: "Stripe Micro-Portal", tags: ["Node", "Express"], size: "w-full" },
    { title: "NextJS Static Engine", tags: ["Next.js", "SSG"], size: "w-full" },
  ];

  return (
    <div className="w-full bg-[#0a0a0c] border border-white/5 rounded-2xl p-5 space-y-5 font-sans shadow-2xl relative">
      {/* Top Header */}
      <div className="flex justify-between items-center border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-white/50">Redesign Sandbox UI</span>
        </div>
        
        {/* Accent Pickers */}
        <div className="flex gap-1.5">
          {colors.map(col => (
            <button
              key={col}
              onClick={() => setAccentColor(col)}
              className="h-3 w-3 rounded-full border border-white/10 transition-transform hover:scale-125 cursor-pointer"
              style={{ backgroundColor: col, boxShadow: accentColor === col ? `0 0 8px ${col}` : "none" }}
            />
          ))}
        </div>
      </div>

      {/* Simulator Screen Mockup */}
      <div className="border border-white/5 rounded-xl overflow-hidden bg-[#060608] flex flex-col text-left aspect-[4/3]">
        {/* Mock Top bar */}
        <div className="p-3 border-b border-white/5 flex justify-between items-center bg-[#09090b]">
          <span className="text-[9px] uppercase font-mono font-bold tracking-wider" style={{ color: accentColor }}>SAGAR.DEV</span>
          <div className="flex gap-3 text-[8px] text-white/50 font-mono">
            <span className={activeTab === "about" ? "text-white" : "cursor-pointer"} onClick={() => setActiveTab("about")}>ABOUT</span>
            <span className={activeTab === "works" ? "text-white" : "cursor-pointer"} onClick={() => setActiveTab("works")}>WORKS</span>
          </div>
        </div>

        {/* Mock Content Body */}
        <div className="p-4 flex-1 overflow-y-auto space-y-4">
          {activeTab === "about" ? (
            <div className="space-y-2.5 animate-fadeIn">
              <h4 className="text-xs font-bold text-white">Full-Stack Architect</h4>
              <p className="text-[9px] text-white/40 leading-relaxed">
                Engineering high-performance client showcases, custom shopify widgets, and robust backend integrations.
              </p>
            </div>
          ) : (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex justify-between items-center">
                <span className="text-[9px] text-white/40 font-mono">PROJECT LAYOUTS</span>
                
                {/* Layout Toggles */}
                <div className="flex gap-1 bg-white/5 p-0.5 rounded border border-white/5">
                  <button 
                    onClick={() => setLayoutMode("grid")}
                    className={`p-1 rounded cursor-pointer ${layoutMode === "grid" ? "bg-white/10 text-white" : "text-white/30"}`}
                  >
                    <LayoutGrid className="h-2.5 w-2.5" />
                  </button>
                  <button 
                    onClick={() => setLayoutMode("list")}
                    className={`p-1 rounded cursor-pointer ${layoutMode === "list" ? "bg-white/10 text-white" : "text-white/30"}`}
                  >
                    <LayoutList className="h-2.5 w-2.5" />
                  </button>
                </div>
              </div>

              {/* Staggered Grid/List Cards */}
              <div className={`gap-2.5 ${layoutMode === "grid" ? "grid grid-cols-2" : "flex flex-col"}`}>
                {mockCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="border border-white/5 bg-white/[0.01] rounded-lg p-2.5 space-y-1.5 hover:border-white/10 transition-colors"
                  >
                    <h5 className="text-[10px] font-bold text-white/90 truncate">{card.title}</h5>
                    <div className="flex flex-wrap gap-1">
                      {card.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-[7px] px-1 py-0.2 rounded font-mono"
                          style={{ backgroundColor: `${accentColor}12`, color: accentColor }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Explanatory Footer */}
      <div className="text-[9px] font-mono text-white/40 text-center flex justify-center items-center gap-1">
        <span>Click sandbox nodes to toggle accent tokens & grid builders.</span>
      </div>
    </div>
  );
}

// 3. PDF EDITOR SIMULATOR
function PdfEditorSimulator() {
  const [activeTool, setActiveTool] = useState<"cursor" | "highlight" | "comment">("cursor");
  const [highlights, setHighlights] = useState<number[]>([]);
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState("");

  const sentences = [
    "This document summarizes system specifications.",
    "The client requested extreme performance visual rendering.",
    "Ensure static HTML outputs bypass heavy database calls.",
    "Verify compatibility across mobile, tablet and desktop viewports."
  ];

  const handleSentenceClick = (index: number) => {
    if (activeTool === "highlight") {
      if (highlights.includes(index)) {
        setHighlights(highlights.filter(h => h !== index));
      } else {
        setHighlights([...highlights, index]);
      }
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText) return;
    setComments([...comments, commentText]);
    setCommentText("");
  };

  const resetAll = () => {
    setHighlights([]);
    setComments([]);
    setActiveTool("cursor");
  };

  return (
    <div className="w-full bg-[#0a0a0c] border border-white/5 rounded-2xl p-5 space-y-4 font-sans shadow-2xl relative text-left">
      {/* Header bar */}
      <div className="flex justify-between items-center border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-3.5 w-3.5 text-indigo-400" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-white/50">Client PDF Sandbox</span>
        </div>
        <button onClick={resetAll} className="text-white/30 hover:text-white/80 transition-colors">
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* PDF Action Toolbar */}
      <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/5">
        <button
          onClick={() => setActiveTool("cursor")}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[10px] font-mono cursor-pointer transition-colors ${
            activeTool === "cursor" ? "bg-white text-black" : "text-white/60 hover:text-white"
          }`}
        >
          <Play className="h-3 w-3 rotate-90 fill-current" />
          Select
        </button>
        <button
          onClick={() => setActiveTool("highlight")}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[10px] font-mono cursor-pointer transition-colors ${
            activeTool === "highlight" ? "bg-indigo-600 text-white" : "text-white/60 hover:text-white"
          }`}
        >
          <Highlighter className="h-3 w-3" />
          Highlight
        </button>
        <button
          onClick={() => setActiveTool("comment")}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[10px] font-mono cursor-pointer transition-colors ${
            activeTool === "comment" ? "bg-sky-600 text-white" : "text-white/60 hover:text-white"
          }`}
        >
          <Sparkles className="h-3 w-3" />
          Comment
        </button>
      </div>

      {/* Simulator Workspace Screen */}
      <div className="grid grid-cols-3 gap-3">
        {/* Left Simulated PDF Document Page (col-span-2) */}
        <div className="col-span-2 border border-white/5 bg-white/[0.01] rounded-xl p-4 min-h-[160px] space-y-2.5">
          <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Page 1 of 1 // PDF.js Sandbox</span>
          
          <div className="space-y-1.5 mt-2">
            {sentences.map((sentence, idx) => (
              <span
                key={idx}
                onClick={() => handleSentenceClick(idx)}
                className={`block text-[10px] leading-relaxed cursor-pointer rounded px-1 transition-colors ${
                  highlights.includes(idx) 
                    ? "bg-indigo-500/35 text-indigo-200 border-l border-indigo-400" 
                    : activeTool === "highlight" ? "hover:bg-white/5 text-white/70" : "text-white/60"
                }`}
              >
                {sentence}
              </span>
            ))}
          </div>
        </div>

        {/* Right Annotations sidebar */}
        <div className="border border-white/5 bg-[#070709] rounded-xl p-3 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[8px] font-mono text-white/30 uppercase block">Annotations</span>
            <div className="space-y-1.5 max-h-[100px] overflow-y-auto pr-1">
              {comments.length === 0 ? (
                <span className="text-[8px] text-white/20 italic block pt-3 text-center">No comments left yet.</span>
              ) : (
                comments.map((comm, idx) => (
                  <div key={idx} className="p-1.5 rounded border border-white/5 bg-white/[0.01] text-[9px] text-white/70 font-mono">
                    {comm}
                  </div>
                ))
              )}
            </div>
          </div>

          {activeTool === "comment" && (
            <form onSubmit={handleAddComment} className="mt-2 space-y-1">
              <input
                type="text"
                placeholder="Note..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full bg-white/5 border border-white/5 rounded px-1.5 py-1 text-[9px] text-white placeholder-white/20 outline-none"
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// 4. GENERAL TECHNICAL SCHEMA SIMULATOR (Fallback)
function TechnicalSpecSimulator({ slug }: { slug: string }) {
  const [activeTab, setActiveTab] = useState<"endpoints" | "schema" | "console">("endpoints");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "System standby. Waiting for request triggers..."
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const getDetails = () => {
    switch (slug) {
      case "cafe-system-php":
        return {
          role: "PHP / SQL Backend Architect",
          endpoints: [
            { method: "POST", path: "/admin/orders/new", desc: "Instantiate sales logs & process checkout" },
            { method: "GET", path: "/api/menu/categories", desc: "Retrieve active cafe inventory catalog" },
            { method: "PUT", path: "/api/inventory/update", desc: "Re-stock item levels & alert alerts" }
          ],
          schema: `Table CafeMenu {
  id integer [primary key]
  title varchar
  price decimal
  stock_count integer
}
Table OrderItem {
  id integer [primary key]
  order_id integer
  menu_item_id integer
  qty integer
}`
        };
      case "mern-login-register":
        return {
          role: "Full-Stack Security Specialist",
          endpoints: [
            { method: "POST", path: "/api/v1/auth/signup", desc: "Salt password with bcrypt & register account" },
            { method: "POST", path: "/api/v1/auth/login", desc: "Verify credentials & return signed JWT token" },
            { method: "GET", path: "/api/v1/user/profile", desc: "Protected route retrieving session context" }
          ],
          schema: `UserSchema {
  email: { type: String, unique: true },
  passwordHash: { type: String },
  role: { type: String, enum: ['user', 'admin'] },
  createdAt: { type: Date, default: Date.now }
}`
        };
      case "medical-system":
        return {
          role: ".NET Core Database Architect",
          endpoints: [
            { method: "POST", path: "/api/appointments/book", desc: "Schedule doctor slot & verify availability" },
            { method: "GET", path: "/api/patient/records", desc: "Fetch medical profiles & active prescriptions" }
          ],
          schema: `class Patient {
  public int Id { get; set; }
  public string FullName { get; set; }
  public List<Appointment> History { get; set; }
}
class Appointment {
  public int Id { get; set; }
  public DateTime Date { get; set; }
  public string Details { get; set; }
}`
        };
      default:
        return {
          role: "Static Frontend Engineer",
          endpoints: [
            { method: "GET", path: `/api/projects/${slug}`, desc: "Serve cached JSON parameters" }
          ],
          schema: `ProjectSchema {
  slug: String,
  title: String,
  description: String,
  techStack: [String]
}`
        };
    }
  };

  const details = getDetails();

  const handleTestRequest = (path: string, method: string) => {
    if (isLoading) return;
    setIsLoading(true);
    setConsoleLogs(prev => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] Triggering ${method} request to ${path}...`
    ]);

    setTimeout(() => {
      setConsoleLogs(prev => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] 200 OK — Response payload generated:`,
        `{ "status": "success", "data": { "requestId": "${Math.random().toString(36).substring(7)}" } }`
      ]);
      setIsLoading(false);
    }, 800);
  };

  const clearConsole = () => {
    setConsoleLogs(["Console cleared. Standby."]);
  };

  return (
    <div className="w-full bg-[#0a0a0c] border border-white/5 rounded-2xl p-5 space-y-4 font-mono shadow-2xl relative text-left">
      {/* Title */}
      <div className="flex justify-between items-center border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-indigo-400" />
          <span className="text-[10px] uppercase tracking-widest text-white/50">{details.role}</span>
        </div>
        
        {/* Simulator Tabs */}
        <div className="flex gap-2 text-[9px] bg-white/5 p-0.5 rounded border border-white/5">
          <button 
            onClick={() => setActiveTab("endpoints")}
            className={`px-2 py-0.8 rounded cursor-pointer transition-colors ${activeTab === "endpoints" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"}`}
          >
            ENDPOINTS
          </button>
          <button 
            onClick={() => setActiveTab("schema")}
            className={`px-2 py-0.8 rounded cursor-pointer transition-colors ${activeTab === "schema" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"}`}
          >
            SCHEMA
          </button>
          <button 
            onClick={() => setActiveTab("console")}
            className={`px-2 py-0.8 rounded cursor-pointer transition-colors ${activeTab === "console" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"}`}
          >
            LOGS
          </button>
        </div>
      </div>

      {/* Content panes */}
      <div className="min-h-[170px] flex flex-col justify-between">
        {activeTab === "endpoints" && (
          <div className="space-y-2.5">
            <span className="text-[8px] text-white/30 uppercase block">Interactive API Routing Suite</span>
            <div className="space-y-2">
              {details.endpoints.map((ep, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 border border-white/5 bg-white/[0.01] rounded-lg text-[10px] gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-1.5 py-0.2 rounded font-bold text-[8px] ${
                        ep.method === "POST" ? "bg-emerald-500/10 text-emerald-400" :
                        ep.method === "PUT" ? "bg-amber-500/10 text-amber-400" : "bg-sky-500/10 text-sky-450"
                      }`}>{ep.method}</span>
                      <span className="font-bold text-white/90">{ep.path}</span>
                    </div>
                    <span className="text-[9px] text-white/40 block leading-relaxed">{ep.desc}</span>
                  </div>
                  <button 
                    onClick={() => {
                      setActiveTab("console");
                      handleTestRequest(ep.path, ep.method);
                    }}
                    className="h-7 w-7 rounded-full bg-white/5 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Play className="h-3 w-3 fill-current ml-0.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "schema" && (
          <div className="space-y-2 flex-1">
            <span className="text-[8px] text-white/30 uppercase block">Database Model Schema (Entity-Relation)</span>
            <pre className="p-3 border border-white/5 bg-white/[0.01] rounded-xl text-[9px] leading-relaxed text-indigo-300 overflow-x-auto select-none mt-1 max-h-[140px]">
              {details.schema}
            </pre>
          </div>
        )}

        {activeTab === "console" && (
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[8px] text-white/30 uppercase">Local sandbox terminal logs</span>
              <button onClick={clearConsole} className="text-[8px] text-white/40 hover:text-white">CLEAR LOGS</button>
            </div>
            <div className="p-3 border border-white/5 bg-[#050507] rounded-xl flex-1 text-[9px] text-emerald-400 space-y-1.5 overflow-y-auto max-h-[120px] font-mono select-none">
              {consoleLogs.map((log, i) => (
                <div key={i} className="whitespace-pre-wrap leading-relaxed">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
