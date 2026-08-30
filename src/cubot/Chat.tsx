import React, { useState, useRef, useEffect } from 'react';
import { Bot } from 'lucide-react';
import { supabase } from './supabaseClient';
import { getAIResponse } from './aiClient';

// Tipados estrictos
interface UserData { nombre: string; correo: string; }
interface Message { id: string; text: string; sender: 'user' | 'bot'; }

// Función avanzada para formatear Markdown básico (negritas, cursivas, saltos de línea y viñetas)
const formatMessageText = (text: string) => {
  let formatted = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-text font-semibold">$1</strong>')
    .replace(/__(.*?)__/g, '<strong class="text-brand-text font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/_(.*?)_/g, '<em class="italic">$1</em>');

  formatted = formatted.replace(/\n/g, '<br />');

  return { __html: formatted };
};

export const Chat = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({ nombre: '', correo: '' });
  
  // Estados del Chat
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Referencias para el auto-scroll y para mantener el foco en el input
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 1. Bloqueo estricto del scroll de la página de fondo mientras el chat esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      // Enfocar el input al abrir el chat (si ya está registrado)
      setTimeout(() => inputRef.current?.focus(), 100);
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

  // 3. Mantener el focus en el input después de que el bot responde o termina de escribir
  useEffect(() => {
    if (isRegistered && !isTyping) {
      inputRef.current?.focus();
    }
  }, [isTyping, isRegistered]);

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
          className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-brand-surface border-2 border-brand-accent rounded-full shadow-brand-accent/50 flex items-center justify-center hover:scale-110 transition-transform duration-300 z-50 group cursor-pointer"
          aria-label="Abrir asistente virtual"
        >
          <span className="transform group-hover:rotate-12 transition-transform duration-300">
            <Bot className="w-7 h-7 md:w-8 md:h-8 text-brand-accent" strokeWidth={1.5} />
          </span>
          
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-accent border-2 border-brand-border"></span>
          </span>
        </button>
      )}

      {/* --- OVERLAY CON DESENFOQUE --- */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-brand-bg/60 backdrop-blur-xs z-40 transition-opacity duration-300"
        />
      )}

      {/* --- VENTANA DEL CHAT FLOTANTE --- */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] max-w-sm h-[490px] max-h-[calc(100dvh-7rem)] bg-brand-bg border border-brand-border/90 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-in fade-in zoom-in-95">
          
          {/* Cabecera */}
          <div className="bg-brand-surface/80 backdrop-blur-md p-4 border-b border-brand-border flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center shadow-brand-accent/50">
                <Bot className="w-5 h-5 text-brand-text" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-brand-muted font-bold text-sm leading-tight">Cubot</h3>
                <p className="text-brand-accent text-[11px] font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span> En línea
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-brand-muted hover:text-brand-text transition-colors p-1.5 rounded-lg hover:bg-brand-surface-subtle cursor-pointer"
              title="Cerrar chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Área de Mensajes */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 flex flex-col gap-3.5 bg-brand-bg">
            {!isRegistered ? (
              <div className="flex flex-col h-full justify-center">
                <div className="bg-brand-surface border border-brand-border p-4 rounded-2xl rounded-tl-sm mb-4 text-[13px] text-brand-muted leading-relaxed shadow-sm">
                  ¡Hola! Soy Cubot, el asistente virtual de Luis Jesús. Para brindarte una mejor experiencia, ¿me indicas tu nombre y correo profesional?
                </div>
                <form onSubmit={handleRegister} className="flex flex-col gap-2.5">
                  <input 
                    type="text" 
                    placeholder="Tu Nombre o Empresa" 
                    className="w-full bg-brand-surface/90 border border-brand-border text-brand-muted px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-brand-accent text-[13px]" 
                    value={userData.nombre} 
                    onChange={(e) => setUserData({ ...userData, nombre: e.target.value })} 
                    required 
                  />
                  <input 
                    type="email" 
                    placeholder="correo@ejemplo.com" 
                    className="w-full bg-brand-surface/90 border border-brand-border text-brand-muted px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-brand-accent text-[13px]" 
                    value={userData.correo} 
                    onChange={(e) => setUserData({ ...userData, correo: e.target.value })} 
                    required 
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-brand-primary hover:bg-brand-accent text-brand-text font-semibold py-2.5 rounded-xl text-[13px] mt-1 shadow-md cursor-pointer transition-colors active:scale-98"
                  >
                    Comenzar Chat
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div 
                      className={`max-w-[85%] p-3 text-[13px] leading-relaxed shadow-sm ${
                        msg.sender === 'user' 
                          ? 'bg-brand-primary text-brand-text rounded-2xl rounded-tr-sm'
                          : 'bg-brand-surface border border-brand-border text-brand-muted rounded-2xl rounded-tl-sm'
                      }`}
                      {...(msg.sender === 'bot' 
                        ? { dangerouslySetInnerHTML: formatMessageText(msg.text) } 
                        : { children: msg.text }
                      )}
                    />
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-brand-surface border border-brand-border text-brand-muted px-3.5 py-2.5 rounded-2xl rounded-tl-sm text-sm flex gap-1.5 items-center shadow-sm">
                      <span className="w-1.5 h-1.5 bg-brand-bg rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-brand-bg rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                      <span className="w-1.5 h-1.5 bg-brand-bg rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Formulario de Entrada */}
          {isRegistered && (
            <div className="p-3 bg-brand-surface/60 border-t border-brand-border shrink-0">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input 
                  ref={inputRef} // <-- Referencia asignada aquí para mantener el focus
                  type="text" 
                  placeholder="Escribe tu pregunta..." 
                  className="flex-1 bg-brand-surface border border-brand-border text-brand-muted px-3.5 py-2 rounded-xl focus:outline-none focus:border-brand-accent text-[13px]"
                  value={inputText} 
                  onChange={(e) => setInputText(e.target.value)} 
                  disabled={isTyping} 
                  autoComplete="off" 
                />
                <button 
                  type="submit" 
                  disabled={isTyping || !inputText.trim()} 
                  className="bg-brand-primary hover:bg-brand-accent disabled:bg-brand-surface-subtle disabled:text-brand-muted text-brand-text px-4 py-2 rounded-xl font-semibold text-[13px] transition-colors cursor-pointer shrink-0"
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