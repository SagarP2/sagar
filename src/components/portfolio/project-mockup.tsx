"use client";

import React, { useState, useSyncExternalStore } from "react";
import {
  Play,
  Plus,
  RotateCcw,
  LayoutGrid,
  LayoutList,
  Highlighter,
  FileText,
  Terminal,
  Sparkles,
  ArrowDownRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
      <div className="w-full aspect-[4/3] bg-[#FFFFFF] border border-[#DAD8D0] rounded-xl flex items-center justify-center">
        <span className="text-xs text-[#68665F] uppercase tracking-wider font-mono">
          Loading Interactive Preview...
        </span>
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

function TrackMySpendSimulator() {
  const [transactions, setTransactions] = useState([
    { id: 1, name: "Shopify API Subscription", amount: -29.0, category: "SaaS", time: "Just now" },
    { id: 2, name: "Client Milestone Payout", amount: 1250.0, category: "Income", time: "2h ago" },
    { id: 3, name: "Cloud Hosting Pro", amount: -20.0, category: "Hosting", time: "5h ago" },
  ]);
  const [balance, setBalance] = useState(2450.0);
  const [expenses, setExpenses] = useState(380.0);

  const [mockName, setMockName] = useState("");
  const [mockAmount, setMockAmount] = useState("");
  const mockCategory = "SaaS";

  const addTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mockName || !mockAmount) return;

    const amt = parseFloat(mockAmount);
    if (Number.isNaN(amt)) return;

    const newTx = {
      id: Date.now(),
      name: mockName,
      amount: amt,
      category: mockCategory,
      time: "Just now",
    };

    setTransactions([newTx, ...transactions.slice(0, 3)]);
    if (amt > 0) {
      setBalance((prev) => prev + amt);
    } else {
      setExpenses((prev) => prev + Math.abs(amt));
      setBalance((prev) => prev + amt);
    }
    setMockName("");
    setMockAmount("");
  };

  const resetSimulator = () => {
    setTransactions([
      { id: 1, name: "Shopify API Subscription", amount: -29.0, category: "SaaS", time: "Just now" },
      { id: 2, name: "Client Milestone Payout", amount: 1250.0, category: "Income", time: "2h ago" },
      { id: 3, name: "Cloud Hosting Pro", amount: -20.0, category: "Hosting", time: "5h ago" },
    ]);
    setBalance(2450.0);
    setExpenses(380.0);
  };

  return (
    <div className="w-full bento-card bg-[#FFFFFF] rounded-xl p-6 space-y-5 font-sans">
      <div className="flex justify-between items-center border-b border-[#DAD8D0] pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#590907]" />
          <span className="text-xs uppercase font-mono font-semibold tracking-wider text-[#24231F]">
            Finance Dashboard Preview
          </span>
        </div>
        <button
          type="button"
          onClick={resetSimulator}
          aria-label="Reset finance preview"
          className="text-[#68665F] hover:text-[#590907] transition-colors cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border border-[#DAD8D0] bg-[#F7F5F0] rounded-lg p-4 text-left">
          <div className="text-[11px] uppercase tracking-wider text-[#68665F] font-mono">
            Total Balance
          </div>
          <div className="text-xl font-bold text-[#24231F] tracking-tight mt-1 font-heading">
            ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
        <div className="border border-[#DAD8D0] bg-[#E8D2B5]/55 rounded-lg p-4 text-left">
          <div className="text-[11px] uppercase tracking-wider text-[#590907] font-mono">
            Total Expenses
          </div>
          <div className="text-xl font-bold tracking-tight mt-1 flex items-center text-[#590907] font-heading">
            <ArrowDownRight className="h-4 w-4 mr-0.5" />
            ${expenses.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
      </div>

      <div className="space-y-2.5 text-left">
        <span className="text-[11px] uppercase font-mono font-semibold tracking-wider text-[#68665F]">
          Recent Activity
        </span>
        <div className="space-y-2">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3 border border-[#DAD8D0] bg-[#F7F5F0] rounded-lg text-xs"
            >
              <div className="space-y-0.5">
                <div className="font-semibold text-[#24231F]">{tx.name}</div>
                <div className="text-[11px] text-[#68665F] flex items-center gap-1.5 font-mono">
                  <span className="px-1.5 py-0.5 bg-[#E8D2B5] rounded text-[10px] text-[#590907] font-semibold">
                    {tx.category}
                  </span>
                  <span>•</span>
                  <span>{tx.time}</span>
                </div>
              </div>
              <span
                className={cn(
                  "font-mono font-bold",
                  tx.amount > 0 ? "text-[#24231F]" : "text-[#590907]"
                )}
              >
                {tx.amount > 0 ? "+" : ""}${tx.amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={addTransaction} className="border-t border-[#DAD8D0] pt-4 flex gap-2">
        <input
          type="text"
          placeholder="Add item..."
          value={mockName}
          onChange={(e) => setMockName(e.target.value)}
          className="flex-1 bg-[#F7F5F0] border border-[#DAD8D0] focus:border-[#590907] rounded-md px-3 py-2 text-xs text-[#24231F] placeholder-[#68665F]"
        />
        <input
          type="number"
          placeholder="-35"
          value={mockAmount}
          onChange={(e) => setMockAmount(e.target.value)}
          className="w-20 bg-[#F7F5F0] border border-[#DAD8D0] focus:border-[#590907] rounded-md px-2 py-2 text-xs text-[#24231F] placeholder-[#68665F] text-center font-mono"
        />
        <button
          type="submit"
          aria-label="Add transaction"
          className="bg-[#590907] hover:bg-[#3D0605] text-[#F7F5F0] px-3 py-2 rounded-md flex items-center justify-center transition-colors cursor-pointer"
        >
          <Plus className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

function PortfolioBuilderSimulator() {
  const [layoutMode, setLayoutMode] = useState<"grid" | "list">("grid");
  const [activeTab, setActiveTab] = useState("works");

  const mockCards = [
    { title: "E-Commerce Core", tags: ["Shopify", "React"] },
    { title: "REST API Gateway", tags: ["Node.js", "Express"] },
    { title: "Next.js Web App", tags: ["Next.js", "MongoDB"] },
  ];

  return (
    <div className="w-full bento-card bg-[#FFFFFF] rounded-xl p-6 space-y-5 font-sans">
      <div className="flex justify-between items-center border-b border-[#DAD8D0] pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#590907]" />
          <span className="text-xs uppercase font-mono font-semibold tracking-wider text-[#24231F]">
            Layout System Preview
          </span>
        </div>

        <div className="flex gap-1 bg-[#F7F5F0] p-1 rounded-md border border-[#DAD8D0]">
          <button
            type="button"
            onClick={() => setLayoutMode("grid")}
            aria-label="Grid layout"
            className={cn(
              "p-1.5 rounded cursor-pointer transition-colors",
              layoutMode === "grid" ? "bg-[#590907] text-[#F7F5F0]" : "text-[#68665F]"
            )}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setLayoutMode("list")}
            aria-label="List layout"
            className={cn(
              "p-1.5 rounded cursor-pointer transition-colors",
              layoutMode === "list" ? "bg-[#590907] text-[#F7F5F0]" : "text-[#68665F]"
            )}
          >
            <LayoutList className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="border border-[#DAD8D0] rounded-lg overflow-hidden bg-[#F7F5F0] flex flex-col text-left">
        <div className="p-3.5 border-b border-[#DAD8D0] flex justify-between items-center bg-[#A5A79B]/20">
          <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#590907]">
            PORTFOLIO.UI
          </span>
          <div className="flex gap-4 text-xs text-[#68665F] font-mono">
            <button
              type="button"
              className={cn("cursor-pointer", activeTab === "about" && "text-[#590907] font-bold")}
              onClick={() => setActiveTab("about")}
            >
              ABOUT
            </button>
            <button
              type="button"
              className={cn("cursor-pointer", activeTab === "works" && "text-[#590907] font-bold")}
              onClick={() => setActiveTab("works")}
            >
              WORKS
            </button>
          </div>
        </div>

        <div className="p-5 space-y-4">
          {activeTab === "about" ? (
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-bold text-[#24231F] font-heading">
                Full-Stack Architecture
              </h3>
              <p className="text-xs text-[#68665F] leading-relaxed">
                Dynamic content management, AWS S3 asset storage, and responsive component layouts.
              </p>
            </div>
          ) : (
            <div className={cn("gap-3", layoutMode === "grid" ? "grid grid-cols-2" : "flex flex-col")}>
              {mockCards.map((card) => (
                <div
                  key={card.title}
                  className="border border-[#DAD8D0] bg-[#FFFFFF] rounded-lg p-3.5 space-y-2"
                >
                  <div className="text-xs font-bold text-[#24231F] font-heading">
                    {card.title}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded font-mono font-semibold bg-[#E8D2B5]/65 text-[#590907]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PdfEditorSimulator() {
  const [activeTool, setActiveTool] = useState<"cursor" | "highlight" | "comment">("highlight");
  const [highlights, setHighlights] = useState<number[]>([0]);
  const [comments, setComments] = useState<string[]>(["Verified layout margins."]);
  const [commentText, setCommentText] = useState("");

  const sentences = [
    "This document summarizes system specifications.",
    "Client-side PDF rendering reduces server load.",
    "Annotations and highlights persist across sessions.",
    "Compatible across mobile, tablet, and desktop viewports.",
  ];

  const handleSentenceClick = (index: number) => {
    if (activeTool === "highlight") {
      if (highlights.includes(index)) {
        setHighlights(highlights.filter((h) => h !== index));
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
    <div className="w-full bento-card bg-[#FFFFFF] rounded-xl p-6 space-y-5 font-sans text-left">
      <div className="flex justify-between items-center border-b border-[#DAD8D0] pb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-[#590907]" />
          <span className="text-xs uppercase font-mono font-semibold tracking-wider text-[#24231F]">
            PDF Annotation Preview
          </span>
        </div>
        <button
          type="button"
          onClick={resetAll}
          aria-label="Reset PDF annotations"
          className="text-[#68665F] hover:text-[#590907] transition-colors cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <div className="flex gap-2 p-1 bg-[#F7F5F0] rounded-lg border border-[#DAD8D0]">
        <button
          type="button"
          onClick={() => setActiveTool("cursor")}
          className={cn(
            "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-mono font-semibold uppercase tracking-wider cursor-pointer transition-colors",
            activeTool === "cursor"
              ? "bg-[#590907] text-[#F7F5F0]"
              : "text-[#68665F] hover:text-[#24231F]"
          )}
        >
          <Play className="h-3 w-3 rotate-90 fill-current" />
          Select
        </button>
        <button
          type="button"
          onClick={() => setActiveTool("highlight")}
          className={cn(
            "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-mono font-semibold uppercase tracking-wider cursor-pointer transition-colors",
            activeTool === "highlight"
              ? "bg-[#590907] text-[#F7F5F0]"
              : "text-[#68665F] hover:text-[#24231F]"
          )}
        >
          <Highlighter className="h-3 w-3" />
          Highlight
        </button>
        <button
          type="button"
          onClick={() => setActiveTool("comment")}
          className={cn(
            "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-mono font-semibold uppercase tracking-wider cursor-pointer transition-colors",
            activeTool === "comment"
              ? "bg-[#590907] text-[#F7F5F0]"
              : "text-[#68665F] hover:text-[#24231F]"
          )}
        >
          <Sparkles className="h-3 w-3" />
          Comment
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2 border border-[#DAD8D0] bg-[#F7F5F0] rounded-lg p-4 space-y-2.5">
          <span className="text-[10px] font-mono text-[#68665F] uppercase tracking-wider">
            Page 1 // Interactive Document
          </span>
          <div className="space-y-2 pt-1">
            {sentences.map((sentence, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => handleSentenceClick(idx)}
                className={cn(
                  "w-full text-left block text-xs leading-relaxed cursor-pointer rounded p-1.5 transition-colors",
                  highlights.includes(idx)
                    ? "bg-[#E8D2B5] text-[#590907] font-medium border-l-2 border-[#590907]"
                    : "text-[#24231F] hover:bg-[#A5A79B]/18"
                )}
              >
                {sentence}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-[#DAD8D0] bg-[#A5A79B]/18 rounded-lg p-3.5 flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#590907] uppercase block font-bold">
              Notes
            </span>
            <div className="space-y-1.5 max-h-[120px] overflow-y-auto">
              {comments.length === 0 ? (
                <span className="text-xs text-[#68665F] italic block">No annotations.</span>
              ) : (
                comments.map((comm, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded border border-[#DAD8D0] bg-[#FFFFFF] text-xs text-[#24231F]"
                  >
                    {comm}
                  </div>
                ))
              )}
            </div>
          </div>

          {activeTool === "comment" && (
            <form onSubmit={handleAddComment}>
              <input
                type="text"
                placeholder="Add note..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full bg-[#FFFFFF] border border-[#DAD8D0] rounded px-2.5 py-1.5 text-xs text-[#24231F] placeholder-[#68665F]"
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function TechnicalSpecSimulator({ slug }: { slug: string }) {
  const [activeTab, setActiveTab] = useState<"endpoints" | "schema" | "console">("endpoints");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "Ready. Click any route to inspect response payload.",
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const getDetails = () => {
    switch (slug) {
      case "cafe-system-php":
        return {
          role: "PHP / SQL Backend Architecture",
          endpoints: [
            { method: "POST", path: "/admin/orders/new", desc: "Create order & process checkout" },
            { method: "GET", path: "/api/menu/categories", desc: "Retrieve active cafe menu catalog" },
            { method: "PUT", path: "/api/inventory/update", desc: "Update item stock levels" },
          ],
          schema: `Table CafeMenu {
  id integer [primary key]
  title varchar
  price decimal
  stock_count integer
}`,
        };
      case "mern-login-register":
        return {
          role: "MERN Authentication Service",
          endpoints: [
            { method: "POST", path: "/api/v1/auth/signup", desc: "Hash password with bcrypt & create user" },
            { method: "POST", path: "/api/v1/auth/login", desc: "Validate credentials & issue JWT" },
            { method: "GET", path: "/api/v1/user/profile", desc: "Protected session profile route" },
          ],
          schema: `UserSchema {
  email: { type: String, unique: true },
  passwordHash: { type: String },
  role: { type: String, enum: ['user', 'admin'] }
}`,
        };
      case "medical-system":
        return {
          role: "Healthcare Management System",
          endpoints: [
            { method: "POST", path: "/api/appointments/book", desc: "Schedule doctor appointment slot" },
            { method: "GET", path: "/api/patient/records", desc: "Retrieve patient history & prescriptions" },
          ],
          schema: `class Patient {
  public int Id { get; set; }
  public string FullName { get; set; }
  public List<Appointment> History { get; set; }
}`,
        };
      default:
        return {
          role: "Application Specification",
          endpoints: [
            { method: "GET", path: `/api/projects/${slug}`, desc: "Retrieve structured project data" },
          ],
          schema: `ProjectSchema {
  slug: String,
  title: String,
  techStack: [String]
}`,
        };
    }
  };

  const details = getDetails();

  const handleTestRequest = (path: string, method: string) => {
    if (isLoading) return;
    setIsLoading(true);
    setConsoleLogs((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] ${method} ${path} -> 200 OK`,
    ]);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="w-full bento-card bg-[#FFFFFF] rounded-xl p-6 space-y-5 font-mono text-left">
      <div className="flex justify-between items-center border-b border-[#DAD8D0] pb-3 gap-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-[#590907]" />
          <span className="text-xs uppercase font-semibold tracking-wider text-[#24231F]">
            {details.role}
          </span>
        </div>

        <div className="flex gap-1 bg-[#F7F5F0] p-1 rounded-md border border-[#DAD8D0]">
          {(["endpoints", "schema", "console"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-2.5 py-1 rounded cursor-pointer transition-colors text-[10px] uppercase font-bold tracking-wider",
                activeTab === tab
                  ? "bg-[#590907] text-[#F7F5F0]"
                  : "text-[#68665F] hover:text-[#24231F]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[180px]">
        {activeTab === "endpoints" && (
          <div className="space-y-2.5">
            {details.endpoints.map((ep, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 border border-[#DAD8D0] bg-[#F7F5F0] rounded-lg text-xs gap-2"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-[#E8D2B5] text-[#590907]">
                      {ep.method}
                    </span>
                    <span className="font-bold text-[#24231F]">{ep.path}</span>
                  </div>
                  <span className="text-xs text-[#68665F] block font-sans">{ep.desc}</span>
                </div>
                <button
                  type="button"
                  aria-label={`Test ${ep.method} ${ep.path}`}
                  onClick={() => {
                    setActiveTab("console");
                    handleTestRequest(ep.path, ep.method);
                  }}
                  className="h-8 w-8 rounded-md bg-[#590907] hover:bg-[#3D0605] text-[#F7F5F0] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "schema" && (
          <pre className="p-4 border border-[#DAD8D0] bg-[#F7F5F0] rounded-lg text-xs leading-relaxed text-[#24231F] overflow-x-auto font-mono">
            {details.schema}
          </pre>
        )}

        {activeTab === "console" && (
          <div className="p-4 border border-[#DAD8D0] bg-[#F7F5F0] rounded-lg text-xs text-[#590907] space-y-1.5 overflow-y-auto max-h-[160px] font-mono">
            {consoleLogs.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
