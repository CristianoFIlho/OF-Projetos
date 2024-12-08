import { Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <Container>
        <SectionTitle title="Entre em Contato" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <form className="space-y-6">
              <div className="space-y-4">
                <Input 
                  placeholder="Nome" 
                  className="border-blue-200 focus:border-blue-500 h-12" 
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="border-blue-200 focus:border-blue-500 h-12" 
                />
                <Input 
                  placeholder="Telefone" 
                  className="border-blue-200 focus:border-blue-500 h-12" 
                />
                <Textarea 
                  placeholder="Mensagem" 
                  className="h-32 border-blue-200 focus:border-blue-500 resize-none" 
                />
              </div>
              <Button 
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white h-12 text-lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
          <div className="space-y-10 lg:pl-8">
            {[
              { icon: Mail, title: 'Email', content: 'contato@empresa.com.br' },
              { icon: Phone, title: 'Telefone', content: '(71) 9999-9999' },
              { icon: MapPin, title: 'Localização', content: 'Salvador, Bahia' }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-900">{item.title}</h3>
                  <p className="text-blue-700/80">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}