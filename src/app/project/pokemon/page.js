import PokeNavbar from "@/components/PokeNavbar"
import PokeGacha from "@/components/PokeGacha"
import PokeGamego from "@/components/PokeGogame"

export const metadata = {
    title: '포켓몬 도감채우기 게임',
  }

export default function PokemonHome() {
    return(
        <>
            <PokeNavbar /> 
            <div className="space-y-8">
                <PokeGacha />
                <PokeGamego /> 
            </div>
                    

        </>
     

    )
}