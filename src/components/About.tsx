import { Award, Users, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/container';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Sobre Nós</h2>
            <div className="space-y-6">
              <p className="text-blue-700/80 text-lg leading-relaxed">
                Há 5 anos atuando na engenharia e projetos Civil, estrutural, ICF, Elétrica e automação,
                já conquistamos clientes em toda Bahia. Temos o prazer de fazer parte de um grupo seleto
                de empresas que desenvolve projetos autossustentáveis preservando a natureza.
              </p>
              <p className="text-blue-700/80 text-lg leading-relaxed">
                Nossa companhia preza pelo respeito aos nossos clientes e colaboradores, promovendo
                sempre nossa qualidade de serviços com excelência. Somos uma empresa em expansão de
                mercado com olhos no futuro e na automação residencial, soluções elétricas e
                construtibilidade inovadora.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Award className="h-8 w-8 mx-auto text-blue-600 mb-3" />
                <p className="font-semibold text-xl text-blue-900">5 Anos</p>
                <p className="text-sm text-blue-600">de Experiência</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 mx-auto text-blue-600 mb-3" />
                <p className="font-semibold text-xl text-blue-900">100+</p>
                <p className="text-sm text-blue-600">Clientes</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <MapPin className="h-8 w-8 mx-auto text-blue-600 mb-3" />
                <p className="font-semibold text-xl text-blue-900">Bahia</p>
                <p className="text-sm text-blue-600">Atuação</p>
              </div>
            </div>
          </div>
          <div className="relative lg:order-last">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-xl -z-10" />
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              alt="Equipe de engenharia"
              className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}