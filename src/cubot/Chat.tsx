import React, { useState, useRef, useEffect } from 'react';
import { Bot } from 'lucide-react';
import { supabase } from './supabaseClient';
import { getAIResponse } from './aiClient';

// Tipados estrictos
interface UserData { nombre: string; correo: string; }
interface Message { id: string; text: string; sender: 'user' | 'bot'; }

export const Chat = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({ nombre: '', correo: '' });
  
  // Estados del Chat
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Referencia para el auto-scroll
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 1. Bloqueo estricto del scroll de la página de fondo mientras el chat esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => { 
      document.body.style.overflow = 'unset'; 
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  // 2. Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Manejador del Formulario Inicial
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const nombreLead = userData.nombre.trim();
    const correoLead = userData.correo.trim();

    if (nombreLead !== '' && correoLead !== '') {
      try {
        const { error } = await supabase
          .from('leads_portafolio')
          .insert([
            { nombre: nombreLead, correo: correoLead }
          ]);

        if (error) {
          console.error("Error al guardar el lead:", error);
        } else {
          console.log("Lead guardado exitosamente en la nube ☁️");
        }
      } catch (err) {
        console.error("Error de conexión:", err);
      } finally {
        setIsRegistered(true);
        setMessages([
          { id: '1', text: `¡Excelente, ${nombreLead}! Ya guardé tus datos. ¿En qué te puedo ayudar hoy? Puedes preguntarme sobre mi formación, experiencia o servicios.`, sender: 'bot' }
        ]);
      }
    }
  };

  // Manejador del envío de mensajes
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMsg = inputText.trim();
    if (!userMsg) return;

    const newUserMessage: Message = { id: Date.now().toString(), text: userMsg, sender: 'user' };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputText('');
    setIsTyping(true);

    const formattedHistory = messages.map(msg => ({
      role: msg.sender === 'bot' ? 'assistant' : 'user',
      content: msg.text
    }));

    formattedHistory.push({ role: 'user', content: userMsg });
    try {
      const aiResponseText = await getAIResponse(formattedHistory);
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: aiResponseText, sender: 'bot' }]);
    } catch (error) {
      console.error("Error en el chat:", error);
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: "Tuve un pequeño cortocircuito, ¿puedes repetirlo?", sender: 'bot' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* --- BOTÓN FLOTANTE MINIMIZADO --- */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-zinc-900 border-2 border-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center hover:scale-110 transition-transform duration-300 z-50 group cursor-pointer"
          aria-label="Abrir asistente virtual"
        >
          <span className="transform group-hover:rotate-12 transition-transform duration-300">
            <Bot className="w-7 h-7 md:w-8 md:h-8 text-blue-500" strokeWidth={1.5} />
          </span>
          
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-zinc-900"></span>
          </span>
        </button>
      )}

      {/* --- OVERLAY CON DESENFOQUE (Fondo oscuro para evitar tocar la página de atrás) --- */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity duration-300"
        />
      )}

      {/* --- VENTANA DEL CHAT FLOTANTE --- */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] max-w-sm h-[490px] max-h-[calc(100dvh-7rem)] bg-zinc-950 border border-zinc-800/90 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-in fade-in zoom-in-95">
          
          {/* Cabecera */}
          <div className="bg-zinc-900/80 backdrop-blur-md p-4 border-b border-zinc-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                <Bot className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-zinc-100 font-bold text-sm leading-tight">Cubot</h3>
                <p className="text-blue-400 text-[11px] font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> En línea
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-zinc-800 cursor-pointer"
              title="Cerrar chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Área de Mensajes */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 flex flex-col gap-3.5 bg-zinc-950">
            {!isRegistered ? (
              <div className="flex flex-col h-full justify-center">
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl rounded-tl-sm mb-4 text-[13px] text-zinc-300 leading-relaxed shadow-sm">
                  ¡Hola! Soy Cubot, el asistente virtual de Luis Jesus. Para brindarte una mejor experiencia, ¿me indicas tu nombre y correo profesional?
                </div>
                <form onSubmit={handleRegister} className="flex flex-col gap-2.5">
                  <input 
                    type="text" 
                    placeholder="Tu Nombre o Empresa" 
                    className="w-full bg-zinc-900/90 border border-zinc-800 text-zinc-100 px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-blue-500 text-[13px]" 
                    value={userData.nombre} 
                    onChange={(e) => setUserData({ ...userData, nombre: e.target.value })} 
                    required 
                  />
                  <input 
                    type="email" 
                    placeholder="correo@ejemplo.com" 
                    className="w-full bg-zinc-900/90 border border-zinc-800 text-zinc-100 px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-blue-500 text-[13px]" 
                    value={userData.correo} 
                    onChange={(e) => setUserData({ ...userData, correo: e.target.value })} 
                    required 
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-xl text-[13px] mt-1 shadow-md cursor-pointer transition-colors active:scale-98"
                  >
                    Comenzar Chat
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 text-[13px] leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm' 
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-2xl rounded-tl-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-3.5 py-2.5 rounded-2xl rounded-tl-sm text-sm flex gap-1.5 items-center shadow-sm">
                      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Formulario de Entrada */}
          {isRegistered && (
            <div className="p-3 bg-zinc-900/60 border-t border-zinc-800 shrink-0">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Escribe tu pregunta..." 
                  className="flex-1 bg-zinc-900 border border-zinc-800 text-zinc-100 px-3.5 py-2 rounded-xl focus:outline-none focus:border-blue-500 text-[13px]" 
                  value={inputText} 
                  onChange={(e) => setInputText(e.target.value)} 
                  disabled={isTyping} 
                  autoComplete="off" 
                />
                <button 
                  type="submit" 
                  disabled={isTyping || !inputText.trim()} 
                  className="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white px-4 py-2 rounded-xl font-semibold text-[13px] transition-colors cursor-pointer shrink-0"
                >
                  Enviar
                </button>
              </form>
            </div>
          )}

        </div>
      )}
    </>
  );
};