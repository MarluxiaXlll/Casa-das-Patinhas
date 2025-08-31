import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Instagram, Heart, Scissors, Droplets, Star, Sparkles, Award, Users } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import './App.css';

// Import das imagens
import petPhoto1 from './assets/foto_pet_1.jpeg';
import petPhoto2 from './assets/foto_pet_2.jpeg';

const services = [
  { name: 'Banho', price: 'a partir de R$ 55,00', icon: Droplets },
  { name: 'Tosa Baby', price: 'a partir de R$ 130,00', icon: Scissors },
  { name: 'Tosa Geral', price: 'a partir de R$ 100,00', icon: Scissors },
  { name: 'Tosa Higiênica', price: 'a partir de R$ 15,00', icon: Scissors },
  { name: 'Tosa de Raças Específicas', price: 'a partir de R$ 130,00', icon: Star },
  { name: 'Hidratação', price: 'a partir de R$ 25,00', icon: Droplets },
  { name: 'Cronogramas de Pelagem', price: 'a partir de R$ 25,00', icon: Scissors },
  { name: 'Remoção de Subpelos', price: 'a partir de R$ 25,00', icon: Scissors },
  { name: 'Corte de Unha', price: 'R$ 10,00', icon: Scissors },
  { name: 'Limpeza de Ouvido', price: 'R$ 10,00', icon: Droplets }
];

const schedule = [
  { day: 'Segunda-feira', hours: '9:00 às 18:00' },
  { day: 'Terça-feira', hours: '9:00 às 18:00' },
  { day: 'Quarta-feira', hours: 'Fechado', closed: true },
  { day: 'Quinta-feira', hours: '9:00 às 18:00' },
  { day: 'Sexta-feira', hours: '9:00 às 18:00' },
  { day: 'Sábado', hours: '9:00 às 15:00' },
  { day: 'Domingo', hours: 'Fechado', closed: true }
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const petImages = [petPhoto1, petPhoto2];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Rotação automática de imagens
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === petImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(imageInterval);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5561996720103', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/casadaspatinhasaguasclaras/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Casa das Patinhas
                </h1>
                <p className="text-sm text-muted-foreground flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Pet Groomer
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleWhatsAppClick} 
                className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                onClick={handleInstagramClick}
                className="hover:bg-pink-50 hover:border-pink-300 transform hover:scale-105 transition-all duration-200"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-amber-100/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 animate-pulse">
              Cuidado e Amor para seu Pet
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Banho e tosa • Coloração pet • Atendimento personalizado<br />
              Aqui o seu pet é amado e bem cuidado
            </p>
            
            <div className="flex justify-center space-x-8 mb-12">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                <Heart className="w-6 h-6 text-red-500 animate-pulse" />
                <span className="text-lg font-semibold">Atendimento Personalizado</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                <Award className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-semibold">Profissionais Qualificados</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                <Users className="w-6 h-6 text-blue-500" />
                <span className="text-lg font-semibold">Mais de 1000 Pets Felizes</span>
              </div>
            </div>
            
            {/* Carrossel de imagens dinâmico */}
            <div className="relative max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src={petImages[currentImageIndex]} 
                    alt="Pet cuidado na Casa das Patinhas" 
                    className="w-full h-64 object-cover transition-all duration-1000 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src={petImages[(currentImageIndex + 1) % petImages.length]} 
                    alt="Pet feliz após o banho e tosa" 
                    className="w-full h-64 object-cover transition-all duration-1000 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Indicadores do carrossel */}
              <div className="flex justify-center mt-6 space-x-2">
                {petImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-orange-500 scale-125' 
                        : 'bg-orange-200 hover:bg-orange-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-12">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Agende Agora pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h3>
            <p className="text-xl text-gray-600">Cuidado completo para o seu melhor amigo</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="text-lg font-semibold">
                      {service.price}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Horário de Funcionamento</h3>
            <div className="flex justify-center">
              <Clock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-semibold text-gray-700">{item.day}</span>
                      <span className={`font-medium ${item.closed ? 'text-red-500' : 'text-green-600'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-8">Entre em Contato</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center space-x-2">
                  <Phone className="w-6 h-6" />
                  <span>WhatsApp</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">Agende seu horário pelo WhatsApp</p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  (61) 99672-0103
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center space-x-2">
                  <Instagram className="w-6 h-6" />
                  <span>Instagram</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">Acompanhe nosso trabalho</p>
                <Button 
                  onClick={handleInstagramClick}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  @casadaspatinhasaguasclaras
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-xl font-bold">Casa das Patinhas</h4>
          </div>
          <p className="text-gray-400 mb-4">
            Cuidado e amor para seu pet • Atendimento personalizado
          </p>
          <div className="flex justify-center space-x-6">
            <button 
              onClick={handleWhatsAppClick} 
              className="text-green-400 hover:text-green-300 transform hover:scale-110 transition-all duration-200"
            >
              <Phone className="w-6 h-6" />
            </button>
            <button 
              onClick={handleInstagramClick} 
              className="text-pink-400 hover:text-pink-300 transform hover:scale-110 transition-all duration-200"
            >
              <Instagram className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © 2025 Casa das Patinhas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
