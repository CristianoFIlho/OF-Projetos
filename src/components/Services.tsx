import { Lightbulb, Home, Leaf, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';

const services = [
  {
    icon: Home,
    title: 'Engenharia Civil',
    description: 'Projetos estruturais e construções sustentáveis com foco em qualidade.',
  },
  {
    icon: Lightbulb,
    title: 'Engenharia Elétrica',
    description: 'Soluções elétricas eficientes e seguras para seu projeto.',
  },
  {
    icon: Cpu,
    title: 'Automação',
    description: 'Automação residencial inteligente para maior conforto e eficiência.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Projetos autossustentáveis que preservam o meio ambiente.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <Container>
        <SectionTitle title="Nossos Serviços" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700/80 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}