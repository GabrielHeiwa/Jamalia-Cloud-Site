import { Check, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


// const minecraft_features = [
//     {
//         title: "Processador Ryzen 9X",
//         description: "Sinta a potência dos Ryzen 7950X e 5950X",
//     },
//     {
//         title: "Anti-Ddos",
//         description: "Parando mais de 200Tb+ de ataques em menos de 30 segundos!",
//     },
//     {
//         title: "Armazenamento ILIMITADO",
//         description: "Aqui não limitamos o espaço em disco e banco de dados para você!",
//     }
// ]

// const valheim_feature = [
//     {
//         title: "Processador Ryzen 9X",
//         description: "Sinta a potência dos Ryzen 7950X e 5950X",
//     },
//     {
//         title: "Sem limitações!",
//         description: "Aqui nós não limitamos modpacks, número players, armazenamento e backups!",
//     },
//     {
//         title: "Anti-Ddos",
//         description: "Parando mais de 200Tb+ de ataques em menos de 30 segundos!",
//     }
// ]

// const gta_v_features = [
//     {
//         title: "Processadores Ryzen 9X",
//         description: "Sinta a potência dos Ryzen 7950X e 5950X",
//     },
//     {
//         title: "Anti-Dddos",
//         description: "Parando mais de 200Tb+ de ataques em 30 segundos!",
//     },
//     {
//         title: "Armazenamento ILIMITADO",
//         description: "Aqui não limitados o espaço em disco e banco de dados para você!",
//     },
// ]

const aa = [
    {
        "Processador(es)": "5950X/7950X",
        "Armazenamento": "Ilimitado",
        "Banco de dados": "Ilimitado",
        "Trafêgo": "Ilimitado",
        "Proteções": "Anti-DDOS"
    }
]

type CardProps = React.ComponentProps<typeof Card>

export default function PrincingSection({ className, ...props }: CardProps) {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center gap-2">

                <PricingCard
                    name="Basic"
                    description="Para experiências vanilla com poucos jogadores."
                    price={32}
                    ram={8}
                />

                <PricingCard
                    name="Middle"
                    description="Ideal para modpacks com poucos jogadores."
                    price={57}
                    ram={12}
                />

                <PricingCard
                    name="Ultra"
                    description="Para grandes servidores com muitos players."
                    price={90}
                    ram={32}
                />

                <div className="w-[30%] h-auto py-8 px-4 border-2 rounded border-gray-100">

                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Custom¹</p>
                    <p className="mt-2 mb-6 text-lg text-gray-600">Diga o que precisa, crie o seu proprio plano!</p>

                    <p>
                        <strong className="text-3xl font-bold tracking-tight">R$ ?</strong>
                        <span className="text-lg font-semibold text-gray-400">/mês</span>
                    </p>

                    <Button variant={"outline"} className="my-6 rounded w-full">
                        Configurar
                    </Button>

                    <div className="text-sm">
                        <p className="flex py-2">
                            <Check className="mr-2" /> Plano Customizado
                        </p>

                        <p className="flex py-2">
                            <Check className="mr-2" /> Suporte Prioritário
                        </p>

                        <p className="flex py-2">
                            <Check className="mr-2" /> Suporte para configuração
                        </p>

                        <p className="flex py-2">
                            <Check className="mr-2" /> Processadores Ryzen 9 5950X
                        </p>

                        <p className="flex py-2">
                            <Check className="mr-2" /> Armazenamento NVME Ilimitado
                        </p>

                        <p className="flex py-2">
                            <Check className="mr-2" /> Backups Ilimitados
                        </p>

                        <p className="flex py-2">
                            <Check className="mr-2" /> Banco de dados Ilimitados
                        </p>

                        <p className="flex py-2">
                            <Check className="mr-2" /> Anti-DDOS
                        </p>

                    </div>
                </div>

            </div>

            <div className="mx-auto max-w-7xl mt-16 px-6 lg:px-8">
                    <p className="text-sm text-gray-500">¹Necessário liberação da nossa equipe para verificar o suporte.</p>
                    <p className="text-sm text-gray-500">²Planos <strong>Basic</strong>, <strong>Middle</strong> e <strong>Professional</strong> iniciam com 6Gb de RAM aumentando conforme avaliação da equipe e abertura de ticket do contrante do servico.</p>
                </div>


        </div>
    )
}


type PrincingCardType = {
    name: string;
    description: string;
    price: number;
    ram: number;
}

function PricingCard(props: PrincingCardType) {
    const { name, price, description, ram } = props;


    return <div className="w-[30%] h-auto py-8 px-4 border-2 rounded border-gray-100">

        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{name}</p>
        <p className="mt-2 mb-6 text-lg text-gray-600">{description}</p>

        <p>
            <strong className="text-3xl font-bold tracking-tight">R$ {price}</strong>
            <span className="text-lg font-semibold text-gray-400">/mês</span>
        </p>

        <Button variant={"outline"} className="my-6 rounded w-full">
            Experimentar
        </Button>

        <div>
            <p className="flex py-2">
                <Check className="mr-2" /> Processadores Ryzen 9 5950X
            </p>

            <p className="flex py-2">
                <Check className="mr-2" /> Armazenamento NVME Ilimitado
            </p>

            <p className="flex py-2">
                <Check className="mr-2" /> {ram === 0 ? "RAM Ilimitada³" : `até ${ram}Gb de RAM²`}
            </p>

            <p className="flex py-2">
                <Check className="mr-2" /> Backups Ilimitados
            </p>

            <p className="flex py-2">
                <Check className="mr-2" /> Banco de dados Ilimitados
            </p>

            <p className="flex py-2">
                <Check className="mr-2" /> Anti-DDOS
            </p>
        </div>
    </div>
}