import PokeUi from "../../components/poke/PokeUi";
import HeaderPoke from "../../components/ui/tailwind/HeaderPoke";
import { useGetPoke } from "../../hooks/poke_api/useGetPoke";

function Poke() {
    const { poke, isGetPoke } = useGetPoke({ limit: 20, offset: 0 });

    return (
        <div>
            <HeaderPoke/>
            <h1 className="text-2xl font-bold p-4">Pokemon List</h1>
            <PokeUi poke={poke} isLoading={isGetPoke} />
        </div>
    )
}

export default Poke
