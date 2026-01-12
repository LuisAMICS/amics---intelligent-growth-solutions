import React, { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello. I am the AMICS Intelligence Concierge. I can analyze your business needs using advanced reasoning. How can I assist your growth strategy today?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isThinking) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsThinking(true);

    try {
      // Prepare history for API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendChatMessage(userMsg.text, history);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`pointer-events-auto bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl overflow-hidden transition-all duration-300 origin-bottom-right mb-4 flex flex-col
          ${isOpen ? 'w-[380px] h-[500px] opacity-100 scale-100' : 'w-[380px] h-0 opacity-0 scale-90'}`}
      >
        {/* Header */}
        <div className="bg-[#161E2E] border-b border-[#1F2937] p-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
             <div className="bg-[#1F2937] p-1.5 rounded-lg text-primary-blue">
                <span className="material-symbols-outlined text-xl">smart_toy</span>
             </div>
             <div>
               <h3 className="font-bold text-text-main text-sm">AMICS Intelligence</h3>
               <div className="flex items-center gap-1.5">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                 <span className="text-[10px] text-text-muted uppercase tracking-wide">Gemini 3 Pro Active</span>
               </div>
             </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-text-muted hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#111827]">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-primary-blue text-white rounded-br-none' 
                    : 'bg-[#1F2937] text-text-main border border-[#374151] rounded-bl-none'
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isThinking && (
            <div className="flex justify-start">
               <div className="bg-[#1F2937] text-text-main border border-[#374151] rounded-2xl rounded-bl-none p-3 flex items-center gap-2">
                 <span className="text-xs font-mono text-primary-blue uppercase tracking-wider">Thinking</span>
                 <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 bg-primary-blue rounded-full typing-dot"></div>
                   <div className="w-1.5 h-1.5 bg-primary-blue rounded-full typing-dot"></div>
                   <div className="w-1.5 h-1.5 bg-primary-blue rounded-full typing-dot"></div>
                 </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 bg-[#161E2E] border-t border-[#1F2937] shrink-0 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask complex questions..."
            className="flex-1 bg-[#0B0F14] border border-[#1F2937] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary-blue transition-colors placeholder-gray-600"
          />
          <button 
            type="submit"
            disabled={isThinking || !inputText.trim()}
            className="bg-primary-blue hover:bg-primary-hover text-white p-2.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span className="material-symbols-outlined text-xl">send</span>
          </button>
        </form>
      </div>

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group
          ${isOpen ? 'bg-[#161E2E] border border-[#1F2937] rotate-90' : 'bg-primary-blue hover:bg-primary-hover hover:scale-105'}
        `}
      >
        {isOpen ? (
           <span className="material-symbols-outlined text-white text-2xl">close</span>
        ) : (
           <span className="material-symbols-outlined text-white text-2xl group-hover:animate-pulse">chat_bubble</span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;