import { Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      </div>
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building2 className="h-10 w-10 md:h-12 md:w-12 text-blue-300" />
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Engenharia & Inovação
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Há 5 anos transformando ideias em projetos sustentáveis por toda Bahia
          </p>
          <Button 
            size="lg"
            className="bg-white hover:bg-blue-50 text-blue-900 hover:text-blue-800 text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Fale Conosco
          </Button>
        </div>
      </Container>
    </div>
  );
}