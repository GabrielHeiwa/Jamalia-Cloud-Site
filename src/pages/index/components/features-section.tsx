import { Database, Gauge, Repeat2 } from 'lucide-react'

const features = [
  {
    name: 'Performance e qualidade.',
    description:
      'Aqui tudo é pensado para garantir a melhor experiência em todos os aspectos.',
    icon: Gauge,
  },
  {
    name: 'Redundância.',
    description: 'Ser repetitivo aqui é lei! Tudo é dois e ser redundante não é crime isso nos permite um uptime de 99.97%',
    icon: Repeat2,
  },
  {
    name: 'Cultura de backups.',
    description: 'Aqui não limitamos backups como também temos todos os backups das máquinas se perder o seu teremos o nosso!',
    icon: Database,
  },
]

export default function FeatureSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">A qualidade que você merece</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A melhor experiência de hospedagem</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Inspirado em grandes players nosso compromisso é trazer a qualidade, confiabilidade e profissionalismo nível Google.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
