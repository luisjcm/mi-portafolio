import React, { useState, useRef, useEffect } from 'react';
import { Bot } from 'lucide-react';
import { supabase } from './supabaseClient';
import { getAIResponse } from './aiClient';

// Tipados estrictos
interface UserData { nombre: string; correo: string; }
interface Message { id: string; text: string; sender: 'user' | 'bot'; }

// Base de datos local de Cubot
/*      const RESPUESTAS_BOT = {
        formacion: "Soy Ingeniero de Sistemas con una Maestría en Desarrollo Full-Stack. Me especializo en arquitecturas escalables y rendimiento web.",
        experiencia: "Cuento con 6 años de experiencia técnica en el Sector TI, especializándome en desarrollo de software, React, TypeScript y soporte de infraestructura.",
        servicios: "Ofrezco desarrollo de soluciones digitales a medida (Landing Pages, Portafolios, E-commerce) con un fuerte enfoque técnico, UI/UX y rendimiento estético.",
        defecto: "Disculpa, de momento intenta escribiendo palabras clave como: 'formación', 'experiencia' o 'servicios'."
      }; */

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

  // Efecto que hace scroll hacia abajo cada vez que cambian los mensajes o el estado de "escribiendo"
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
        // 1. Enviamos los datos a la tabla de Supabase
        const { error } = await supabase
          .from('leads_portafolio')
          .insert([
            { nombre: nombreLead, correo: correoLead }
          ]);

        if (error) {
          console.error("Error al guardar el lead:", error);
          // Opcional: Podrías mostrar un mensaje de error al usuario aquí
        } else {
          console.log("Lead guardado exitosamente en la nube ☁️");
        }
      } catch (err) {
        console.error("Error de conexión:", err);
      } finally {
        // 2. Independientemente de si falló o no la BD, dejamos que el usuario chatee
        setIsRegistered(true);
        setMessages([
          { id: '1', text: `¡Excelente, ${nombreLead}! Ya guardé tus datos. ¿En qué te puedo ayudar hoy? Puedes preguntarme sobre mi formación, experiencia o servicios.`, sender: 'bot' }
        ]);
      }
    }
  };

  // Manejador del envío de mensajes en el chat
      const handleSendMessage = async (e: React.FormEvent) => {
          e.preventDefault();
          const userMsg = inputText.trim();
          if (!userMsg) return;

          // 1. Agregamos el mensaje del usuario a la pantalla
          const newUserMessage: Message = { id: Date.now().toString(), text: userMsg, sender: 'user' };
          setMessages((prev) => [...prev, newUserMessage]);
          setInputText('');
          setIsTyping(true);

          try {
            // 2. Enviamos el mensaje a Gemini y esperamos su razonamiento
            const botResponseText = await getAIResponse(userMsg);
            
            // 3. Imprimimos la respuesta inteligente en el chat
            setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: botResponseText, sender: 'bot' }]);
          } catch (error) {
            console.error("Error en el chat:", error);
            setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: "Tuve un pequeño cortocircuito, ¿puedes repetirlo?", sender: 'bot' }]);
          } finally {
            setIsTyping(false);
          }
        };

  return (
    <>
      {/* --- ESTADO 1: CHAT MINIMIZADO (EL FAB DE MEGA MAN) --- */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-zinc-900 border-2 border-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center hover:scale-110 transition-transform duration-300 z-50 group"
          aria-label="Abrir asistente virtual"
        >
          {/* Aquí reemplazaremos el emoji por tu imagen de Mega Man */}
          <span className="text-3xl transform group-hover:rotate-12 transition-transform duration-300">
            <Bot className="w-8 h-8 text-blue-500 group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
          </span>
          
          {/* Un pequeño globo de notificación (UX Premium) */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-zinc-900"></span>
          </span>
        </button>
      )}

      {/* --- ESTADO 2: CHAT MAXIMIZADO (VENTANA COMPLETA) --- */}
      {/* Nota cómo ahora tiene "fixed bottom-24 right-6 z-50" para flotar */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 left-0 sm:left-auto sm:bottom-24 sm:right-6 w-full sm:w-[350px] max-h-[100dvh] sm:max-h-[600px] bg-zinc-900 flex flex-col z-50 animate-fade-in-up border-t sm:border border-zinc-800 sm:rounded-xl shadow-2xl h-full sm:h-[500px]">
          
          {/* Cabecera Modificada */}
          <div className="bg-zinc-950 p-4 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xl shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <Bot className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-zinc-100 font-bold text-sm">Cubot</h3>
                <p className="text-blue-400 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span> En línea
                </p>
              </div>
            </div>
            
            {/* 💡 Botón para minimizar */}
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors p-2 rounded-md hover:bg-zinc-800"
              title="Minimizar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>

          {/* ... (El resto del cuerpo y el input se mantienen exactamente igual) ... */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {!isRegistered ? (
              <div className="flex flex-col h-full justify-center animate-fade-in">
                <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-sm mb-6 text-sm text-zinc-200 leading-relaxed shadow-sm">
                  ¡Hola! Soy Cubot, el asistente virtual. Para brindarte una mejor experiencia, ¿me indicas tu nombre y correo profesional?
                </div>
                <form onSubmit={handleRegister} className="flex flex-col gap-3">
                  <input type="text" placeholder="Tu Nombre o Empresa" className="w-full bg-zinc-950 border border-zinc-700 text-zinc-100 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 text-sm" value={userData.nombre} onChange={(e) => setUserData({ ...userData, nombre: e.target.value })} required />
                  <input type="email" placeholder="correo@ejemplo.com" className="w-full bg-zinc-950 border border-zinc-700 text-zinc-100 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 text-sm" value={userData.correo} onChange={(e) => setUserData({ ...userData, correo: e.target.value })} required />
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg text-sm mt-2 shadow-md">Comenzar Chat</button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 text-sm leading-relaxed shadow-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm' : 'bg-zinc-800 text-zinc-200 rounded-2xl rounded-tl-sm'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-800 text-zinc-400 p-3 rounded-2xl rounded-tl-sm text-sm flex gap-1 items-center h-10 shadow-sm">
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

          {isRegistered && (
            <div className="p-3 bg-zinc-950 border-t border-zinc-800">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input type="text" placeholder="Escribe tu pregunta..." className="flex-1 bg-zinc-900 border border-zinc-700 text-zinc-100 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500 text-sm" value={inputText} onChange={(e) => setInputText(e.target.value)} disabled={isTyping} autoComplete="off" />
                <button type="submit" disabled={isTyping || !inputText.trim()} className="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-white px-4 py-2.5 rounded-lg font-medium">Enviar</button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};